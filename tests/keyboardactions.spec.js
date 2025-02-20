const{test, expect}=require("@playwright/test")

test("Keyboard Actions", async({page})=>{

    await page.goto("https://www.google.com/")

    // await page.locator("//textarea[@name='q']").fill("Sowmya Gowda")

    await page.locator("//textarea[@name='q']").focus()

    await page.keyboard.type("Sowmya Gowda!")
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")

    for(let i=0;i<'Gowda'.length;i++)
    {
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")

   /* await page.keyboard.press("Control+A")
    

    await page.keyboard.press("Control+C")
   
    await page.keyboard.press("Backspace")
    
    await page.keyboard.press("Control+V")
    // await page.keyboard.press("Enter")

  */

})