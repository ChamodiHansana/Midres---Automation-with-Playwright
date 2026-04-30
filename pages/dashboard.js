const { expect } = require('@playwright/test');

exports.DashboardPage =class  DashboardPage {

    constructor(page) {

    this.page = page;
    this.dashboard_heading = page.getByRole('heading', { name: /Dashboard/i });
    this.welcome_back_heading = page.getByRole('heading', { name: /^Welcome Back,\s*/ });
    this.whats_new_text = page.getByText('What\'s New at Middleby');
    this.our_brands_text = page.getByRole('main').getByText('Our Brands');
   
   }


    async validateDashboard() {
    await this.page.waitForURL(/dashboard|#\//);
    await expect(this.dashboard_heading).toBeVisible();
    //await expect(this.welcome_back_heading).toBeVisible();
    //await expect(this.whats_new_text).toBeVisible();
    //await expect(this.our_brands_text).toBeVisible();
    }

   
}