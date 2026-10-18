import type { IconName } from './components/Icon';

/*
 * Arculat és elérhetőségek egy helyen.
 * Színek, betűk, méretek: src/styles/tokens.css
 */
export const brand = {
  id: 'admaintenance',
  name: 'AdMaintenance',
  /** Szöveges logó két fele a jel előtt és után. */
  logoText: ['Ad', 'Maintenance'] as [string, string],
  /** A logójel (céltábla) képe a public/ mappából. */
  logoMarkSrc: '/logo-mark.png',
  /** Teljes kép logó, pl. '/logo.svg'. Ha meg van adva, a szöveges logó helyett ez jelenik meg. */
  logoSrc: '' as string,

  email: 'hello@admaintenance.example',

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/adglobalapp', icon: 'github' },
  ] satisfies { label: string; href: string; icon: IconName }[],
};
