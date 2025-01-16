const {test , expect} = require('@playwright/test');
const login = require('../Locators/login.js');
const testdata = require('../testdata/load_testdata.js')

test ('Login', async ({page}) => {
    
    await page.goto('https://staging-destination.dwellworks.com/Account/Login');

    

    await page.locator(login.email).fill(testdata.Loginpage.email_input);
    await page.locator(login.password).fill(testdata.Loginpage.password_input);
    await page.locator(login.login_button).click();
    await expect(page.locator(login.image)).toBeTruthy();
});