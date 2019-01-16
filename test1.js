const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        slowMo: 500,
        devtools: true,
    });
    const page = await browser.newPage();

    await page.goto('https://qa.rafa.moodysanalytics.net/');
    await page.screenshot({ path: 'screenshots/github.png' });

    browser.close();
}

run();