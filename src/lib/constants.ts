export const COMPANY = {
  name: 'iT Systems d.o.o.',
  displayName: 'iT SYSTEMS',
  address: 'Paromlinska 34',
  city: '71000 Sarajevo, BiH',
  phone: '+387 (0)33 941 461',
  viber: '+387 (0)61 150 009',
  email: 'info@its.ba',
  hours: 'Pon - Pet: 09:00 - 17:00',
  year: 2015,
};

export const PRODUCTS = [
  {
    id: 'geodet',
    icon: 'solar:map-point-linear',
    categoryKey: 'geodezija',
    href: '/proizvodi/geodet',
  },
  {
    id: 'geodet-profili',
    icon: 'solar:graph-up-linear',
    categoryKey: 'geodezija',
    href: '/kontakt',
  },
  {
    id: 'proman',
    icon: 'solar:document-text-linear',
    categoryKey: 'dokumenti',
    href: '/kontakt',
  },
  {
    id: 'dkv-pro',
    icon: 'solar:bolt-linear',
    categoryKey: 'dalekovodi',
    href: '/kontakt',
  },
  {
    id: 'ervip',
    icon: 'solar:clock-circle-linear',
    categoryKey: 'evidencije',
    href: '/kontakt',
  },
  {
    id: 'help-desk',
    icon: 'solar:headphones-round-linear',
    categoryKey: 'podrska',
    href: '/kontakt',
  },
];

export const NAV_ITEMS = [
  { key: 'home', href: '/' },
  { key: 'products', href: '/#proizvodi' },
  { key: 'about', href: '/#o-nama' },
  { key: 'contact', href: '/kontakt' },
];

export const PARTNERS = [
  'IBM',
  'MICROSOFT',
  'HCL',
  'AUTODESK',
  'CISCO',
  'DELL',
];

export const CLIENTS = [
  'ELEKTROPRIVREDA BIH',
  'BHTELECOM',
  'MINISTARSTVO RADA',
  'ARCELORMITTAL',
  'PAYTEN',
];

export const SOCIAL_LINKS = [
  { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/company/itsystems-ba', label: 'LinkedIn' },
  { icon: 'mdi:facebook', href: 'https://www.facebook.com/itsystems.ba', label: 'Facebook' },
];
