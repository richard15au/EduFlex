import type { Page } from '@playwright/test';

export const seededAccounts = {
  student: {
    email: '20030988@eduflex.richv.win',
    password: 'student123',
    name: 'Richard Vitug',
  },
  instructor: {
    email: 'anita.humagain@eduflex.richv.win',
    password: 'instructor123',
    name: 'Anita Humagain',
  },
  admin: {
    email: 'a.rojit.munankarmi@eduflex.richv.win',
    password: 'admin123',
    name: 'Rojit Munankarmi',
  },
} as const;

export const institutionalAccounts = {
  student: {
    email: '2003988@richacademy.richv.win',
    password: 'student123',
    name: 'Richard Vitug',
  },
  instructor: {
    email: 'anita.humagain@richacademy.richv.win',
    password: 'instructor123',
    name: 'Anita Humagain',
  },
  admin: {
    email: 'a.rojit.munankarmi@richacademy.richv.win',
    password: 'admin123',
    name: 'Rojit Munankarmi',
  },
} as const;

export type SeededRole = keyof typeof seededAccounts;

export async function loginAs(page: Page, role: SeededRole) {
  const account = seededAccounts[role];
  await page.goto('/login');
  await page.getByLabel('Email address').fill(account.email);
  await page.locator('input[type="password"]').fill(account.password);
  await page.getByRole('button', { name: 'Log in' }).click();
}
