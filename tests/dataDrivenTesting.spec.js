const{test,expect}=require('@playwright/test')
const { describe } = require('node:test')

const testdata=JSON.parse(JSON.stringify(require('./dataDriven.json')))



test.describe("Data driven login test", function()

{

    //to execute array of 3 records
    for(const data of testdata)
    {
        test.describe(`Login with users ${data.id}`, function() //use back quotes(its with tilde)
        {

            test("Login To application", async({page})=>{
                
                await page.goto("https://freelance-learn-automation.vercel.app/login")

                await page.locator("//input[@name='email1']").fill(data.username)

                await page.locator("//input[@name='password1']").fill(data.password)
            })

        })

    }
})