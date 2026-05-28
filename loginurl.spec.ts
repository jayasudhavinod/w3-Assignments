import { test, expect } from "@playwright/test";

test("credential for login", async ({ page }) => {

    await page.goto("https://login.salesforce.com/");
    // Fill username credential
    await page.locator("//input[contains(@id,'username')]").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("//input[contains(@id,'password')]").fill("TestLeaf@2025");   // Fill password credential
    await page.locator("//input[contains(@id,'Login')]").click();  // Click login button

});