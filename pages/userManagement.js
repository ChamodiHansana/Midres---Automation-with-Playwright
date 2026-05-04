const { expect } = require('@playwright/test');
const path = require('path');

exports.UserManagementPage = class UserManagementPage {
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

    async navigateToUserManagementPage() {
        await this.page.getByRole('button', { name: 'open setting' }).click();
        await this.page.getByRole('button', { name: 'User Management' }).click();
        await this.page.getByRole('heading', { name: 'User Management' }).click();
    }


    async navigateToAdminPage() {
        await this.page.getByTestId('admin-title').click();
    }

    async searchAdmins(search) {
            await this.page.getByRole('textbox', { name: 'weight' }).click();
            await this.page.getByRole('textbox', { name: 'weight' }).fill(search);
            await this.page.getByText('chamodhi.h@expernetic.com');
            //await this.page.getByTestId('admin-search-txt').getByRole('button').click();
        }
        /*
            async reInviteAdmin() {

            }
        */



    async exportAdmins() {
        await this.page.getByTestId('save-btn').click();
    }


    //Brand Managers
    async navigateToBrandManagersPage() {
        await this.page.getByRole('tab', { name: 'Brand Manager' }).click();
        await this.page.getByTestId('brand-manager-title').click();
    }

    async createBrandManager() {
        await this.page.getByTestId('brand-manager-new-user-btn').click();
        await this.page.getByRole('combobox', { name: 'User Type' }).click();
        await this.page.getByRole('option', { name: 'External' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('BrandUser');
        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('Automate');
        await this.page.getByTestId('emailAddress-input').getByRole('textbox').click();
        await this.page.getByTestId('emailAddress-input').getByRole('textbox').fill('automatebranduser@gmail.com');
        await this.page.getByTestId('phoneNumber-input').click();
        await this.page.getByTestId('phoneNumber-input').fill('+1 (888) 888-88888');
        await this.page.getByTestId('mobileNumber-input').click();
        await this.page.getByTestId('mobileNumber-input').fill('+1 (888) 811-11111');
        await this.page.getByRole('combobox', { name: 'Select Brands' }).click();
        await this.page.getByRole('option', { name: 'Select All' }).click();
        await this.page.getByText('User Type *ExternalUser Type *Account InformationFirst Name *First Name *Last').click();
        await this.page.getByRole('combobox', { name: 'Select Distribution Centers' }).click();
        await this.page.getByRole('option', { name: 'Select All' }).click();
        await this.page.getByText('User Type *ExternalUser Type *Account InformationFirst Name *First Name *Last').click();
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('User added successfully').click();
    }

    async searchBrandManagers() {

        await this.page.getByRole('textbox', { name: 'weight' }).click();
        await this.page.getByRole('textbox', { name: 'weight' }).fill('automatebrand');
        await this.page.getByText('automatebranduser@gmail.com');
    }

    async editBrandUser() {



        const row = this.page
            .getByTestId('brand-manager-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'automatebranduser@gmail.com' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        // Click delete from menu
        //await this.page.getByTestId('menu-item-delete').click();


        //await this.page.getByTestId('brand-manager-table-tbody').getByRole('button').filter({ hasText: 'automatebranduser@gmail.com' }).click();
        await this.page.getByRole('menuitem', { name: 'Edit' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('BrandUserEdit');
        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('AutomateEdit');
        await this.page.getByRole('button', { name: 'Save' }).click();
        //await this.page.getByText('User updated successfully').click();
    }

    async deleteBrandUser() {

        const row = this.page
            .getByTestId('brand-manager-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'automatebranduser@gmail.com' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        //await this.page.getByTestId('brand-manager-table-tbody').getByRole('button').filter({ hasText: 'automatebranduser@gmail.com' }).click();
        await this.page.getByRole('menuitem', { name: 'Delete' }).click();
        await this.page.getByRole('textbox', { name: 'Reason' }).click();
        await this.page.getByRole('textbox', { name: 'Reason' }).fill('test');
        await this.page.getByRole('button', { name: 'Delete' }).click();
        //await this.page.getByText('User deleted successfully').click();
    }

    async exportBrandUsers() {
        await this.page.getByTestId('save-btn').click();
    }

    async removeSearchedBrandManager() {
        await this.page.getByTestId('brand-manager-search-txt').getByRole('button').click();
    }


    //VP Users

    async navigateToVPUsersPage() {
        await this.page.getByRole('tab', { name: 'VP' }).click();
        await this.page.getByTestId('vp-title').click();
    }

    async searchVPUsers() {
        await this.page.getByRole('textbox', { name: 'weight' }).click();
        await this.page.getByRole('textbox', { name: 'weight' }).fill('i.su.nihasa.r.a@gmail.com');
        await this.page.getByText('i.su.nihasa.r.a@gmail.com');
    }

    async exportVPUsers() {
        await this.page.getByTestId('save-btn').click();
    }

    async editVPUser() {

        const row = this.page
            .getByTestId('vp-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'i.su.nihasa.r.a@gmail.com' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        // Click edit from menu
        //await this.page.getByTestId('menu-item-edit').click();
        await this.page.getByRole('menuitem', { name: 'Edit' }).click();
        await this.page.getByTestId('mobileNumber-input').click();
        await this.page.getByTestId('mobileNumber-input').fill('+1 (888) 888-88888');
        await this.page.getByRole('combobox', { name: 'Southeast' }).click();
        await this.page.getByRole('option', { name: 'Southeast' }).click();
        await this.page.getByRole('button', { name: 'Save' }).click();
        //await this.page.getByText('User updated successfully').click();
    }

    //DSM Users
    async navigateToDSMUsersPage() {
        await this.page.getByRole('tab', { name: 'DSM' }).click();
        await this.page.getByTestId('dsm-title').click();
    }

    async searchDSMUsers() {
        await this.page.getByRole('textbox', { name: 'weight' }).click();
        await this.page.getByRole('textbox', { name: 'weight' }).fill('cham.odhihan.sana9@gmail.com');
        await this.page.getByText('cham.odhihan.sana9@gmail.com');
    }


    async editDSMUser() {
        const row = this.page
            .getByTestId('dsm-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'cham.odhihan.sana9@gmail.com' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        await this.page.getByRole('menuitem', { name: 'Edit' }).click();

        await this.page.getByRole('combobox', { name: 'UNITED STATES' }).click();
        await this.page.getByRole('option', { name: 'UNITED STATES', exact: true }).click();
        await this.page.getByRole('textbox', { name: 'City' }).click();
        await this.page.getByRole('textbox', { name: 'City' }).fill('city edit');
        await this.page.getByRole('textbox', { name: 'State' }).click();
        await this.page.getByRole('textbox', { name: 'State' }).fill('State edit');
        // await this.page.getByRole('combobox', { name: 'Zip Code' }).click();
        // await this.page.getByRole('option', { name: '- Aguada' }).click();
        await this.page.getByRole('button', { name: 'Save' }).click();

    }

    async exportDSMUsers() {

        await this.page.getByTestId('save-btn').click();

    }


    //Dealer
    async navigateToDealersPage() {
        await this.page.getByRole('tab', { name: 'Dealers' }).click();
        await this.page.getByTestId('admin-title').click();
    }

    async searchDealers() {
        await this.page.getByRole('searchbox', { name: 'Search by dealer account name' }).click();
        await this.page.getByRole('searchbox', { name: 'Search by dealer account name' }).fill('247 grills');
        await this.page.getByTestId('search-btn').click();
        await this.page.getByRole('button', { name: '247 GRILLS Acc No: TWO001 +1' });

    }

    async navigateToDealerDetailsPage() {
        await this.page.getByRole('button', { name: '247 GRILLS Acc No: TWO001 +1' }).click();
        await this.page.getByTestId('dealer-account-name').click();
        await this.page.getByTestId('dealer-account-address').click();
        await this.page.getByText('GREG ERNEWEIN').click();
        await this.page.getByText('AMBER THOMPSON').click();
        await this.page.getByLabel('breadcrumb').getByRole('link', { name: 'Dealers' }).click();
    }

    async exportDealers() {
        await this.page.getByTestId('search-input').getByRole('button').click();
        await this.page.getByRole('button', { name: 'Export' }).click();
    }


    //Dealer users
    async navigateToDealerUsersPage() {
        await this.page.getByRole('tab', { name: 'Dealer Users' }).click();

    }


    async createDealerUser() {
        await this.page.getByTestId('dealer-user-new-user-btn').click();
        await this.page.getByRole('combobox', { name: 'Select Dealer' }).click();
        await this.page.getByRole('option', { name: 'A1 AIR & ICE : A1A009' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('Automate');
        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('Dealeruser');
        await this.page.locator('input[name="emailAddress"]').click();
        await this.page.locator('input[name="emailAddress"]').fill('automate@testmai.com');
        await this.page.locator('input[name="phoneNumber"]').click();
        await this.page.locator('input[name="phoneNumber"]').fill('+1 (888) 888-88888');
        //await this.page.locator('input[name="mobileNumber"]').click();
        //await this.page.locator('input[name="mobileNumber"]').fill('+1 (888) 888-8888');
        await this.page.getByTestId('save-btn').click();
        await this.page.getByText('Dealer user added');
    }


    async searchDealerUsers() {
        await this.page.getByRole('textbox', { name: 'weight' }).click();
        await this.page.getByRole('textbox', { name: 'weight' }).fill('automate@testmai.com');
        await this.page.getByText('automate@testmai.com');
    }



    async addDealeraccount() {
        const row = this.page
            .getByTestId('dealer-user-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'automate@testmai.com' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();
        await this.page.getByRole('menuitem', { name: 'Add Dealer Account' }).click();


        await this.page.getByRole('dialog').getByText('Automate Dealeruser').click();
        await this.page.getByRole('combobox', { name: 'Select Dealer' }).click();
        await this.page.getByRole('option', { name: 'A. J. APPLIANCE : AJA001' }).click();
        await this.page.getByRole('combobox', { name: 'Approval By' }).click();
        await this.page.getByRole('option', { name: 'Isuni Hasara' }).click();
        await this.page.getByTestId('save-btn').click();
        await this.page.getByText('Request submitted');


    }




    async expandDelaerUser() {

        const row = this.page
            .getByTestId('dealer-user-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'automate@testmai.com' });

        await row.locator('#expand').click();


        await this.page.getByText('A. J. APPLIANCE : AJA001').click();
        await this.page.getByText('A1 AIR & ICE : A1A009').click();


    }

    async editDealerUser() {


        const row = this.page
            .getByTestId('dealer-user-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'automate@testmai.com' });

        // Click action menu button inside that row
        //await this.page.locator('#expand').nth(5).click();
        await row.getByRole('button').last().click();


        await this.page.getByRole('menuitem', { name: 'Edit' }).click();
        await this.page.getByRole('button', { name: 'General' }).click();
        await this.page.getByTestId('save-btn').click();
        await this.page.getByText('Dealer user updated').click();



    }

    async deleteDealerAccount() {
        const row = this.page
            .getByTestId('dealer-user-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'automate@testmai.com' });

        // Click action menu button inside that row
        //await row.getByRole('button').last().click();
        await this.page.locator('#id > div > .MuiStack-root > div').first().click();
        await this.page.getByRole('menuitem', { name: 'Delete' }).click();
        await this.page.getByRole('button', { name: 'Remove' }).click();
        await this.page.getByText('User removed from dealer');
    }


    async deleteDealerUser() {

        const row = this.page
            .getByTestId('dealer-user-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'automate@testmai.com' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();


        await this.page.getByRole('menuitem', { name: 'Delete' }).click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
        await this.page.getByText('User deleted successfully');
        await this.page.getByRole('heading', { name: 'No Data to Display' });

    }

    //MarketingUser


    async navigateToMarketingUsersPage() {
        await this.page.getByRole('tab', { name: 'Marketing' }).click();
        await this.page.getByTestId('marketing-title').click();
    }

    async createMarketingUser() {
        await this.page.getByTestId('marketing-new-user-btn').click();
        await this.page.getByRole('combobox', { name: 'User Type' }).click();
        await this.page.getByRole('option', { name: 'General Marketing' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('GeneralMarketing');
        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('AutomateUser');
        await this.page.getByTestId('emailAddress-txt').getByRole('textbox').click();
        await this.page.getByTestId('emailAddress-txt').getByRole('textbox').fill('generalmarketingautomate@testmail.com');
        await this.page.getByRole('combobox', { name: 'Select Brands' }).click();
        await this.page.getByRole('option', { name: 'Select All' }).click();
        await this.page.getByTestId('phoneNumber-txt').click();
        await this.page.getByTestId('phoneNumber-txt').fill('+1 (888) 888-88888');
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('User added successfully');

    }

    async searchMarketingUsers() {
        await this.page.getByRole('textbox', { name: 'weight' }).click();
        await this.page.getByRole('textbox', { name: 'weight' }).fill('automate');
        await this.page.getByText('generalmarketingautomate@testmail.com');
    }

    async editMarktingUsers() {
        const row = this.page
            .getByTestId('marketing-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'generalmarketingautomate' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        await this.page.getByRole('menuitem', { name: 'Edit' }).click();
        await this.page.getByRole('heading', { name: 'Edit Marketing User' }).click();

        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('GeneralMarketingedit');
        await this.page.getByTestId('phoneNumber-txt').click();
        await this.page.getByTestId('phoneNumber-txt').fill('+1 (888) 888-11111');
        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('AutomateUseredit');
        await this.page.getByRole('button', { name: 'Save' }).click();
        //await this.page.getByText('User updated successfully');


    }

    async deleteMarketingUsers() {

        const row = this.page
            .getByTestId('marketing-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'generalmarketingautomate' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        await this.page.getByRole('menuitem', { name: 'Delete' }).click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
        await this.page.getByText('User deleted successfully').click();
        await this.page.getByRole('heading', { name: 'No Data to Display' });

    }


    async exportMarketingUsers() {
        await this.page.getByTestId('marketing-search-txt').getByRole('button').click();
        await this.page.getByTestId('save-btn').click();
        //await this.page.getByTestId('marketing-search-txt').getByRole('button').click();
    }


    //Other Users
    async navigateToOtherUsersPage() {
        await this.page.getByRole('tab', { name: 'Other' }).click();
        //await this.page.getByTestId('title').click();
    }

    async createOtherUser() {
        await this.page.getByTestId('new-user-btn').click();
        await this.page.getByRole('combobox', { name: 'User Type' }).click();
        await this.page.getByRole('option', { name: 'Designer', exact: true }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('Automate');
        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('CorpUser');
        await this.page.getByTestId('emailAddress-input').getByRole('textbox').click();
        await this.page.getByTestId('emailAddress-input').getByRole('textbox').fill('otheruserautomate@testmail.com');
        await this.page.getByRole('combobox', { name: 'Select Brands' }).click();
        await this.page.getByRole('option', { name: 'Select All' }).click();
        await this.page.getByTestId('emailAddress-input').getByRole('textbox').click();
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('User added successfully').click();

    }

    async searchOtherUsers() {
        await this.page.getByRole('textbox', { name: 'weight' }).click();
        await this.page.getByRole('textbox', { name: 'weight' }).fill('automate');
        await this.page.getByText('otheruserautomate');
    }

    async resetOtherUsers() {
        const row = this.page
            .getByTestId('other-user-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'otheruserautomate' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        await this.page.getByRole('menuitem', { name: 'Reset' }).click();
        await this.page.getByRole('button', { name: 'Confirm' }).click();
        await this.page.getByText('User invited successfully');


    }


    async editOtherUsers() {
        const row = this.page
            .getByTestId('other-user-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'otheruserautomate' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        await this.page.getByRole('menuitem', { name: 'Edit' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('Automateedit');
        await this.page.getByRole('textbox', { name: 'Last Name' }).click();
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('CorpUseredit');
        await this.page.getByTestId('phoneNumber-input').click();
        await this.page.getByTestId('phoneNumber-input').fill('+1 (888) 888-88888');
        await this.page.getByRole('button', { name: 'Save' }).click();
        //await this.page.getByText('User updated successfully');


    }

    async deleteOtherUsers() {

        const row = this.page
            .getByTestId('other-user-table-tbody')
            .getByRole('row')
            .filter({ hasText: 'otheruserautomate' });

        // Click action menu button inside that row
        await row.getByRole('button').last().click();

        await this.page.getByRole('menuitem', { name: 'Delete' }).click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
        //await this.page.getByText('User deleted successfully');

    }



    async exportOtherUsers() {

        await this.page.getByTestId('search-txt').getByRole('button').click();
        await this.page.getByTestId('save-btn').click();


    }








}