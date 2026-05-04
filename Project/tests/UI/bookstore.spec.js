const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');
const BookStorePage = require('../../pages/bookStorePage');
const { writeToFile } = require('../../utils/fileUtils');

test('Book Store Flow with POM', async ({ page }) => {
    // 1. Navigate
    await page.goto('https://demoqa.com');
    await page.click('text=Book Store Application');
    await page.click('text=Login');

    // 2. Login
    const loginPage = new LoginPage(page);
    await loginPage.login('NagarajNaik', 'NagarajNaik@2026');

     await page.screenshot({
        path: 'screenshots/login.png',
        fullPage: true
    });

    // 3. Stability Fix: Wait for the site to process the login session
  await expect(page.locator('#userName-value')).toBeVisible();
 
    await page.goto('https://demoqa.com/profile'); 
    
    // 4. Validate login
    const userNameLocator = page.locator('#userName-value');
    await expect(userNameLocator).toBeVisible({ timeout: 10000 });
    await expect(userNameLocator).toHaveText('NagarajNaik');

    // 5. Go to Book Store
    await page.goto('https://demoqa.com/books');


    // Search book
const bookPage = new BookStorePage(page);

// Fill search (this itself triggers filtering)
await page.locator('#searchBox').fill('Learning JavaScript Design Patterns');


await page.screenshot({
        path: 'screenshots/search-result.png',
        fullPage: true
    });
// ✅ Wait for correct result using stable locator (table)
await expect(
    page.locator('tbody tr td:nth-child(2) a')
).toHaveText('Learning JavaScript Design Patterns', { timeout: 15000 });


    // Get book details
    const details = await bookPage.getBookDetails();
    
    // Write to file
    writeToFile(`Title: ${details.title}\nAuthor: ${details.author}\nPublisher: ${details.publisher}`);



 // 9. Logout
    await page.click('button:has-text("Log out")');

      await page.screenshot({
        path: 'screenshots/logout.png',
        fullPage: true
    });
});