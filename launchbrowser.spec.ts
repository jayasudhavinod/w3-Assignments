import test, { chromium, firefox, webkit } from "@playwright/test";

test("Launch Browser",async()=>{
//inbuilt wait for -30s

//To Launch the Browser
//By default it will launch the browser in headless mode
const browser=await chromium.launch()

//to open the window
const context=await browser.newContext()

//to open the page
const page=await context.newPage()

//load the url
await page.goto("https://www.facebook.com")

//title page
const pageTitle= await page.title()
console.log("Page Title is : "+pageTitle)
})