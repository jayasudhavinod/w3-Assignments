import { test } from '@playwright/test';

test('Iframe and Alert Handling', async ({ page }) => {

    // Set test timeout 
    test.setTimeout(30000);

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

    // Handle alert (OK button)
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });

    // Switch to iframe and click button
    const frame = page.frameLocator('#iframeResult');
    await frame.locator('button:has-text("Try it")').click();

    console.log('Pressed OK');

    // Freeze / wait for 5 seconds
    await page.waitForTimeout(5000);
});