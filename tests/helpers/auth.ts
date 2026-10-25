import type { Page } from '@playwright/test';

export const seededAccounts = {
  student: {
    email: '2003988@eduflex.edu',
    password: 'student123',
    name: 'Richard Maceda Vitug',
  },
  instructor: {
    email: 'anita.humagain@eduflex.edu',
    password: 'instructor123',
    name: 'Anita Humagain',
  },
  admin: {
    email: 'a.rojit.munankarmi@eduflex.edu',
    password: 'admin123',
    name: 'Rojit Munankarmi',
  },
} as const;

export const institutionalAccounts = {
  student: {
    email: '2003988@richacademy.en-rich.me',
    password: 'student123',
    name: 'Richard Maceda Vitug',
  },
  instructor: {
    email: 'anita.humagain@richacademy.en-rich.me',
    password: 'instructor123',
    name: 'Anita Humagain',
  },
  admin: {
    email: 'a.rojit.munankarmi@richacademy.en-rich.me',
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
