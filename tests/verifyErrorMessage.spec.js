const{test, expect}  = require('@playwright/test')


//to maximize the screen size
test.use({viewport:{width:1135,height:491}})

test("verify error message", async({page})=> {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin")

    await page.getByPlaceholder("Password").fill("Adminme")

    await page.locator("//button[normalize-space()='Login']").click()

    //capturing the error message
    const errorMessage=await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log("Error meassage is: " + errorMessage);

    //asserting the error message(partial text)
    await expect(errorMessage.includes("Invalid")).toBeTruthy()
    
    //asserting with full text
    await expect(errorMessage==="Invalid credentials").toBeTruthy()

})