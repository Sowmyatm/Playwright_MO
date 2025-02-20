const{test,expect}=require('@playwright/test')
const testdata= JSON.parse(JSON.stringify(require('./testdata.json')))

test('Read Data From JsonFile', async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("//input[@name='email1']").fill(testdata.username)

    await page.locator("//input[@name='password1']").fill(testdata.password)

    await page.pause()

})