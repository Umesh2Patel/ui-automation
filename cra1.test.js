
describe('Protractor Demo App', function() {
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



    it('should have a title', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://KHUNTU-10W.analytics.moodys.net:4200/cra');
        title = browser.getTitle();
        expect(title).toBe('Capital Risk Analyzer');
        // expect(browser.getTitle()).toEqual('Capital Risk Analyzer');
        expect(title).not.toEqual('Risk and Finance Analytics');
    });

    it('login to app', async function() {
        browser.wait(until.presenceOf(userName), 10000, 'Element taking too long to appear in the DOM');
        await userName.sendKeys('rowena_r');
        await password.sendKeys('Password123!');
        await loginNowBtn.click();
        expect(browser.getTitle()).toEqual('Risk and Finance Analytics');
    });

    it('hold the page', function() {
        browser.sleep(2000);
        expect(browser.getTitle()).toEqual('Capital Risk Analyzer');
    });

    it('Create Analysis', function() {
        browser.sleep(2000);
        //createNewAnalysis
        browser.wait(until.presenceOf(createNewAnalysis), 50000, 'Element taking too long to appear in the DOM');
        createNewAnalysis.click();
        browser.wait(until.presenceOf(inputAnalysisName), 30000, 'Element taking too long to appear in the DOM');
        inputAnalysisName.sendKeys('Test Analysis');

        expect(browser.getTitle()).toEqual('Capital Risk Analyzer');
    });

    it('hold the page', function() {
        browser.sleep(2000);
        expect(browser.getTitle()).toEqual('Capital Risk Analyzer');
    });
});
