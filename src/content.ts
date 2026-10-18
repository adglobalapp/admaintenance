// Az oldal szöveges tartalma három nyelven – egy helyen, hogy könnyű legyen cserélni.

export const languages = ['en', 'es', 'hu'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'hu';

export type Content = {
  nav: { label: string; href: string }[];
  maintenance: {
    eyebrow: string;
    lines: [string, string, string];
    text: string;
    status: string;
    cta: string;
  };
  footer: { tags: string[]; registered: string; companyNo: string; office: string; rights: string };
};

const hu: Content = {
  nav: [],
  maintenance: {
    eyebrow: 'Karbantartás',
    lines: ['Hamarosan', 'újra', 'itt.'],
    text: 'Az oldalt éppen fejlesztjük és frissítjük. Nemsokára visszatérünk – addig is e-mailben elérsz minket.',
    status: 'Folyamatban',
    cta: 'Írj nekünk',
  },
  footer: { tags: ['Karbantartás', 'Frissítés', 'Hamarosan'], registered: 'Bejegyezve: Anglia és Wales', companyNo: 'Cégjegyzékszám', office: 'Bejegyzett székhely', rights: 'Minden jog fenntartva.' },
};

const en: Content = {
  nav: [],
  maintenance: {
    eyebrow: 'Maintenance',
    lines: ['Back', 'very', 'soon.'],
    text: "We're working on the site right now. We'll be back shortly – in the meantime you can reach us by email.",
    status: 'In progress',
    cta: 'Email us',
  },
  footer: { tags: ['Maintenance', 'Updates', 'Coming soon'], registered: 'Registered in England & Wales', companyNo: 'Company no.', office: 'Registered office', rights: 'All rights reserved.' },
};

const es: Content = {
  nav: [],
  maintenance: {
    eyebrow: 'Mantenimiento',
    lines: ['Volvemos', 'muy', 'pronto.'],
    text: 'Estamos trabajando en la web. Volveremos en breve; mientras tanto, puedes escribirnos por correo.',
    status: 'En curso',
    cta: 'Escríbenos',
  },
  footer: { tags: ['Mantenimiento', 'Actualización', 'Muy pronto'], registered: 'Registrada en Inglaterra y Gales', companyNo: 'N.º de empresa', office: 'Domicilio social', rights: 'Todos los derechos reservados.' },
};

export const content: Record<Lang, Content> = { hu, en, es };
