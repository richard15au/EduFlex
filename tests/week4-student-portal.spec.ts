import { expect, test } from "@playwright/test";

test.describe("WBS 4.2: Student Portal (R2 Uploads, Messaging Inbox & Announcements)", () => {
  test("Student views Neon DB announcements and sends message with R2 file attachment", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email address").fill("20030988@eduflex.richv.win");
    await page.locator('input[type="password"]').fill("student123");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/student$/, { timeout: 15000 });

    // 1. Announcements wired to Neon DB (empty by default until Instructor/Admin posts)
    await page.getByRole("button", { name: /^Announcements$/i }).first().click();
    await expect(page.getByRole("heading", { name: "Announcements" })).toBeVisible();
    await expect(page.getByText("0 unread")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("No announcements found.")).toBeVisible({ timeout: 10000 });

    // Browser Back returns to Dashboard instead of /login, and Forward returns to Announcements
    await page.goBack();
    await expect(page.getByRole("heading", { name: /Welcome to EduFlex/i })).toBeVisible({ timeout: 5000 });
    await page.goForward();
    await expect(page.getByRole("heading", { name: "Announcements" })).toBeVisible({ timeout: 5000 });

    // 2. Messages wired to Neon DB + R2 attachment upload
    await page.getByRole("button", { name: /^Messages$/i }).first().click();
    await expect(page.getByRole("heading", { name: "Messages" })).toBeVisible();
    await expect(page.locator('[data-db-hydrated="true"]')).toBeVisible({ timeout: 10000 });

    // Wait for Neon DB thread (Anita Humagain) to be active
    await expect(page.getByText("Anita Humagain").first()).toBeVisible({ timeout: 10000 });

    // Attach a file -> uploads to Cloudflare R2 via /api/submissions/upload
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles({
      name: "week4-student-msg.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("Student WBS 4.2 R2 attachment test", "utf8"),
    });
    await expect(page.getByText("week4-student-msg.txt").last()).toBeVisible({ timeout: 10000 });

    const uniqueMsg = `WBS 4.2 verified message ${Date.now()}`;
    await page.getByPlaceholder("Type a message...").fill(uniqueMsg);
    await page.getByRole("button", { name: /Send/i }).click();

    await expect(page.getByText(uniqueMsg).first()).toBeVisible({ timeout: 10000 });

    // Reload and verify message persisted in Neon DB
    await page.reload();
    await page.getByRole("button", { name: /^Messages$/i }).first().click();
    await expect(page.getByText(uniqueMsg).first()).toBeVisible({ timeout: 10000 });
  });
});
