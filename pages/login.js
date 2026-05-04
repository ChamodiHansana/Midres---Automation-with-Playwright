exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Email Address' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: 'Sign in' });

        this._wrapMethods();
    }

    _wrapMethods() {
        const proto = Object.getPrototypeOf(this);
        Object.getOwnPropertyNames(proto).forEach((key) => {
            if (key === 'constructor' || key.startsWith('_')) return;
            const original = this[key];
            if (typeof original !== 'function') return;
            this[key] = async(...args) => {
                const result = await original.apply(this, args);
                console.log(`✅ ${this.constructor.name}.${key} succeeded`);
                return result;
            };
        });
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url);

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