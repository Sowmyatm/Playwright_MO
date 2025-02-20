const{expect}=require('@playwright/test')
class LoginPage{

    constructor(page){

        this.page=page
        this.username="#email1"
        this.password="//input[@id='password1']"
        this.button="//button[text()='Sign in']"
        this.signinHeaderOption="//h2[normalize-space()='Sign In']"
    }
    
    async verifySigninOption()
    {
        await expect(this.page.locator(this.signinHeaderOption)).toBeVisible()
    }

    async loginToApplication(user,pass)
    {
        await this.page.fill(this.username,user)
        await this.page.fill(this.password,pass)
        await this.page.click(this.button)
    }

}

module.exports=LoginPage