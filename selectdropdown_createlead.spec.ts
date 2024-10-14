import test, { chromium } from "@playwright/test";

test(`Create and View created Lead`, async () => {
    const browser = await chromium.launch({ headless: false, channel: "chrome" })

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator("//input[@value='Login']").click();
    await page.locator("//div[@class='crmsfa']").click();
    await page.locator("//a[@href='/crmsfa/control/leadsMain']").click();
    await page.locator("//a[@href='/crmsfa/control/createLeadForm']").click();

    await page.locator("#createLeadForm_companyName").fill("Test Lead Company");
    await page.locator("#createLeadForm_firstName").fill("MGFirstName");
    await page.locator("#createLeadForm_lastName").fill("MGLastname");

    await page.selectOption("#createLeadForm_dataSourceId", {value: "LEAD_DIRECTMAIL"});

    await page.selectOption("#createLeadForm_marketingCampaignId", {label: "Demo Marketing Campaign"});
    const markCount = await page.locator("#createLeadForm_marketingCampaignId>option").count();
    console.log(markCount);
    const markvalues = await page.locator("#createLeadForm_marketingCampaignId").innerText();
    console.log(markvalues);

    await page.selectOption("#createLeadForm_industryEnumId", {index: 5});
    await page.selectOption("#createLeadForm_currencyUomId",{label: "INR - Indian Rupee"});

    await page.locator("#createLeadForm_personalTitle").fill("Ms");
    await page.locator("#createLeadForm_generalProfTitle").fill("MGTitle");
    await page.locator("#createLeadForm_annualRevenue").fill("400000");
    await page.locator("#createLeadForm_departmentName").fill("Test");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("7708246734");

    await page.selectOption("#createLeadForm_generalCountryGeoId", {label: "India"});

    await page.selectOption("#createLeadForm_generalStateProvinceGeoId", {label: "TAMILNADU"});
    const stateCount = await page.locator("#createLeadForm_generalStateProvinceGeoId>option").count();
    console.log(stateCount);
    const stateValues = await page.locator("#createLeadForm_generalStateProvinceGeoId").innerText();
    console.log(stateValues);

    await page.locator("//input[@value='Create Lead']").click();

    await page.waitForTimeout(3000);

    console.log(`Entered Company Name is:` + ` `+ await page.locator('#viewLead_companyName_sp').textContent());
    console.log(`Entered First Name is:` + ` `+ await page.locator('#viewLead_firstName_sp').textContent());
    console.log(`Entered Last Name is:` + ` `+ await page.locator('#viewLead_lastName_sp').textContent());
    console.log(`Status of the record is:`+ ` `+ await page.locator('#viewLead_statusId_sp').textContent());

    await page.waitForTimeout(2000);

    page.close();

    context.close;

    browser.close;

})
