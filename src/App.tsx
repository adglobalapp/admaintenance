import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Maintenance } from './components/Maintenance';
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
        <Maintenance />
      </main>
      <Footer />
    </div>
  );
}
