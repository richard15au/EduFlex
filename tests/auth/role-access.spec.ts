import { expect, test } from '@playwright/test';
import { loginAs, seededAccounts, type SeededRole } from '../helpers/auth';

const roleRoutes: Record<SeededRole, string> = {
  student: '/student',
  instructor: '/instructor',
  admin: '/admin',
};

for (const role of Object.keys(roleRoutes) as SeededRole[]) {
  for (const targetRole of Object.keys(roleRoutes) as SeededRole[]) {
    if (role === targetRole) continue;

    test(`${role} cannot access the ${targetRole} portal`, async ({ page }) => {
      await loginAs(page, role);
      await expect(page).toHaveURL(new RegExp(`${roleRoutes[role]}$`));

      await page.goto(roleRoutes[targetRole]);

      await expect(page).toHaveURL(new RegExp(`${roleRoutes[role]}$`));
      await expect(page.getByText(seededAccounts[role].name, { exact: true })).toBeVisible();
    });
  }
}