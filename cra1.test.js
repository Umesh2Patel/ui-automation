
describe('Jest-Puppeteer Demo App', function() {
    var userName = element(by.id('username'));
    var password = element(by.id('password'));
    var loginNowBtn = element(by.id('login-submit'));
    var until = protractor.ExpectedConditions;
    var createNewAnalysis = element(by.id('newAnalysisLP'));
    var inputAnalysisName = element(by.id('name'));
    var inputDes = element(by.id('inputAnalysisDesc'));
    var inputDes = element(by.id('inputAnalysisDesc'));
    var asOfDate = element(by.id('asOfDate'));
    var forecastHorizon = element(by.id('forecastHorizon'));
    var nextBtn = element(by.id('goToAnalysisRuns'));
    var saveBtn = element(by.id('saveAnalysis'));
    var title;

    beforeAll(async () => {
        await page.goto('https://qa.rafa.moodysanalytics.net/cra');
    });

    it('should have a title', async function() {
        // page.get('http://KHUNTU-10W.analytics.moodys.net:4200/cra');
        await title = page.title();
        await expect(title).toBe('Capital Risk Analyzer');
        // expect(page.getTitle()).toEqual('Capital Risk Analyzer');
        expect(title).not.toEqual('Risk and Finance Analytics');
    });

    it('login to app', async function() {
        page.wait(until.presenceOf(userName), 10000, 'Element taking too long to appear in the DOM');
        await userName.sendKeys('rowena_r');
        await password.sendKeys('Password123!');
        await loginNowBtn.click();
        expect(page.getTitle()).toEqual('Risk and Finance Analytics');
    });

    it('hold the page', function() {
        page.sleep(2000);
        expect(page.getTitle()).toEqual('Capital Risk Analyzer');
    });

    it('Create Analysis', function() {
        page.sleep(2000);
        //createNewAnalysis
        page.wait(until.presenceOf(createNewAnalysis), 50000, 'Element taking too long to appear in the DOM');
        createNewAnalysis.click();
        page.wait(until.presenceOf(inputAnalysisName), 30000, 'Element taking too long to appear in the DOM');
        inputAnalysisName.sendKeys('Test Analysis');

        expect(page.getTitle()).toEqual('Capital Risk Analyzer');
    });

    it('hold the page', function() {
        page.sleep(2000);
        expect(page.getTitle()).toEqual('Capital Risk Analyzer');
    });
});
