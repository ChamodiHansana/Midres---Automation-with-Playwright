const { expect } = require('@playwright/test');
const path = require('path');

exports.PriceSheetPage = class PriceSheetPage {
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

    async navigateToPriceSheetPage() {
        await this.page.getByRole('tab', { name: 'Price Sheets' }).click();
    }

    async uploadPriceSheet() {
        await this.page.getByRole('button', { name: 'New' }).click();
        await this.page.getByRole('combobox', { name: 'Select Brand' }).click();
        await this.page.getByRole('option', { name: 'LaCornue' }).click();
        await this.page.getByRole('button', { name: 'Choose date' }).click();
        await this.page.getByRole('gridcell', { name: '7', exact: true }).click();

        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(path.join('resources', 'samplePDF.pdf'));

        //await this.page.locator('label').filter({ hasText: 'Click or drag file(s) to this' }).getByRole('button').click();
        //await this.page.locator('label').filter({ hasText: 'Click or drag file(s) to this' }).getByRole('button').setInputFiles('BUR-POL-TITLE TEST 01 TITLE TEST 01 TITLE TEST 01 TITLE T-Multi-Language-01.pdf');
        await this.page.getByTestId('save-btn').click();
        //await this.page.getByText('Price sheet(s) have been').click();
    }

    /*
        async navigateToPriceSheetFolder() {
            await this.page.getByRole('button').first().click();
        }

    */







}