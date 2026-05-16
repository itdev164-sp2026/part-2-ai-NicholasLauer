import { test, expect } from "@playwright/test";

const email = process.env.TEST_USER_EMAIL;
const password = process.env.TEST_USER_PASSWORD;
const hasCredentials = Boolean(email && password);

test("login page shows the sign-in form with email, password, and submit button", async ({
  page,
}) => {
  await page.goto("/login");

  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Sign in" })
  ).toBeVisible();
});

test("redirects to the dashboard after a successful login with valid credentials", async ({
  page,
}) => {
  test.skip(!hasCredentials, "TEST_USER_EMAIL and TEST_USER_PASSWORD are not set");

  await page.goto("/login");
  await page.getByLabel("Email").fill(email!);
  await page.getByLabel("Password").fill(password!);
  await page.getByRole("button", { name: "Sign in" }).click();

  await page.waitForURL("/", { timeout: 10_000 });
  await expect(page).toHaveURL("/");
});

test("sidebar shows Overview, Projects, and Settings navigation links after login", async ({
  page,
}) => {
  test.skip(!hasCredentials, "TEST_USER_EMAIL and TEST_USER_PASSWORD are not set");

  await page.goto("/login");
  await page.getByLabel("Email").fill(email!);
  await page.getByLabel("Password").fill(password!);
  await page.getByRole("button", { name: "Sign in" }).click();

  await page.waitForURL("/", { timeout: 10_000 });

  const sidebarNav = page.locator('[data-slot="sidebar-content"]');
  await expect(sidebarNav.getByRole("link", { name: "Overview" })).toBeVisible();
  await expect(sidebarNav.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(sidebarNav.getByRole("link", { name: "Settings" })).toBeVisible();
});
