const{test,expect}=require('@playwright/test')
const { log } = require('console')

test("Select values from dropdown", async ({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/signup")



    /*
        label- always prefer if label is available
        value
        index
    */

    await page.locator("#state").selectOption({label:"Assam"})

    // await page.waitForTimeout(1000)

    await page.locator("#state").selectOption({value:"Karnataka"})
    // await page.waitForTimeout(1000)
    
    await page.locator("#state").selectOption({index:5})
    // await page.waitForTimeout(3000)

    //to check if particular value is present in the dropdown

   /* const value=await page.locator('#state').textContent()

    console.log("All dropdown values :"  +value);

    await expect(value.includes("Karnataka")).toBeTruthy()


    */

    let state = await page.$("#state")

    let allelements=await state.$$("option")

    let dropdownStatus = false

    for(let i=0;i<=allelements.length;i++)
    {
        let element = allelements[i]

        let value =  await element.textContent()

            if(value.includes("Rajasthan"))
            {
                dropdownStatus=true
                break
            }

        console.log("value from dropdown: " + value)

    }

    await expect(dropdownStatus).toBeTruthy


    //selecting multiple dropdowns

    await page.locator("#hobbies").selectOption(['Playing','Swimming'])

    await page.waitForTimeout(5000)

})