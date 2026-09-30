import { describe, expect, it } from 'vitest';
import { archetype, countriesByAxis, distance, isRankable, similarity, topMatches } from './matching.ts';
import { makeProfile, scoresFrom, uniformScores } from './testing.ts';

describe('matching', () => {
  const user = scoresFrom([50, -20, -60, 0, 10, -30, 40, 70, 90, -80, 0, 100]);

  it('un perfil idéntico da 100 %', () => {
    expect(similarity(user, makeProfile('igual', user))).toBe(100);
  });

  it('los extremos opuestos dan 0 %', () => {
    expect(similarity(uniformScores(100), makeProfile('opuesto', uniformScores(-100)))).toBe(0);
  });

  it('una diferencia en un eje de confianza baja penaliza menos que en uno de confianza alta', () => {
    const shifted = { ...user, eco: user.eco - 40 };
    const low = makeProfile('baja', shifted, { confidence: { eco: 'baja' } });
    const high = makeProfile('alta', shifted, { confidence: { eco: 'alta' } });
    expect(distance(user, low)).toBeLessThan(distance(user, high));
    expect(similarity(user, low)).toBeGreaterThan(similarity(user, high));
  });

  it('topMatches filtra por tipo, ordena y limita', () => {
    const profiles = [
      makeProfile('lejos', uniformScores(-100)),
      makeProfile('cerca', { ...user, geo: 0 }),
      makeProfile('medio', uniformScores(30)),
      makeProfile('otro-tipo', user, { kind: 'politico' }),
    ];
    expect(topMatches(user, profiles, 'partido', 2).map((m) => m.profile.id)).toEqual(['cerca', 'medio']);
    expect(topMatches(user, profiles, 'politico').map((m) => m.profile.id)).toEqual(['otro-tipo']);
  });

  it('archetype devuelve el arquetipo más cercano', () => {
    const profiles = [
      makeProfile('a1', uniformScores(-50), { kind: 'arquetipo' }),
      makeProfile('a2', uniformScores(40), { kind: 'arquetipo' }),
      makeProfile('partido', user),
    ];
    expect(archetype(user, profiles)?.profile.id).toBe('a2');
    expect(archetype(user, [])).toBeUndefined();
  });

  it('countriesByAxis devuelve, por eje, los países más cercanos', () => {
    const pais = (id: string, eco: number, mig: number) =>
      makeProfile(id, { ...uniformScores(0), eco, mig }, { kind: 'pais' });
    const profiles = [pais('chile', 45, 10), pais('cuba', -90, 0), pais('hungria', 20, -65), pais('suecia', 30, 60)];
    const result = countriesByAxis(user, [...profiles, makeProfile('no-pais', user)], 2);
    expect(result.eco.map((c) => c.profile.id)).toEqual(['chile', 'suecia']);
    expect(result.eco[0]!.distance).toBe(5);
    expect(result.mig.map((c) => c.profile.id)).toEqual(['hungria', 'cuba']);
  });

  it('en empate por eje gana el país con más confianza en ese eje', () => {
    const profiles = [
      makeProfile('b', uniformScores(0), { kind: 'pais' }),
      makeProfile('a', uniformScores(0), { kind: 'pais', confidence: { eco: 'alta' } }),
    ];
    expect(countriesByAxis(uniformScores(10), profiles, 1).eco[0]!.profile.id).toBe('a');
  });

  it('las celdas de país con confianza baja no participan en ese eje', () => {
    const profiles = [
      makeProfile('estimado', uniformScores(10), { kind: 'pais', confidence: { soc: 'baja' } }),
      makeProfile('medido', uniformScores(60), { kind: 'pais' }),
    ];
    const result = countriesByAxis(uniformScores(10), profiles, 1);
    expect(result.soc[0]!.profile.id).toBe('medido');
    expect(result.eco[0]!.profile.id).toBe('estimado');
  });

  it('solo entran al ranking los perfiles con ≥3 ejes de confianza media o alta', () => {
    const allLow = Object.fromEntries(Object.keys(user).map((axis) => [axis, 'baja' as const]));
    const inferred = makeProfile('inferido', user, { confidence: allLow });
    const threeKnown = makeProfile('tres', user, { confidence: { ...allLow, eco: 'alta', mig: 'media', est: 'alta' } });
    expect(isRankable(inferred)).toBe(false);
    expect(isRankable(threeKnown)).toBe(true);
    expect(isRankable(makeProfile('pais', user, { kind: 'pais', confidence: allLow }))).toBe(true);
    expect(topMatches(user, [inferred, threeKnown], 'partido').map((m) => m.profile.id)).toEqual(['tres']);
  });

  it('topMatches acepta varios tipos a la vez', () => {
    const profiles = [makeProfile('m', user, { kind: 'mediatico' }), makeProfile('v', user, { kind: 'movimiento' })];
    expect(topMatches(user, profiles, ['mediatico', 'movimiento'])).toHaveLength(2);
  });
});
