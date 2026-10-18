// Az oldal szöveges tartalma három nyelven – egy helyen, hogy könnyű legyen cserélni.

import type { ContactFormText } from './components/ContactForm';

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
  };
  contact: ContactFormText & { title: string };
  footer: { tags: string[]; registered: string; companyNo: string; office: string; rights: string };
};

const hu: Content = {
  nav: [],
  maintenance: {
    eyebrow: 'Karbantartás',
    lines: ['Hamarosan', 'újra', 'itt.'],
    text: 'Az oldalt éppen fejlesztjük és frissítjük. Nemsokára visszatérünk – addig is e-mailben elérsz minket.',
    status: 'Folyamatban',
  },
  contact: {
    title: 'Írj nekünk',
    name: 'Név',
    email: 'E-mail',
    message: 'Üzenet',
    submit: 'Üzenet küldése',
    sending: 'Küldés…',
    sent: 'Köszönjük! Megkaptuk az üzenetedet, hamarosan válaszolunk.',
    success: 'Megnyílt a levelezőprogramod – csak küldd el az üzenetet.',
    error: 'Nem sikerült elküldeni. Próbáld újra, vagy írj közvetlenül:',
    subject: 'Üzenet – AdMaintenance',
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
  },
  contact: {
    title: 'Get in touch',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    sending: 'Sending…',
    sent: 'Thank you! Your message has arrived – we will reply soon.',
    success: 'Your email app has opened – just send the message.',
    error: 'The message could not be sent. Please try again or email us directly:',
    subject: 'Message – AdMaintenance',
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
  },
  contact: {
    title: 'Escríbenos',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    sent: '¡Gracias! Hemos recibido tu mensaje y te responderemos pronto.',
    success: 'Se ha abierto tu programa de correo: solo tienes que enviar el mensaje.',
    error: 'No se pudo enviar. Inténtalo de nuevo o escríbenos directamente:',
    subject: 'Mensaje – AdMaintenance',
  },
  footer: { tags: ['Mantenimiento', 'Actualización', 'Muy pronto'], registered: 'Registrada en Inglaterra y Gales', companyNo: 'N.º de empresa', office: 'Domicilio social', rights: 'Todos los derechos reservados.' },
};

export const content: Record<Lang, Content> = { hu, en, es };
