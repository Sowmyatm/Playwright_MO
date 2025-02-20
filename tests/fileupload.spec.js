const {test, expect}=require("@playwright/test")

test("fileUpload", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("./uploads/bumble.png")
    await page.waitForTimeout(3000)

    await page.locator("#file-submit").click()

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")

})