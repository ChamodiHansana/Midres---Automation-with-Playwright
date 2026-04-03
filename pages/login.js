exports.LoginPage =class  LoginPage {

    constructor(page) {

    this.page = page;
    this.username_textbox = page.getByRole('textbox', { name: 'Email Address' });
    this.password_textbox = page.getByRole('textbox', { name: 'Password' });
    this.login_button = page.getByRole('button', { name: 'Sign in' });

   }
   async navigateToLoginPage() {
    await this.page.goto('https://qa-portal.middlebyresidential.com/');
    
   }

    async login(username, password) {
    await this.username_textbox.type(username, { delay: 200 });
    await this.password_textbox.type(password, { delay: 200 });
    await this.login_button.click();
    }


    async validateLoginSuccess() {
    await this.page.waitForURL(/https:\/\/qa-portal\.middlebyresidential\.com\/(dashboard|$|#)/);
    }

    


}