import test from "@playwright/test";

// Prompt alert handling
test("Prompt alert", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml");
    await page.locator("(//span[text()='Show'])[5]").click();
    await page.waitForTimeout(5000)
});
