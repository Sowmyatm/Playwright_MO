const{expect}=require('@playwright/test')
class homePage{

    constructor(page){

        this.page=page
        this.menu="//img[@alt='menu']"
        this.logout="//button[normalize-space()='Sign out']"
        this.manageOption="//span[normalize-space()='Manage']"
    } 

    async verifyManageOption()
    {
        await expect (this.page.locator(this.manageOption)).toBeVisible()
    }

    async logoutFromApplication()
    {
        await this.page.click(this.menu)
        await this.page.click(this.logout)
    }

}
module.exports=homePage