const { expect } = require('@playwright/test');

exports.DashboardPage = class DashboardPage {

    constructor(page) {

        this.page = page;
        this.dashboard_heading = page.getByRole('heading', { name: /Dashboard/i });

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


    async validateDashboard() {
        await this.page.waitForURL(/dashboard|#\//);
        await expect(this.dashboard_heading).toBeVisible();
    }


}