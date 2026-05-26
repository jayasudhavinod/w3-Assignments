import { test, expect } from '@playwright/test'; // import test to create test case and expect for validation

test("Login", async ({ page }) => { // define Login test and get browser page

  await page.goto("https://leaftaps.com/opentaps/control/main"); // open application URL

  await page.locator("#username").fill("democsr"); // locate username field by id and enter value
  await page.locator("#password").fill("crmsfa"); // locate password field by id and enter value
  await page.locator(".decorativeSubmit").click(); // locate login button by class and click

  const title = await page.title(); // capture page title
  console.log('Title of the page is: ' + title); // print title in console

  await expect(page).toHaveTitle(/Leaftaps/); // validate page title contains "Leaftaps"

  await page.locator("text=CRM/SFA").click(); // locate CRM/SFA link by text and click

});
