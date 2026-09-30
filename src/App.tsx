import { useEffect, type ReactNode } from 'react';
import { HashRouter, Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { Methodology } from './pages/Methodology.tsx';
import { ProfileDetail } from './pages/ProfileDetail.tsx';
import { Profiles } from './pages/Profiles.tsx';
import { Quiz } from './pages/Quiz.tsx';
import { Results } from './pages/Results.tsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="stripe" aria-hidden="true" />
      <header className="site-header">
        <div className="inner">
          <Link to="/" className="brand">
            Compás Político <span>Criollo</span>
          </Link>
          <nav className="site-nav" aria-label="Principal">
            <NavLink to="/" end>
              Inicio
            </NavLink>
            <NavLink to="/perfiles">Perfiles</NavLink>
            <NavLink to="/metodologia">Metodología</NavLink>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        Estimaciones editoriales con fuentes, actualizadas a septiembre de 2026. Nada de lo que respondes sale de tu
        navegador.
      </footer>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test/:mode" element={<Quiz />} />
          <Route path="/resultados" element={<Results />} />
          <Route path="/perfiles" element={<Profiles />} />
          <Route path="/perfiles/:id" element={<ProfileDetail />} />
          <Route path="/metodologia" element={<Methodology />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
