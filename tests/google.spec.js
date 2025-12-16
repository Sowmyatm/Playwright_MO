const{test,expect}=require('@playwright/test');
const { log } = require('console');

test("launch google", async ({page}) => {
    
    await page.goto("https://www.google.com")
    const url=await page.url

    console.log("Title is " + url);

   const title= await page.title
   console.log("Title is " + title);

   await expect(page).toHaveTitle("Google")
   
    

})