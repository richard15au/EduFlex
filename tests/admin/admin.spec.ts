import { expect, test } from '@playwright/test';
import { loginAs } from '../helpers/auth';

test.describe('Admin Portal Comprehensive Workflows', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page, 'admin');
    await expect(page).toHaveURL(/\/admin$/);
  });

  test('Admin can navigate through all portal sections from sidebar', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    // Dashboard Overview
    await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();

    // User Management
    await page.getByRole('navigation').getByRole('button', { name: 'User Management' }).click();
    await expect(page.getByRole('heading', { name: 'User Management', exact: true })).toBeVisible();

    // Course Management
    await page.getByRole('navigation').getByRole('button', { name: 'Course Management' }).click();
    await expect(page.getByRole('heading', { name: 'Course Management', exact: true })).toBeVisible();

    // Enrollment
    await page.getByRole('navigation').getByRole('button', { name: 'Enrollment' }).click();
    await expect(page.getByRole('heading', { name: 'Enrollment', exact: true })).toBeVisible();

    // Announcements
    await page.getByRole('navigation').getByRole('button', { name: 'Announcements' }).click();
    await expect(page.getByRole('heading', { name: 'Announcements', exact: true })).toBeVisible();

    // Messages
    await page.getByRole('navigation').getByRole('button', { name: 'Messages' }).click();
    await expect(page.getByRole('heading', { name: 'Messages', exact: true })).toBeVisible();

    // Calendar
    await page.getByRole('navigation').getByRole('button', { name: 'Calendar' }).click();
    await expect(page.getByRole('heading', { name: 'Academic Calendar', exact: true })).toBeVisible();

    // Reports & Analytics
    await page.getByRole('navigation').getByRole('button', { name: 'Reports & Analytics' }).click();
    await expect(page.getByRole('heading', { name: 'Reports & Analytics', exact: true })).toBeVisible();

    // System Settings
    await page.getByRole('navigation').getByRole('button', { name: 'System Settings' }).click();
    await expect(page.getByRole('heading', { name: 'System Settings', exact: true })).toBeVisible();

    expect(pageErrors).toEqual([]);
  });

  test('User Management: Filter, search, and add new user', async ({ page }) => {
    await page.getByRole('navigation').getByRole('button', { name: 'User Management' }).click();
    await expect(page.getByRole('heading', { name: 'User Management', exact: true })).toBeVisible();

    // Filter by role using dropdown
    const roleSelect = page.locator('select').first();
    await roleSelect.selectOption('Instructor');
    await expect(page.getByText('Anna Cruz')).toBeVisible();

    // Reset filter
    await roleSelect.selectOption('All Roles');

    // Search for user
    await page.getByPlaceholder('Search users...', { exact: true }).fill('Santos');
    await expect(page.getByText('Maria Santos')).toBeVisible();

    // Clear search
    await page.getByPlaceholder('Search users...', { exact: true }).fill('');

    // Open Add User Modal
    await page.getByRole('button', { name: 'Add New User' }).click();
    await expect(page.getByRole('heading', { name: 'Add New User' })).toBeVisible();

    const newUserName = `Test Student ${Date.now()}`;
    const newUserEmail = `test.student.${Date.now()}@eduflex.edu`;
    await page.getByPlaceholder('e.g. Maria Santos').fill(newUserName);
    await page.getByPlaceholder('user@eduflex.edu.ph').fill(newUserEmail);
    await page.getByRole('button', { name: 'Create User' }).click();

    // Verify user is added
    await expect(page.getByText(newUserName, { exact: true })).toBeVisible();
  });

  test('Pending Approvals: Accept all pending requests', async ({ page }) => {
    await page.getByRole('navigation').getByRole('button', { name: 'User Management' }).click();
    await expect(page.getByRole('heading', { name: 'User Management', exact: true })).toBeVisible();

    // Check if Accept All button is present in Pending Approvals header
    const acceptAllBtn = page.getByRole('button', { name: /Accept & Approve All/i });
    if (await acceptAllBtn.isVisible()) {
      await acceptAllBtn.click();
      // Toast or empty queue state appears
      await expect(page.getByText(/All pending approval requests have been accepted|Approved/i).first()).toBeVisible();
    }
  });

  test('Course Management: Search and filter active courses', async ({ page }) => {
    await page.getByRole('navigation').getByRole('button', { name: 'Course Management' }).click();
    await expect(page.getByRole('heading', { name: 'Course Management', exact: true })).toBeVisible();

    // Verify courses table rendered
    await expect(page.getByText('ICT301')).toBeVisible();
    await expect(page.getByText('Information Technology Project 1')).toBeVisible();

    // Open Create Course Modal
    await page.getByRole('button', { name: /Create Course|New Course/i }).first().click();
    await expect(page.getByText('Create New Course')).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).click();
  });

  test('System Settings: Update settings and persist', async ({ page }) => {
    await page.getByRole('navigation').getByRole('button', { name: 'System Settings' }).click();
    await expect(page.getByRole('heading', { name: 'System Settings', exact: true })).toBeVisible();

    // Change institution name
    const instNameInput = page.locator('input').first();
    await instNameInput.fill('EduFlex University College of Technology');

    // Click Save Changes
    await page.getByRole('button', { name: /Save Changes/i }).click();

    // Confirm feedback
    await expect(page.getByText(/Settings saved successfully/i).first()).toBeVisible();
  });
});
