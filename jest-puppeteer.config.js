// jest-puppeteer.config.js
module.exports = {
    launch: {
        dumpio: true,
        // headless: process.env.HEADLESS !== 'false',
        headless: false,
        slowMo: 250
    },
    browserContext: 'default',
}