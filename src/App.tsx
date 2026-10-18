import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Maintenance } from './components/Maintenance';
import { Privacy } from './components/Privacy';
import { useI18n } from './i18n';
import { initReveal } from './utils/reveal';

export function App() {
  const { lang } = useI18n();

  // Nyelvváltáskor újrarenderelt elemek is kapjanak reveal-t
  useEffect(() => initReveal(), [lang]);

  return (
    <div className="page">
      <Header />
      <main>
        {/* Egyetlen aloldal: /privacy (az nginx minden ismeretlen útvonalra az index.html-t adja) */}
        {window.location.pathname.replace(/\/$/, '') === '/privacy' ? <Privacy /> : <Maintenance />}
      </main>
      <Footer />
    </div>
  );
}
