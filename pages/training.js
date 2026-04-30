const { expect } = require('@playwright/test');
const path = require('path');

exports.TrainingPage = class TrainingPage {
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

    async navigateToTrainingPage() {
        await this.page.getByRole('link', { name: 'Training' }).click();
    }

    async navigateToBrandFolderTraining() {
        await this.page.getByRole('img', { name: 'LaCornue' }).click();
    }


    async searchTraining(search) {

        await this.page.getByRole('searchbox', { name: 'Search' }).type(search);
        await this.page.getByTestId('search-btn').click();
        await this.page.getByTestId('search-input').getByRole('button').filter({ hasText: /^$/ }).click();

    }


    async createTrainingFolder() {
        await this.page.getByRole('button', { name: 'New' }).click();
        await this.page.getByRole('menuitem', { name: 'New Folder' }).click();
        await this.page.getByRole('heading', { name: 'New Folder' }).click();
        await this.page.getByRole('textbox', { name: 'Name' }).click();
        await this.page.getByRole('textbox', { name: 'Name' }).fill('TrainingTestAutomation');
        await this.page.getByTestId('create-btn').click();
        await this.page.getByText('Training Resource Folder').click();
    }


    async searchCreatedFilterTraining() {
        await this.page.getByRole('searchbox', { name: 'Search' }).type('TrainingTestAutomation');
        await this.page.getByTestId('search-btn').click();
        await this.page.getByTestId('list-view-toggle').click();
        await this.page.getByLabel('TrainingTestAutomation', { exact: true }).click();
        await this.page.waitForTimeout(2000);
    }


    async uploadFilesTraining() {

        this.file_input = this.page.getByTestId('file-chooser').first();
        await this.file_input.setInputFiles(path.join('resources', 'samplePDF.pdf'));
        await this.page.waitForTimeout(5000);
        await this.page.getByTestId('reject-btn').click();

    }

    async previewFilesTraining() {
        //await this.page.waitForTimeout(2000);

        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-preview').click();
        await this.page.waitForTimeout(10000);
        await this.page.getByTestId('cancel-btn').click();
    }

    async downloadFilesTraining() {
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-download').click();
        await this.page.waitForTimeout(2000);
    }

    async shareFilesTraining() {

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

    async addToFavoritesTraining() {
        //await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-add-to-list').click();
        //await this.page.getByTestId('add-to-my-list-txt').click();


        await this.page.getByRole('textbox', { name: 'Create a New List' }).click();
        await this.page.getByRole('textbox', { name: 'Create a New List' }).fill('Automate Test List');

        await this.page.getByRole('button', { name: 'Add' }).click();
        await this.page.getByTestId('my-list-btn').click();
        await this.page.getByTestId('list-view-toggle').click();
        //await this.page.getByTestId('add-to-list-btn').click();
        //await this.page.getByRole('button', { name: 'My List' }).click();
        await this.page.getByRole('button', { name: 'Automate Test List' }).click();
        await this.page.getByLabel('samplePDF.pdf', { exact: true }).click();
        await this.page.getByTestId('cancel-btn').click();


    }



    async deleteMyListFolderTraining() {

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
        await this.page.getByTestId('training-breadcrumb').click();

    }




    async tagFilesTraining() {

        await this.page.getByTestId('list-view-toggle').click();
        //await this.page.getByRole('cell').nth(4).click();

        await this.page.getByLabel('TrainingTestAutomation', { exact: true }).click();
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

    async renameFilesTraining() {
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

    async deleteFilesTraining() {

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

    async navigateBackTraining() {
        await this.page.getByRole('link', { name: 'LaCornue' }).click();
    }

    async renameFoldersTraining() {

        await this.page.getByRole('cell').nth(4).click();
        //await this.page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1ntbcta').click();
        await this.page.getByTestId('menu-item-rename').click();
        await this.page.getByRole('textbox', { name: 'Name' }).fill('SpecSheetTestAutomationEdit');
        await this.page.getByTestId('create-btn').click();
        await this.page.getByText('Training folder updated').click();
    }


    async deleteFoldersTraining() {
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-delete').click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
        //await this.page.getByText('SpecSheet resource folder').click();


    }









};