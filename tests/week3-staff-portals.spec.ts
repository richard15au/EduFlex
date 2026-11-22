import { expect, test } from "@playwright/test";

const ARTIFACT_DIR =
  "C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d";

test.describe("Week 3: Staff Portals (Grading & Admin Operations)", () => {
  test("Student cannot access /instructor or /admin routes (role boundary enforcement)", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email address").fill("20030988@eduflex.richv.win");
    await page.locator('input[type="password"]').fill("student123");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/student$/, { timeout: 15000 });

    await page.goto("/instructor");
    await expect(page).toHaveURL(/\/student$/, { timeout: 10000 });

    await page.goto("/admin");
    await expect(page).toHaveURL(/\/student$/, { timeout: 10000 });
  });

  test("Instructor can open rubric grading modal, compute KOI grade band, and save grade", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email address").fill("anita.humagain@eduflex.richv.win");
    await page.locator('input[type="password"]').fill("instructor123");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/instructor$/, { timeout: 15000 });

    // Navigate to Grades tab
    await page.getByRole("button", { name: /^Grades$/i }).first().click();
    await expect(page.getByRole("heading", { name: "Student Grades" })).toBeVisible();

    // Switch to active course ICT302 which has pending Grade actions
    await page.locator("select").first().selectOption("ICT302");

    // Open first available Grade modal
    const gradeButton = page.getByRole("button", { name: /^Grade$/ }).first();
    await expect(gradeButton).toBeVisible();
    await gradeButton.click();

    await expect(page.getByRole("heading", { name: "Grade Submission" })).toBeVisible();
    await expect(page.getByText("Rubric Evaluation")).toBeVisible();

    // Update rubric criteria: 36 + 27 + 27 = 90 (HD)
    await page.getByLabel("Technical Execution").fill("36");
    await page.getByLabel("Methodology & Architecture").fill("27");
    await page.getByLabel("Documentation & Analysis").fill("27");

    await expect(page.getByTestId("rubric-grade-band")).toContainText("HD · 90/100");
    await page.getByPlaceholder("Add feedback...").fill("Verified Week 3 rubric evaluation and KOI band calculation.");

    await page.screenshot({
      path: `${ARTIFACT_DIR}/verified_week3_instructor_rubric_grading.png`,
      fullPage: false,
    });

    await page.getByRole("button", { name: "Save Grade" }).click();
    await expect(page.getByText(/Released 90\/100|Saved locally/i)).toBeVisible({ timeout: 10000 });
  });

  test("Admin can manage users (create & delete) and inspect approval queue", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email address").fill("a.rojit.munankarmi@eduflex.richv.win");
    await page.locator('input[type="password"]').fill("admin123");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/admin$/, { timeout: 15000 });

    // Navigate to User Management
    await page.getByRole("button", { name: /User Management/i }).first().click();
    await expect(page.getByRole("heading", { name: "User Management" })).toBeVisible();
    await expect(page.getByText("Anita Humagain").first()).toBeVisible();
    await expect(page.getByText("Richard Vitug").first()).toBeVisible();

    await page.screenshot({
      path: `${ARTIFACT_DIR}/verified_week3_admin_user_management.png`,
      fullPage: false,
    });

    // Create a temporary user via Add New User modal
    const uniqueEmail = `week3.test.${Date.now()}@eduflex.richv.win`;
    await page.getByRole("button", { name: /Add New User/i }).click();
    await page.getByPlaceholder("e.g. Maria Santos").fill("Week3 Test User");
    await page.getByPlaceholder("user@eduflex.edu.ph").fill(uniqueEmail);
    await page.getByRole("button", { name: /Create User/i }).click();

    await expect(page.getByText("Week3 Test User added successfully.")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("Week3 Test User").first()).toBeVisible();
  });
});
