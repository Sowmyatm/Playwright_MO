const { test, expect }= require('@playwright/test');
const { TIMEOUT } = require('dns');

test("test login", async ({page})=> {

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.getByPlaceholder("Username").fill("Admin")

   await page.locator("//input[@placeholder='Password']").fill("admin123",{timeout:100})


    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL(/dashboard/) 
    // await page.waitForTimeout(5000)

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()

    // await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/login/)
})