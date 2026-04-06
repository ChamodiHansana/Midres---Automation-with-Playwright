import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { DashboardPage } from '../../pages/dashboard';
import { SpecSheetsPage } from '../../pages/specSheets';

test('Login to the application', async({ page }) => {

    test.setTimeout(120000);

    const Login = new LoginPage(page);
    const Dashboard = new DashboardPage(page);
    const SpecSheets = new SpecSheetsPage(page);

    //Login
    await Login.navigateToLoginPage();
    await page.waitForTimeout(2000);
    await Login.login('chamodhi.h@expernetic.com', 'Test@123');
    await page.waitForTimeout(2000);
    await Login.validateLoginSuccess();
    await page.waitForTimeout(2000);
    await Dashboard.validateDashboard();
    await page.waitForTimeout(2000);


    //Spec Sheets Page Actions

    await SpecSheets.navigateToSpecSheetsPage();
    await page.waitForTimeout(2000);
    await SpecSheets.searchSpecSheets('chamodhi');
    await page.waitForTimeout(2000);
    await SpecSheets.filterSpecSheets();
    await page.waitForTimeout(2000);
    await SpecSheets.navigateToBrandFolders();
    await page.waitForTimeout(2000);
    await SpecSheets.createFolders();
    await page.waitForTimeout(2000);
    await SpecSheets.uploadFiles();
    await page.waitForTimeout(2000);


    await SpecSheets.previewFiles();
    await page.waitForTimeout(2000);
    await SpecSheets.downloadFiles();
    //await page.waitForTimeout(2000);
    await SpecSheets.shareFiles();
    //await page.waitForTimeout(1000);

    await SpecSheets.navigateBack();
    //await page.waitForTimeout(2000);
    await SpecSheets.renameFolders();
    //await page.waitForTimeout(2000);
    await SpecSheets.deleteFolders();
    //await page.waitForTimeout(2000);




});