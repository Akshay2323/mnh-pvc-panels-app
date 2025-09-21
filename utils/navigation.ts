/* eslint-disable @typescript-eslint/no-explicit-any */
// Define a type for navigation items
export interface NavItem {
  key: string;   // Key for translation lookup
  label: string; // Default label (fallback)
  path: string;
  activePaths: string[];
  icon: any;
}
export interface NavKeys {
  home: NavItem;
  about: NavItem;
  catelog: NavItem;
  product: NavItem;
  blog: NavItem;
  gallery: NavItem;
  contact: NavItem;
}

export const NAV_ITEMS: (keyof NavKeys)[] = ['home', 'about', 'catelog', 'product', 'blog', 'gallery', 'contact'];

export const NAV_ITEMS_KEYS: any = {
  'home': { key: 'home', label: 'Home', path: '/', activePaths: ['/', '/home'] },
  'about': { key: 'about', label: 'About', path: '/about', activePaths: ['/about'] },
  'manufacturer': { key: 'manufacturer', label: 'Manufacturer', path: '/manufacturer', activePaths: ['/manufacturer'] },
  'product': { key: 'product', label: 'Product', path: '/product', activePaths: ['/product'] },
  'blog': { key: 'blog', label: 'Blog', path: '/blog', activePaths: ['/blog'] },
  'gallery': { key: 'gallery', label: 'Gallery', path: '/gallery', activePaths: ['/gallery'] },
  'contact': { key: 'contact', label: 'Contact', path: '/contact', activePaths: ['/contact'] },
};