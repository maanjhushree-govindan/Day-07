import test, { chromium } from "@playwright/test";

//using page fixtures
test(`Dropddown`, async ({page}) => {
    await page.goto("https://leafground.com/select.xhtml");
    
    const toolUICount = await page.locator(".ui-selectonemenu").count();
    console.log(toolUICount);
    const toolUTValues = await page.locator(".ui-selectonemenu").filter({hasText:`Select Tool`}).innerText();
    console.log(toolUTValues);
    await page.selectOption(".ui-selectonemenu",  {index:1});

        for(let i=1; i<=3; i++){
        await page.locator("//span[contains(@class,'ui-button-icon-primary ui-icon')]").click();
            if (i===1){
                await page.locator("//li[@data-item-label='Playwright']").click();
                i+1;
            }
            else if (i===2){
                await page.locator("//li[@data-item-label='Selenium WebDriver']").click();
                i+1;
            }
            else{
                await page.locator("//li[@data-item-value='PostMan']").click();
                i+1;
            }

        }
    
    await page.locator("//label[text()='Select Country']").click();
    const countCountry = await page.locator("//label[contains(@class,'ui-selectonemenu-label ui-inputfield')]").count();
    console.log(countCountry);
    await page.locator("(//li[contains(@class,'ui-selectonemenu-item ui-selectonemenu-list-item')]/following-sibling::li)[3]").click();
    await page.waitForTimeout(1000);
    
    await page.locator("//label[text()='Select City']").click();
    await page.locator("(//ul[@id='j_idt87:city_items']//li)[3]").click();
    await page.waitForTimeout(1000);

    await page.locator("(//div[contains(@class,'ui-selectonemenu ui-widget')]//label)[3]").click();
    await page.locator("//li[text()='Tamil']").click();
    await page.waitForTimeout(1000);

    for(let j=1; j<=2;j++){
        await page.locator("//div[@id='j_idt87:value']//label[1]").click();
        if (j==1){
            await page.locator("(//ul[@id='j_idt87:value_items']//li)[3]").click();
            j++;
        }
        else {
            await page.locator("(//ul[@id='j_idt87:value_items']//li)[2]").click();
        }
    }

    page.close();
    
    
});