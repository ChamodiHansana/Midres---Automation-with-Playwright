import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { DashboardPage } from '../../pages/dashboard';
import { SpecSheetPage } from '../../pages/specSheet';
import { LiteraturePage } from '../../pages/literature';
import { BrandAssetsPage } from '../../pages/brandAssets';
import { TrainingPage } from '../../pages/training';
import { UserManagementPage } from '../../pages/userManagement';
import { MaintenancePage } from '../../pages/maintenance';
import { PriceSheetPage } from '../../pages/priceSheet';


test('Login to the application', async({ page }) => {


    test.setTimeout(80000000);

    const Login = new LoginPage(page);
    const Dashboard = new DashboardPage(page);
    const SpecSheets = new SpecSheetPage(page);
    const Literature = new LiteraturePage(page);
    const BrandAssets = new BrandAssetsPage(page);
    const Training = new TrainingPage(page);
    const UserManagement = new UserManagementPage(page);
    const Maintenance = new MaintenancePage(page);
    const PriceSheet = new PriceSheetPage(page);

    //Login
    await Login.navigateToLoginPage();
    await page.waitForTimeout(2000);
    await Login.login('chamodhi.h@expernetic.com', 'Test@123');
    await page.waitForTimeout(2000);
    await Login.validateLoginSuccess();
    await page.waitForTimeout(2000);
    await Dashboard.validateDashboard();
    await page.waitForTimeout(2000);


    //Spec Sheets Page

    await SpecSheets.navigateToSpecSheetPage();
    await page.waitForTimeout(2000);
    await SpecSheets.navigateToBrandFolderSpecSheets();
    await page.waitForTimeout(2000);
    //await SpecSheets.searchSpecSheets('chamodhi');
    //await page.waitForTimeout(2000);
    await SpecSheets.createSpecSheetsFolder();
    await page.waitForTimeout(2000);
    await SpecSheets.searchCreatedFilterSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.uploadFilesSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.previewFilesSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.downloadFilesSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.shareFilesSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.addToFavoritesSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.deleteMyListFolderSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.navigateToBrandFolderSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.tagFilesSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.renameFilesSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.deleteFilesSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.navigateBackSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.renameFoldersSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.deleteFoldersSpecSheets();
    await page.waitForTimeout(2000);

    //Literature Page

    await Literature.navigateToLiteraturePage();
    await page.waitForTimeout(2000);
    await Literature.navigateToBrandFolderLiterature();
    await page.waitForTimeout(2000);
    //await Literature.searchLiterature('chamodhi');
    //await page.waitForTimeout(2000);
    await Literature.createLiteratureFolder();
    await page.waitForTimeout(2000);
    await Literature.searchCreatedFilterLiterature();
    await page.waitForTimeout(2000);
    await Literature.uploadFilesLiterature();
    await page.waitForTimeout(2000);
    await Literature.previewFilesLiterature();
    await page.waitForTimeout(2000);
    await Literature.downloadFilesLiterature();
    await page.waitForTimeout(2000);
    await Literature.shareFilesLiterature();
    await page.waitForTimeout(2000);
    await Literature.addToFavoritesLiterature();
    await page.waitForTimeout(2000);
    await Literature.deleteMyListFolderLierature();
    await page.waitForTimeout(2000);
    await Literature.navigateToBrandFolderLiterature();
    await page.waitForTimeout(2000);
    await Literature.tagFilesLiterature();
    await page.waitForTimeout(2000);
    await Literature.renameFilesLiterature();
    await page.waitForTimeout(2000);
    await Literature.deleteFilesLiterature();
    await page.waitForTimeout(2000);
    await Literature.navigateBackLiterature();
    await page.waitForTimeout(2000);
    await Literature.renameFoldersLiterature();
    await page.waitForTimeout(2000);
    await Literature.deleteFoldersLiterature();
    await page.waitForTimeout(2000);


    await Literature.placeOrderLiterature();
    await page.waitForTimeout(2000);





    //Brand Assets Page
    await BrandAssets.navigateToBrandAssetsPage();
    await page.waitForTimeout(2000);
    await BrandAssets.navigateToBrandFolderBrandAssets();
    await page.waitForTimeout(2000);
    //await BrandAssets.searchBrandAssets('chamodhi');
    //await page.waitForTimeout(2000);
    await BrandAssets.createBrandAssetsFolder();
    await page.waitForTimeout(2000);
    await BrandAssets.searchCreatedFilterBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.uploadFilesBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.previewFilesBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.downloadFilesBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.shareFilesBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.addToFavoritesBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.deleteMyListFolderBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.navigateToBrandFolderBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.tagFilesBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.renameFilesBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.deleteFilesBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.navigateBackBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.renameFoldersBrandAssets();
    await page.waitForTimeout(2000);
    await BrandAssets.deleteFoldersBrandAssets();
    await page.waitForTimeout(2000);


    //Training Page
    await Training.navigateToTrainingPage();
    await page.waitForTimeout(2000);
    await Training.navigateToBrandFolderTraining();
    await page.waitForTimeout(2000);
    //await Training.searchTraining('chamodhi');
    //await page.waitForTimeout(2000);
    await Training.createTrainingFolder();
    await page.waitForTimeout(2000);
    await Training.searchCreatedFilterTraining();
    await page.waitForTimeout(2000);
    await Training.uploadFilesTraining();
    await page.waitForTimeout(2000);
    await Training.previewFilesTraining();
    await page.waitForTimeout(2000);
    await Training.downloadFilesTraining();
    await page.waitForTimeout(2000);
    await Training.shareFilesTraining();
    await page.waitForTimeout(2000);
    await Training.addToFavoritesTraining();
    await page.waitForTimeout(2000);
    await Training.deleteMyListFolderTraining();
    await page.waitForTimeout(2000);
    await Training.navigateToBrandFolderTraining();
    await page.waitForTimeout(2000);
    await Training.tagFilesTraining();
    await page.waitForTimeout(2000);
    await Training.renameFilesTraining();
    await page.waitForTimeout(2000);
    await Training.deleteFilesTraining();
    await page.waitForTimeout(2000);
    await Training.navigateBackTraining();
    await page.waitForTimeout(2000);
    await Training.renameFoldersTraining();
    await page.waitForTimeout(2000);
    await Training.deleteFoldersTraining();
    await page.waitForTimeout(2000);




    await UserManagement.navigateToUserManagementPage();
    await page.waitForTimeout(2000);

    //Admin User
    await UserManagement.navigateToAdminPage();
    await page.waitForTimeout(2000);
    await UserManagement.searchAdmins('chamodhi');
    await page.waitForTimeout(2000);
    //await UserManagement.reInviteAdmin();
    //await page.waitForTimeout(2000);
    await UserManagement.exportAdmins();
    await page.waitForTimeout(2000);

    //Brand Manager
    await UserManagement.navigateToBrandManagersPage();
    await page.waitForTimeout(2000);
    await UserManagement.createBrandManager();
    await page.waitForTimeout(2000);
    await UserManagement.searchBrandManagers();
    await page.waitForTimeout(2000);
    await UserManagement.editBrandUser();
    await page.waitForTimeout(2000);
    await UserManagement.deleteBrandUser();
    await page.waitForTimeout(2000);
    await UserManagement.removeSearchedBrandManager();
    await page.waitForTimeout(2000);
    await UserManagement.exportBrandUsers();
    await page.waitForTimeout(2000);

    //VPUser
    await UserManagement.navigateToVPUsersPage();
    await page.waitForTimeout(2000);
    await UserManagement.searchVPUsers();
    await page.waitForTimeout(2000);
    await UserManagement.editVPUser();
    await page.waitForTimeout(2000);
    await UserManagement.exportVPUsers();
    await page.waitForTimeout(2000);

    //DSMUser
    await UserManagement.navigateToDSMUsersPage();
    await page.waitForTimeout(2000);
    await UserManagement.searchDSMUsers();
    await page.waitForTimeout(2000);
    await UserManagement.editDSMUser();
    await page.waitForTimeout(2000);
    await UserManagement.exportDSMUsers();
    await page.waitForTimeout(2000);

    //Dealer
    await UserManagement.navigateToDealersPage();
    await page.waitForTimeout(2000);
    await UserManagement.searchDealers();
    await page.waitForTimeout(2000);
    await UserManagement.navigateToDealerDetailsPage();
    await page.waitForTimeout(2000);
    await UserManagement.exportDealers();
    await page.waitForTimeout(2000);



    //DealerUsers
    //await UserManagement.navigateToUserManagementPage();
    //await page.waitForTimeout(2000);
    await UserManagement.navigateToDealerUsersPage();
    await page.waitForTimeout(2000);


    await UserManagement.createDealerUser();
    await page.waitForTimeout(2000);
    await UserManagement.searchDealerUsers();
    await page.waitForTimeout(2000);
    await UserManagement.addDealeraccount();
    await page.waitForTimeout(2000);
    await UserManagement.expandDelaerUser();
    await page.waitForTimeout(2000);
    await UserManagement.editDealerUser();
    await page.waitForTimeout(2000);
    await UserManagement.deleteDealerAccount();
    await page.waitForTimeout(2000);
    await UserManagement.deleteDealerUser();
    await page.waitForTimeout(2000);


    //Markting Users
    await UserManagement.navigateToMarketingUsersPage();
    await page.waitForTimeout(2000);
    await UserManagement.createMarketingUser();
    await page.waitForTimeout(2000);
    await UserManagement.searchMarketingUsers();
    await page.waitForTimeout(2000);
    await UserManagement.editMarktingUsers();
    await page.waitForTimeout(2000);
    await UserManagement.deleteMarketingUsers();
    await page.waitForTimeout(2000);
    await UserManagement.exportMarketingUsers();
    await page.waitForTimeout(2000);



    //await UserManagement.navigateToUserManagementPage();
    //await page.waitForTimeout(2000);
    await UserManagement.navigateToOtherUsersPage();
    await page.waitForTimeout(2000);
    await UserManagement.createOtherUser();
    await page.waitForTimeout(2000);
    await UserManagement.searchOtherUsers();
    await page.waitForTimeout(2000);
    await UserManagement.resetOtherUsers();
    await page.waitForTimeout(2000);
    await UserManagement.editOtherUsers();
    await page.waitForTimeout(2000);
    await UserManagement.deleteOtherUsers();
    await page.waitForTimeout(2000);
    //await UserManagement.exportOtherUsers();
    //await page.waitForTimeout(2000);
    *
    /


    // await UserManagement.navigateToUserManagementPage();
    //await page.waitForTimeout(2000);
    await Maintenance.navigateToMaintenancePage();
    await page.waitForTimeout(2000);
    await Maintenance.createNewStory();
    await page.waitForTimeout(2000);
    await Maintenance.editStory();
    await page.waitForTimeout(5000);
    await Maintenance.enableToStoryToggle();
    await page.waitForTimeout(5000);
    await Maintenance.deleteStory();
    await page.waitForTimeout(3000);



    //price sheet
    //await Maintenance.navigateToMaintenancePage();
    //await page.waitForTimeout(2000);
    await PriceSheet.navigateToPriceSheetPage();
    await page.waitForTimeout(2000);
    await PriceSheet.uploadPriceSheet();
    await page.waitForTimeout(2000);
    //await PriceSheet.navigateToPriceSheetFolder();
    //await page.waitForTimeout(2000);



});