import test from '@playwright/test';

test.use({ headless: false });  // Set headless to false for this test or we can set it from TS config file under use

test('Page Fixture', async ({ page }) => {
     // Navigate to a website
    await page.goto('https://www.facebook.com');
    // Get the title of the page
    const title = await page.title();
    console.log('Title of the page is: ' + title);
    //await page.waitForTimeout(60000);
});