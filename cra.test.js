describe('CRA', () => {
    beforeAll(async () => {
        await page.goto('https://qa.rafa.moodysanalytics.net/');
    });

    it('should display "cra" text on page', async () => {
        await expect(page).toMatch('Welcome to Risk & Finance Analytics');
        await expect(page).toMatch('cra');
    });
});