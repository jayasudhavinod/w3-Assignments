import { test, expect } from "@playwright/test";

test("Handle multiple dropdowns", async ({ page }) => {

    await page.goto("https://www.telerik.com/contact");

    await page.selectOption('#Dropdown-1', {label: "Licensing/Pricing/Quotes"});  // 1st dropdown
    await page.waitForTimeout(2000);// Wait and select second dropdown
    await page.selectOption('#Dropdown-2', {label: "Kendo UI"});// 2nd dropdown
    await page.waitForTimeout(2000);// Wait and select third dropdown
    //await page.selectOption('#Country-1', {index:5});// Select country 3rd dropdown
    await page.selectOption('#Country-1', {label:'India'});
});