import { describe, test, expect } from 'vitest';
import { COMPANY, PRODUCTS, NAV_ITEMS, PARTNERS, CLIENTS } from '@/lib/constants';

describe('Constants', () => {
  test('COMPANY has name, address, phone, email, hours', () => {
    expect(COMPANY.name).toBeTruthy();
    expect(COMPANY.address).toBeTruthy();
    expect(COMPANY.phone).toBeTruthy();
    expect(COMPANY.email).toBeTruthy();
    expect(COMPANY.hours).toBeTruthy();
  });

  test('PRODUCTS has 6 items, each with id, icon, categoryKey, href', () => {
    expect(PRODUCTS).toHaveLength(6);
    for (const product of PRODUCTS) {
      expect(product.id).toBeTruthy();
      expect(product.icon).toBeTruthy();
      expect(product.categoryKey).toBeTruthy();
      expect(product.href).toBeTruthy();
    }
  });

  test('PRODUCTS[0] (geodet) has href "/proizvodi/geodet"', () => {
    expect(PRODUCTS[0].id).toBe('geodet');
    expect(PRODUCTS[0].href).toBe('/proizvodi/geodet');
  });

  test('NAV_ITEMS has 5 items with key and href', () => {
    expect(NAV_ITEMS).toHaveLength(5);
    for (const item of NAV_ITEMS) {
      expect(item.key).toBeTruthy();
      expect(item.href).toBeTruthy();
    }
  });

  test('PARTNERS has at least 6 entries', () => {
    expect(PARTNERS.length).toBeGreaterThanOrEqual(6);
  });

  test('CLIENTS has at least 5 entries', () => {
    expect(CLIENTS.length).toBeGreaterThanOrEqual(5);
  });

});
