const { expect } = require('@playwright/test');
const path = require('path');

exports.SpecSheetsPage = class SpecSheetsPage {
    constructor(page) {
        this.page = page;

        this.spec_sheets_link = page.getByRole('link', { name: 'Spec Sheets' });
        this.spec_sheets_heading = page.getByRole('heading', { name: 'Spec Sheets' });

        this.spec_sheets_search_input = page.getByRole('searchbox', { name: 'Search' });
        this.spec_sheets_search_input_form_la_cornue_folder = page.getByRole('searchbox', { name: 'Search Spec Sheets' });
        this.spec_sheets_search_input_button = page.getByTestId('search-btn');

        // this.breadcrumb_spec_sheets = page.getByLabel('breadcrumb').getByRole('link', { name: 'Spec Sheets' }).click();
        this.chamodhi_folder = page.getByLabel('Chamodhi folder', { exact: true });
        this.filter = page.getByTestId('search-input').getByRole('button');

        this.brand_folders = page.getByRole('img', { name: 'LaCornue' });

        this.create_folder_button = page.getByRole('button', { name: 'New' });
        this.new_folder_option = page.getByRole('menuitem', { name: 'New Folder' });
        this.new_folder_name_textbox = page.getByRole('textbox', { name: 'Name' });
        this.create_button = page.getByTestId('create-btn');
        this.toast_message = page.getByText('Spec sheet folder Created');

        this.playwright_test_folder = page.getByLabel('PlaywrightTest Folder', { exact: true });
        this.file_upload_option = page.getByRole('menuitem', { name: 'File Upload' });
        this.file_input = page.getByTestId('file-chooser').first();
        this.reject_button = page.getByTestId('reject-btn');

        this.delete_option = page.getByText('Delete');
        this.delete_confirm_button = page.getByRole('button', { name: 'Delete' });
        this.delete_success_message = page.getByText('Spec sheets folder deleted');

        this.rename_option = page.getByText('Rename');
        this.rename_button = page.getByTestId('create-btn');
        this.spec_sheets_search_rename_folder_input = page.getByRole('textbox', { name: 'Name' });
    }

    async navigateToSpecSheetsPage() {
        await this.spec_sheets_link.click();
        await expect(this.spec_sheets_heading).toBeVisible();
        // await this.page.waitForTimeout(3000); // Wait 3 seconds for page to settle
    }

    async searchSpecSheets(search) {
        await this.page.waitForTimeout(2000);
        await this.spec_sheets_search_input.type(search);
        await this.page.waitForTimeout(2000);
        await this.spec_sheets_search_input_button.click();
        await this.page.waitForTimeout(2000);
        await expect(this.chamodhi_folder).toBeVisible();
        await this.page.waitForTimeout(2000);
    }

    async filterSpecSheets() {
        await this.filter.click();
    }

    async navigateToBrandFolders() {
        await this.brand_folders.click();
    }

    async createFolders() {
        await this.create_folder_button.click();
        await this.new_folder_option.click();
        await this.new_folder_name_textbox.type('PlaywrightTest Folder', { delay: 200 });
        await this.create_button.click();
        await this.page.waitForTimeout(2000);
        // await expect(this.toast_message).toBeVisible();
    }



    async renameFolders() {

        /*
                await this.page.waitForTimeout(2000);
                await this.spec_sheets_search_input.fill('');
                await this.page.waitForTimeout(2000);
                await this.spec_sheets_search_input.click();
                await this.spec_sheets_search_input_form_la_cornue_folder.type('playwright', { delay: 200 });
                await this.spec_sheets_search_input_button.click();


        */
        await this.page.waitForTimeout(2000);
        const renameMenuButton = this.page.locator('tr', { hasText: /playwright/i }).first().locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1ntbcta').first();
        await renameMenuButton.click();
        //await this.page.waitForTimeout(2000); // Wait for action menu to load
        await this.rename_option.click();
        //await this.page.waitForTimeout(2000);

        await this.spec_sheets_search_rename_folder_input.click();
        await this.spec_sheets_search_rename_folder_input.fill('');
        await this.spec_sheets_search_rename_folder_input.type('playwright Edit');
        //await this.page.waitForTimeout(2000);
        await this.rename_button.click();
        // await expect(this.delete_success_message).toBeVisible();
    }


    async deleteFolders() {
        /*
        await this.page.waitForTimeout(2000);
        await this.spec_sheets_search_input.fill('');
        await this.page.waitForTimeout(2000);
        await this.spec_sheets_search_input.click();
        await this.spec_sheets_search_input_form_la_cornue_folder.type('playwright', { delay: 200 });
        await this.spec_sheets_search_input_button.click();
        */

        await this.page.waitForTimeout(2000);

        const deleteMenuButton = this.page.locator('tr', { hasText: /playwright/i }).first().locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1ntbcta').first();
        await deleteMenuButton.click();
        await this.page.waitForTimeout(2000);
        await this.delete_option.click();
        await this.page.waitForTimeout(2000);
        await this.delete_confirm_button.click();
        await this.page.waitForTimeout(2000);
        // await expect(this.delete_success_message).toBeVisible();
    }


    //navigate to back

    async navigateBack() {
        await this.page.getByRole('link', { name: 'LaCornue' }).click();
    }



    //File upload functions

    async uploadFiles() {

        await this.page.waitForTimeout(2000);
        await this.spec_sheets_search_input.click();
        await this.page.waitForTimeout(2000);
        await this.spec_sheets_search_input_form_la_cornue_folder.type('playwright', { delay: 200 });
        await this.spec_sheets_search_input_button.click();
        await this.page.waitForTimeout(2000);
        await this.page.getByLabel('PlaywrightTest Folder', { exact: true }).click();



        await this.page.waitForTimeout(3000);
        //  await this.create_folder_button.click();
        // await this.file_upload_option.click();
        // await this.page.waitForTimeout(1000);


        await this.file_input.setInputFiles(path.join('resources', 'samplePDF.pdf'));


        //await this.file_input.setInputFiles([]);
        //await this.page.keyboard.press('Escape');

        await this.page.waitForTimeout(5000);
        await this.reject_button.click();

    }


    async previewFiles() {
        //await this.page.getByTestId('asset-table-tbody').getByRole('button').filter({ hasText: /^$/ }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-preview').click();
        await this.page.waitForTimeout(10000);
        await this.page.getByTestId('cancel-btn').click();
    }

    async downloadFiles() {
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-download').click();
        await this.page.waitForTimeout(2000);



    }

    async shareFiles() {

        await this.page.waitForTimeout(2000);
        await this.page.getByRole('cell').nth(4).click();
        await this.page.getByTestId('menu-item-share').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('heading', { name: 'Share Resources' }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Receiver Email' }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Receiver Email' }).fill('isunihasara@gmail.com');
        await this.page.waitForTimeout(2000);
        await this.page.getByTestId('add-btn').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Title' }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Title' }).fill('test title');
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Message' }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Message' }).fill('msg');
        //await this.page.waitForTimeout(2000);
        //await this.page.getByRole('button', { name: 'Choose date' }).click();
        //await this.page.waitForTimeout(2000);

        //await this.page.getByRole('textbox', { name: 'Expiration Date' }).fill('05/14/7');

        // await this.page.waitForTimeout(5000);
        await this.page.getByTestId('save-btn').click();
        //await this.page.waitForTimeout(4000);
        //await this.page.getByText('Spec sheets shared').click();
        //await this.page.waitForTimeout(2000);


    }

    async addToFavorites() {

    }

    async tagFiles() {

    }

    async renameFiles() {

    }

    async updateThumbnails() {

    }

    async deleteFiles() {

    }


};