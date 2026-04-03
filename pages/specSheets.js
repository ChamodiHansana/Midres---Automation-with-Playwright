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
        await this.spec_sheets_search_input.type(search);
        await this.spec_sheets_search_input_button.click();
        await expect(this.chamodhi_folder).toBeVisible();
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
        // await expect(this.toast_message).toBeVisible();
    }

    

    async renameFolders() {
        await this.spec_sheets_search_input.click();
        await this.spec_sheets_search_input_form_la_cornue_folder.type('playwright', { delay: 200 });

        await this.spec_sheets_search_input_button.click();
        // Wait for search results and find the row containing the folder, then click its menu button
        const renameMenuButton = this.page.locator('tr', { hasText: /playwright/i }).first().locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1ntbcta').first();
        await renameMenuButton.click();
        await this.page.waitForTimeout(2000); // Wait for action menu to load
        await this.rename_option.click();
        await this.page.waitForTimeout(2000);

        await this.spec_sheets_search_rename_folder_input.click();
        await this.spec_sheets_search_rename_folder_input.fill('');
        await this.spec_sheets_search_rename_folder_input.type('playwright Edit', { delay: 200 });
        await this.page.waitForTimeout(2000);
        await this.rename_button.click();
        // await expect(this.delete_success_message).toBeVisible();
    }


    async deleteFolders() {
        await this.page.waitForTimeout(2000);
        await this.spec_sheets_search_input.fill('');
        await this.page.waitForTimeout(2000);
        await this.spec_sheets_search_input.click();
        await this.spec_sheets_search_input_form_la_cornue_folder.type('playwright', { delay: 200 });
        await this.spec_sheets_search_input_button.click();
        await this.page.waitForTimeout(2000);

        const deleteMenuButton = this.page.locator('tr', { hasText: /playwright/i }).first().locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1ntbcta').first();
        await deleteMenuButton.click();
        await this.page.waitForTimeout(2000);
        await this.delete_option.click();
        await this.page.waitForTimeout(2000);
        await this.delete_confirm_button.click();
        // await expect(this.delete_success_message).toBeVisible();
    }


    //File upload functions

    async uploadFiles() {


        await this.spec_sheets_search_input.click();
        await this.spec_sheets_search_input_form_la_cornue_folder.type('playwright', { delay: 200 });
        await this.spec_sheets_search_input_button.click();
        await this.page.getByLabel('PlaywrightTest Folder', { exact: true }).click();


    
        await this.page.waitForTimeout(1000);
        await this.create_folder_button.click();
        await this.file_upload_option.click();
        await this.page.waitForTimeout(1000);
        await this.file_input.setInputFiles(path.join('resources', 'samplePDF.pdf'));
        await this.page.waitForTimeout(5000);
        await this.reject_button.click();
        await this.file_input.setInputFiles([]);

    }


};


