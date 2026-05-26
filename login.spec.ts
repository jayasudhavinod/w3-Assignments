import { test, expect } from '@playwright/test';

test("Login", async ({ page }) => {
  await page.goto("https://leaftaps.com/opentaps/control/main");

  await page.locator("#username").fill("democsr");
  await page.locator("#password").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();

  const title = await page.title();
  console.log('Title of the page is: ' + title);

  // Optional validation (recommended)
  await expect(page).toHaveTitle(/Leaftaps/);

  await page.locator("text=CRM/SFA").click();
});