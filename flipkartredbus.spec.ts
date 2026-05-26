import test from '@playwright/test';

// RedBus only in Edge
test('RedBus in Edge', async ({ page }, testInfo) => {

    test.skip(testInfo.project.name !== 'edge');

    await page.goto('https://www.redbus.in');

    console.log('--- RedBus (Edge) ---');
    console.log('Title:', await page.title());
    console.log('URL:', page.url());
});


// Flipkart only in WebKit
test('Flipkart in WebKit', async ({ page }, testInfo) => {

    test.skip(testInfo.project.name !== 'webkit');

    await page.goto('https://www.flipkart.com');

    console.log('--- Flipkart (WebKit) ---');
    console.log('Title:', await page.title());
    console.log('URL:', page.url());
});