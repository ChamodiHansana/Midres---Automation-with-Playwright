const { expect } = require('@playwright/test');
const path = require('path');

exports.LiteraturePage = class LiteraturePage {
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

    async navigateToLiteraturePage() {
        await this.page.getByRole('link', { name: 'Literature' }).click();
    }

    async navigateToBrandFolderLiterature() {
        await this.page.getByRole('img', { name: 'LaCornue' }).click();
    }


    async searchLiterature(search) {

        await this.page.getByRole('searchbox', { name: 'Search Literature' }).type(search);
        await this.page.getByTestId('search-btn').click();
        await this.page.getByTestId('search-input').getByRole('button').filter({ hasText: /^$/ }).click();

    }


    async createLiteratureFolder() {
        await this.page.getByRole('button', { name: 'New' }).click();
        await this.page.getByRole('menuitem', { name: 'New Folder' }).click();
        await this.page.getByRole('heading', { name: 'New Folder' }).click();
        await this.page.getByRole('textbox', { name: 'Name' }).click();
        await this.page.getByRole('textbox', { name: 'Name' }).fill('LiteratureTestAutomation');
        await this.page.getByTestId('create-btn').click();
        await this.page.getByText('Literature resource folder').click();
    }


    async searchCreatedFilterLiterature() {
        await this.page.getByRole('searchbox', { name: 'Search Literature' }).type('LiteratureTestAutomation');
        await this.page.getByTestId('search-btn').click();
        await this.page.getByTestId('list-view-toggle').click();
        //await this.page.getByRole('cell').nth(4).click();
        await this.page.getByLabel('LiteratureTestAutomation', { exact: true }).click();
        await this.page.waitForTimeout(2000);
    }


    async uploadFilesLiterature() {

        this.file_input = this.page.getByTestId('file-chooser').first();
        await this.file_input.setInputFiles(path.join('resources', 'samplePDF.pdf'));
        await this.page.waitForTimeout(5000);
        await this.page.getByTestId('reject-btn').click();

    }

    async previewFilesLiterature() {
        //await this.page.waitForTimeout(2000);

        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-preview').click();
        await this.page.waitForTimeout(10000);
        await this.page.getByTestId('cancel-btn').click();
    }

    async downloadFilesLiterature() {
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-download').click();
        await this.page.waitForTimeout(2000);
    }

    async shareFilesLiterature() {

        await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-share').click();
        await this.page.getByRole('heading', { name: 'Share Resources' }).click();
        await this.page.getByRole('textbox', { name: 'Receiver Email' }).click();
        await this.page.getByRole('textbox', { name: 'Receiver Email' }).fill('isunihasara@gmail.com');
        await this.page.waitForTimeout(2000);
        await this.page.getByTestId('add-btn').click();
        await this.page.getByRole('textbox', { name: 'Title' }).click();
        await this.page.getByRole('textbox', { name: 'Title' }).fill('test title');
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Message' }).click();
        await this.page.getByRole('textbox', { name: 'Message' }).fill('msg');
        await this.page.waitForTimeout(2000);
        await this.page.getByTestId('save-btn').click();

    }

    async addToFavoritesLiterature() {
        //await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-add-to-list').click();
        await this.page.getByTestId('add-to-my-list-txt').click();
        await this.page.getByRole('textbox', { name: 'Create a New List' }).click();
        await this.page.getByRole('textbox', { name: 'Create a New List' }).fill('Automate Test List');
        await this.page.getByTestId('add-to-list-btn').click();
        await this.page.getByRole('button', { name: 'My List' }).click();
        await this.page.getByRole('button', { name: 'Automate Test List' }).click();
        await this.page.getByLabel('samplePDF.pdf', { exact: true }).click();
        await this.page.getByTestId('cancel-btn').click();





    }

    async deleteMyListFolderLierature() {
        await this.page.getByTestId('list-view-toggle').click();
        await this.page.getByRole('link', { name: 'My List' }).click();
        const row = this.page
            .getByTestId('personalized-asset-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'Automate Test List' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        // Click delete from menu
        await this.page.getByTestId('menu-item-delete').click();


        await this.page.getByTestId('delete-btn').click();
        await this.page.waitForTimeout(2000);
        //await this.page.getByTestId('training-breadcrumb').click();
        await this.page.getByLabel('breadcrumb').getByRole('link', { name: 'Literature' }).click();

    }



    async tagFilesLiterature() {

        await this.page.getByTestId('list-view-toggle').click();
        //await this.page.getByRole('cell').nth(4).click();
        await this.page.getByLabel('LiteratureTestAutomation', { exact: true }).click();
        await this.page.waitForTimeout(2000);

        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-tag').click();
        await this.page.getByRole('combobox', { name: 'Name' }).click({ force: true });
        await this.page.getByRole('combobox', { name: 'Name' }).fill('TEST Name');
        //await this.page.waitForTimeout(2000);
        await this.page.getByRole('combobox', { name: 'Value' }).click({ force: true });
        await this.page.getByRole('combobox', { name: 'Value' }).fill('Test Value');
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button').nth(2).click();
        await this.page.getByTestId('save-btn').click();
        await this.page.getByText('Tags updated successfully.').click();


    }

    async renameFilesLiterature() {
        //await this.page.waitForTimeout(2000);
        //await this.page.getByLabel('PlaywrightTest Folder', { exact: true }).click();
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-rename').click();
        //await this.page.getByRole('textbox', { name: 'Name' }).click();
        await this.page.getByRole('textbox', { name: 'Name' }).fill('samplePDFEdit');
        await this.page.getByTestId('create-btn').click();

        //await this.page.waitForTimeout(4000);
        //await this.page.getByText('Spec sheet file updated').click();
    }

    async deleteFilesLiterature() {

        /*
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-delete').click({ force: true });
        await this.page.getByRole('button', { name: 'Delete' }).click();
        //await this.page.getByText('Spec sheet(s) deleted').click();
        */
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-delete').click();

        const dialog = this.page.getByRole('dialog');
        await expect(dialog).toBeVisible();

        await dialog.getByRole('button', { name: /delete/i }).click();
    }

    async navigateBackLiterature() {
        await this.page.getByRole('link', { name: 'LaCornue' }).click();
    }

    async renameFoldersLiterature() {

        await this.page.getByRole('cell').nth(4).click();
        //await this.page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1ntbcta').click();
        await this.page.getByTestId('menu-item-rename').click();
        await this.page.getByRole('textbox', { name: 'Name' }).fill('LiteratureTestAutomationEdit');
        await this.page.getByTestId('create-btn').click();
        //await this.page.getByText('Literature folder updated').click();
    }


    async deleteFoldersLiterature() {
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-delete').click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
        //await this.page.getByText('Literature resource folder').click();


    }


    async placeOrderLiterature() {
        await this.page.getByRole('banner').getByRole('link', { name: 'Literature' }).click();
        await this.page.getByRole('img', { name: 'LaCornue' }).click();
        //await this.page.getByRole('switch').check();
        //await this.page.waitForTimeout(5000);
        //await this.page.getByRole('searchbox', { name: 'Search Literature' }).click();
        await this.page.getByRole('searchbox', { name: 'Search Literature' }).fill('Luvana');
        await this.page.getByTestId('search-btn').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByTestId('list-view-toggle').click();
        await this.page.getByRole('cell').nth(4).click();
        //await this.page.waitForTimeout(2000);
        await this.page.getByTestId('menu-item-add-to-cart').click();
        //await this.page.waitForTimeout(5000);


        await this.page.getByRole('button', { name: 'Cart' }).click();
        await this.page.getByTestId('save-btn').click();
        await this.page.waitForTimeout(2000);

        await this.page.getByRole('combobox', { name: 'Country' }).click();
        await this.page.getByRole('option', { name: 'UNITED STATES', exact: true }).click();
        await this.page.getByRole('combobox', { name: 'Address' }).fill('55');
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('option', { name: 'Fruit Street Boston, MA, USA' }).click();
        await this.page.waitForTimeout(5000);

        await this.page.getByTestId('phone-input').fill('+1 (888) 888-88888');
        await this.page.getByRole('textbox', { name: 'Note' }).fill('test');

        await this.page.getByTestId('save-btn').click();

        await this.page.waitForTimeout(5000);
        await this.page.getByRole('heading', { name: 'Your order has been placed!' }).click();
        await this.page.getByTestId('save-btn').click();



    }









};