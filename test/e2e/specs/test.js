// For authoring Nightwatch tests, see:
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests': browser => {
        // Automatically uses dev server port from /config.index.js
        // Default: http://localhost:8080
        // See nightwatch.conf.js
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer)
            .waitForElementVisible('#app', 5000)
            .end()
    }
}
