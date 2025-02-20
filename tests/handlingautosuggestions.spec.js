const{test, expect}=require('@playwright/test')

test("Handling Auto SuggestionsUsing keyboard", async({page})=>{

    await page.goto("http://www.google.com")

    await page.locator("textarea[name='q']").fill("Playwright")
    await page.waitForSelector("//li[@role='presentation']")

    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")

})

test.only("Handling Auto Suggestions Using Loop", async({page})=>{

    await page.goto("http://www.google.com")

    await page.locator("textarea[name='q']").fill("Playwright")
    await page.waitForSelector("//li[@role='presentation']")

   const elements= await page.$$("//li[@role='presentation']")

   for(let i=0;i<elements.length;i++)
   {

    const text=await elements[i].textContent()

    if(text.includes('tutorial'))
    {
        await elements[i].click
        break
    }
   }

})