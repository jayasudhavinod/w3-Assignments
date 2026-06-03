import test from "@playwright/test";

// Prompt alert handling
test("Prompt alert", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml");

    page.once('dialog', async dialog => {
        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept('Playwright');
    });

    await page.locator("(//span[text()='Show'])[5]").click();
});


// page.once 
test("Handle alert with page.once", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml");

    page.once('dialog', async dialog => {
        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept(); // only first alert handled
    });

    // confirm alert --- 1 st alert--will accept
    await page.locator("(//span[text()='Show'])[1]").click();

    // This will NOT be handled  -- 2nd alert -- auto dismiss
    await page.locator("(//span[text()='Show'])[5]").click();
});


// page.on  ( for multiple alerts)
test("Handle alert with page.on", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml");

    page.on('dialog', async dialog => {

        const type = dialog.type();
        console.log(type);

        const msg = dialog.message();
        console.log(msg);

        if (type === "alert") {
            await dialog.accept();
        } 
        else if (type === "confirm") {
            await dialog.dismiss();
        } 
        else if (type === "prompt") {
            await dialog.accept('Playwright');
        }
    });

    // simple alert ---1 st alert -- will accept
    await page.locator("(//span[text()='Show'])[1]").click();

    // confirm alert --- 2nd alert -- auto dismiss
    await page.locator("(//span[text()='Show'])[2]").click();

    // prompt alert -- 3rd alert -- will accept
    await page.locator("(//span[text()='Show'])[5]").click();
});