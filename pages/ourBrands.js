const { expect } = require('@playwright/test');
const path = require('path');

exports.OurBrandsPage = class OurBrandsPage {
    constructor(page) {
        this.page = page;
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



}