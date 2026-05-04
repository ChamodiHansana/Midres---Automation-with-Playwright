const { expect } = require('@playwright/test');
const path = require('path');

exports.MaintenancePage = class MaintenancePage {
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

    async navigateToMaintenancePage() {
        await this.page.getByRole('button', { name: 'open setting' }).click();
        await this.page.getByRole('button', { name: 'Maintenance' }).click();
        await this.page.getByRole('heading', { name: 'Maintenance' });
    }


    async createNewStory() {
        await this.page.getByRole('button', { name: 'New' }).click();
        await this.page.getByRole('button', { name: 'Cancel' }).click();
        await this.page.getByRole('button', { name: 'Proceed' }).click();
        await this.page.getByRole('button', { name: 'New' }).click();
        await this.page.getByRole('combobox', { name: 'Select Brand' }).click();
        await this.page.getByRole('option', { name: 'LaCornue' }).click();
        await this.page.getByRole('textbox', { name: 'Header Text' }).click();
        await this.page.getByRole('textbox', { name: 'Header Text' }).fill('Automate Header Text');
        await this.page.getByRole('textbox', { name: 'Header Note Text' }).click();
        await this.page.getByRole('textbox', { name: 'Header Note Text' }).fill('Automate Header Note Text');
        //await this.page.getByRole('button', { name: 'Add List View Background' }).click();
        //await this.page.getByRole('button', { name: 'Add List View Background' }).setInputFiles(path.join('resources', 'sampleImage.jpg'));
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(path.join('resources', 'AddListViewBackground.jpg'));
        await this.page.getByRole('button', { name: 'next' }).click();


        //await this.page.getByRole('button', { name: 'Add Detail View Background' }).click();
        //await this.page.getByRole('button', { name: 'Add Detail View Background' }).setInputFiles('Screenshot 2025-08-20 113110.png');
        await fileInput.setInputFiles(path.join('resources', 'AddDetailViewBackground.jpg'));


        await this.page.locator('.ql-editor').click();
        await this.page.locator('.ql-editor').fill('Test Description');
        await this.page.getByRole('button', { name: 'next' }).click();


        //await this.page.getByRole('button', { name: 'Add Top Story Background' }).click();
        //await this.page.getByRole('button', { name: 'Add Top Story Background' }).setInputFiles('Screenshot 2025-08-20 115149.png');
        await fileInput.setInputFiles(path.join('resources', 'AddTopStoryBackground.jpg'));

        await this.page.getByRole('checkbox').check();
        await this.page.getByRole('button', { name: 'submit' }).click();


    }

    async editStory() {
        await this.page.getByRole('button', { name: 'edit' }).first().click();
        await this.page.getByRole('textbox', { name: 'Header Text' }).click();
        await this.page.getByRole('textbox', { name: 'Header Text' }).fill('Automate Header Text edit');
        await this.page.getByRole('textbox', { name: 'Header Note Text' }).click();
        await this.page.getByRole('textbox', { name: 'Header Note Text' }).fill('Automate Header Note Text edit');
        await this.page.getByText('Test Description').click();
        //await this.page.locator('div').filter({ hasText: /^Test Description$/ }).nth(3).fill('Test Description edit');
        //await this.page.getByRole('checkbox').uncheck();
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Story updated successfully.');
    }

    async enableToStoryToggle() {
        await this.page.getByRole('checkbox').first().check();
        await this.page.getByText('Top Story status updated');
    }

    async deleteStory() {
        await this.page.getByRole('button', { name: 'remove' }).first().click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
        await this.page.getByText('Story archived successfully.');
    }







}