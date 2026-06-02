import { test } from '@playwright/test';

test.setTimeout(100000);

//This 'Create a Lead salesforce'test stll having timeout error.I tried all way but not able to fix .. review and suggest me to fix this //



test('Create a Lead salesforce', async ({ page }) => {

    await page.goto('https://login.salesforce.com');
     await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('[name="pw"]').fill('TestLeaf@2025');
    await page.locator('input[name="Login"]').click();
    // Wait for App Launcher
    await page.locator('//div/span[contains(text(),"App Launcher")]').waitFor({ timeout: 60000 });
    await page.locator('//div/span[contains(text(),"App Launcher")]').click();
    // View All
    await page.locator('//button[@aria-label="View All Applications"]').click();
     //  Wait for search box
    const searchBox = page.locator('//input[@placeholder="Search apps or items..."]');
    await searchBox.waitFor({ timeout: 60000 });
    await searchBox.fill('Sales');
    // Click Sales (stable)
    await page.locator('//p[text()="Sales"]').first().waitFor({ timeout: 60000 });
    await page.locator('//p[text()="Sales"]').first().click();
    //Wait for Sales app to fully load
    await page.locator('//one-app-nav-bar').waitFor({ timeout: 60000 });
    //  click Leads
    await page.getByText('Sales', { exact: true }).first().waitFor({ timeout: 60000 });
    await page.getByText('Sales', { exact: true }).first().click();
    //  New button
    const newBtn = page.locator('//div[@title="New"]');
    await newBtn.waitFor({ state: 'visible', timeout: 60000 });
    await newBtn.click();
    // Salutation
    await page.locator('//button[@name="salutation"]').waitFor();
    await page.locator('//button[@name="salutation"]').click();
    await page.getByText('Mrs.').click();
    // Fields
    await page.locator('//input[@placeholder="Last Name"]').fill('vinni');
    await page.locator('//input[@name="Company"]').fill('TestLeafPlaywright');
     // Save
    const saveBtn = page.locator('//button[@name="SaveEdit"]');
    await saveBtn.waitFor({ state: 'visible' });
    await saveBtn.click();

});
// ------------------ EDIT LEAD ------------------

test('Edit a Lead', async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('democsr');
    await page.locator('#password').fill('crmsfa');
    await page.locator('input[class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"CRM/SFA")]').waitFor();
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    await page.locator('//a[contains(text(),"Leads")]').click();
    await page.locator('//a[contains(text(),"Create Lead")]').click();
    await page.locator('#createLeadForm_companyName').fill('TestLeafPlaywright');
    await page.locator('input[name="firstName"]').last().fill('jayasudha');
    await page.locator('input[name="lastName"]').last().fill('vinod');
    await page.locator('input[name="submitButton"]').click();
    await page.locator('//a[contains(text(),"Edit")]').waitFor();
    await page.locator('//a[contains(text(),"Edit")]').click();
    await page.locator('input[name="companyName"]').last().fill('The TestLeaf');
    await page.locator('input[value="Update"]').click();
});


// ------------------ CREATE INDIVIDUAL ------------------

test('Create a Individuals', async ({ page }) => {

    await page.goto('https://login.salesforce.com');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('[name="pw"]').fill('TestLeaf@2025');
    await page.locator('input[name="Login"]').click();
    await page.locator('//div/span[contains(text(),"App Launcher")]').waitFor();
    await page.locator('//div/span[contains(text(),"App Launcher")]').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.locator('//a//span//p[contains(text(),"Individuals")]').waitFor();
    await page.locator('//a//span//p[contains(text(),"Individuals")]').click();
    await page.locator('//a//span[contains(text(),"Individuals List")]').click();
    await page.locator('//div[@title="New"]').click();
    await page.locator('//input[@placeholder="Last Name"]').fill('Individualname');
    await page.locator('//button/span[contains(text(),"Save")]').last().click();
});


// ------------------ EDIT INDIVIDUAL ------------------

test('Edit Individuals', async ({ page }) => {

    await page.goto('https://login.salesforce.com');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('[name="pw"]').fill('TestLeaf@2025');
    await page.locator('input[name="Login"]').click();
    await page.locator('//div/span[contains(text(),"App Launcher")]').waitFor();
    await page.locator('//div/span[contains(text(),"App Launcher")]').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.locator('//a//span//p[contains(text(),"Individuals")]').click();
    await page.locator('//a//span[contains(text(),"Individuals")]').first().waitFor();
    await page.locator('//a//span[contains(text(),"Individuals")]').first().click();
    await page.locator('//input[contains(@placeholder,"Search")]').last().waitFor();
    await page.locator('//input[contains(@placeholder,"Search")]').last().fill('Individualname');
    await page.keyboard.press('Enter');
    // WAIT for results properly
    await page.locator('//table').waitFor();
    await page.waitForTimeout(2000);
    // CLICK
    await page.locator('//a[@title="Individualname"]').first().waitFor({ timeout: 60000 });
    await page.locator('//a[@title="Individualname"]').first().click();
    await page.locator('//a[@title="Edit"]').waitFor();
    await page.locator('//a[@title="Edit"]').click();
    await page.locator('//a[contains(text(),"None")]').first().click();
    await page.getByText('Mrs.').click();
    await page.locator('//input[@placeholder="First Name"]').fill('jayasudha');
    await page.locator('//button/span[contains(text(),"Save")]').last().click();
});
