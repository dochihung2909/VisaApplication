import {test, expect, Browser, Page, webkit, chromium, firefox } from '@playwright/test' 

test('newzealand test', async () => {
    const browser = await chromium.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://onlineservices.immigration.govt.nz/?WHS')
    // Select the login button 
    await page.locator('[name="username"]').fill('username') //change fill('username') by your real username
    await page.locator('[name="password"]').fill('password') //change fill('password') by your real password
    await page.locator('xpath=/html/body/div/form/div/div[3]/div/div[2]/div[3]/input').click()
    await page.pause() 
})