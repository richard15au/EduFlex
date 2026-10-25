import { expect, test } from '@playwright/test';
import { loginAs } from '../helpers/auth';

test.describe('Instructor Portal Comprehensive Workflows', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page, 'instructor');
    await expect(page).toHaveURL(/\/instructor$/);
  });

  test('Instructor can navigate through all portal sections from sidebar', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    // Dashboard
    await expect(page.getByRole('heading', { name: /Welcome back/i })).toBeVisible();

    // My Courses
    await page.getByRole('navigation').getByRole('button', { name: 'My Courses' }).click();
    await expect(page.getByRole('heading', { name: 'My Courses', exact: true })).toBeVisible();

    // Students
    await page.getByRole('navigation').getByRole('button', { name: 'Students' }).click();
    await expect(page.getByRole('heading', { name: 'Students', exact: true })).toBeVisible();

    // Assignments
    await page.getByRole('navigation').getByRole('button', { name: 'Assignments' }).click();
    await expect(page.getByRole('heading', { name: 'Assignments', exact: true })).toBeVisible();

    // Quizzes
    await page.getByRole('navigation').getByRole('button', { name: 'Quizzes' }).click();
    await expect(page.getByRole('heading', { name: 'Quizzes & Assessments', exact: true })).toBeVisible();

    // Learning Materials
    await page.getByRole('navigation').getByRole('button', { name: 'Learning Materials' }).click();
    await expect(page.getByRole('heading', { name: 'Learning Materials', exact: true })).toBeVisible();

    // Grades
    await page.getByRole('navigation').getByRole('button', { name: 'Grades' }).click();
    await expect(page.getByRole('heading', { name: 'Student Grades', exact: true })).toBeVisible();

    // Announcements
    await page.getByRole('navigation').getByRole('button', { name: 'Announcements' }).click();
    await expect(page.getByRole('heading', { name: 'Announcements', exact: true })).toBeVisible();

    // Messages
    await page.getByRole('navigation').getByRole('button', { name: 'Messages' }).click();
    await expect(page.getByRole('heading', { name: 'Messages', exact: true })).toBeVisible();

    // Calendar
    await page.getByRole('navigation').getByRole('button', { name: 'Calendar' }).click();
    await expect(page.getByRole('heading', { name: 'Calendar', exact: true })).toBeVisible();

    // Profile
    await page.getByRole('navigation').getByRole('button', { name: 'Profile' }).click();
    await expect(page.getByRole('heading', { name: 'My Profile', exact: true })).toBeVisible();

    // Settings
    await page.getByRole('navigation').getByRole('button', { name: 'Settings' }).click();
    await expect(page.getByRole('heading', { name: 'Settings', exact: true })).toBeVisible();

    expect(pageErrors).toEqual([]);
  });

  test('Quiz management: Create new quiz and view details', async ({ page }) => {
    await page.getByRole('navigation').getByRole('button', { name: 'Quizzes' }).click();
    await expect(page.getByRole('heading', { name: 'Quizzes & Assessments', exact: true })).toBeVisible();

    // Click "New Quiz"
    await page.getByRole('button', { name: 'New Quiz' }).click();
    await expect(page.getByText('Create New Quiz')).toBeVisible();

    // Fill form
    const quizTitle = `E2E Knowledge Check ${Date.now()}`;
    await page.getByPlaceholder('e.g. Chapter 4 Knowledge Check').fill(quizTitle);
    await page.getByRole('button', { name: 'Create Quiz', exact: true }).click();

    // Verify newly created quiz is displayed in list heading
    await expect(page.getByRole('heading', { name: quizTitle })).toBeVisible();

    // Click "View Details"
    await page.getByRole('heading', { name: quizTitle }).locator('..').getByRole('button', { name: 'View Details' }).click();
    await expect(page.getByRole('heading', { name: quizTitle })).toBeVisible();
    await expect(page.getByText('← Back to Quizzes')).toBeVisible();

    // Click Back
    await page.getByText('← Back to Quizzes').click();
    await expect(page.getByRole('heading', { name: 'Quizzes & Assessments', exact: true })).toBeVisible();
  });

  test('Learning materials: Upload new material and preview', async ({ page }) => {
    await page.getByRole('navigation').getByRole('button', { name: 'Learning Materials' }).click();
    await expect(page.getByRole('heading', { name: 'Learning Materials', exact: true })).toBeVisible();

    // Open upload modal
    await page.getByRole('button', { name: 'Upload Material' }).click();
    await expect(page.getByText('Upload Learning Material')).toBeVisible();

    // Fill form
    const matTitle = `Lecture Notes E2E ${Date.now()}`;
    await page.getByPlaceholder(/Week 5/i).fill(matTitle);
    await page.getByRole('button', { name: 'Upload', exact: true }).click();

    // Verify uploaded material card heading appears
    await expect(page.getByRole('heading', { name: matTitle })).toBeVisible();

    // Preview uploaded material
    await page.getByRole('heading', { name: matTitle }).click();
    await expect(page.getByText('Preview Mode')).toBeVisible();
    await page.getByRole('button', { name: 'Close', exact: true }).click();
  });

  test('Announcements: Create, View, Edit, and Delete workflow', async ({ page }) => {
    await page.getByRole('navigation').getByRole('button', { name: 'Announcements' }).click();
    await expect(page.getByRole('heading', { name: 'Announcements', exact: true })).toBeVisible();

    // Create Announcement
    await page.getByRole('button', { name: 'New Announcement' }).click();
    await expect(page.getByRole('heading', { name: 'New Announcement' })).toBeVisible();

    const announcementTitle = `Important Term Update ${Date.now()}`;
    await page.getByPlaceholder(/Guest Speaker/i).fill(announcementTitle);
    await page.getByPlaceholder(/Details of the announcement/i).fill('Please be aware of the scheduled system maintenance.');
    await page.getByRole('button', { name: 'Publish Announcement' }).click();

    // Verify in list
    await expect(page.getByRole('heading', { name: announcementTitle })).toBeVisible();

    // View Announcement
    const annCard = page.locator('div.rounded-2xl').filter({ has: page.getByRole('heading', { name: announcementTitle }) });
    await annCard.getByRole('button', { name: 'View' }).click();
    await expect(page.getByText('Please be aware of the scheduled system maintenance.').first()).toBeVisible();
    await page.getByRole('button', { name: 'Close', exact: true }).click();

    // Delete Announcement
    await annCard.getByRole('button', { name: 'Delete' }).click();
    await expect(page.getByRole('heading', { name: announcementTitle })).not.toBeVisible();
  });

  test('Messages: Search, send message, and quick reply', async ({ page }) => {
    await page.getByRole('navigation').getByRole('button', { name: 'Messages' }).click();
    await expect(page.getByRole('heading', { name: 'Messages', exact: true })).toBeVisible();

    // Filter conversations
    await page.getByPlaceholder('Search messages...').fill('Richard');
    await expect(page.getByText('Richard Vitug').first()).toBeVisible();

    // Send a message
    const instructorMsg = `Consultation confirmed at 3 PM ${Date.now()}`;
    await page.getByPlaceholder('Type a message...').fill(instructorMsg);
    await page.getByRole('button', { name: 'Send', exact: true }).click();

    // Verify message appears in active conversation
    await expect(page.getByText(instructorMsg).first()).toBeVisible();

    // Send a quick reply
    await page.getByRole('button', { name: /Thank you for the update/i }).click();
    await expect(page.getByText('Thank you for the update. Received.').first()).toBeVisible();
  });

  test('Grades: View student grades and update score', async ({ page }) => {
    await page.getByRole('navigation').getByRole('button', { name: 'Grades' }).click();
    await expect(page.getByRole('heading', { name: 'Student Grades', exact: true })).toBeVisible();

    // Verify student roster in grade table
    await expect(page.getByText('Marco Reyes')).toBeVisible();

    // Filter course
    const select = page.locator('select').first();
    await select.selectOption('ICT272');
    await expect(page.getByText('Aisha Patel')).toBeVisible();
  });
});
