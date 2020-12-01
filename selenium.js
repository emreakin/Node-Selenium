require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key} = require('selenium-webdriver');

(async function() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().addArguments(['--no-sandbox', '--disable-dev-shm-usage']))
        .build();

    await driver.get('http://www.google.com');
    let element = await driver.findElement(By.name('q'));
    await element.sendKeys('cross browser testing', Key.ENTER);
    await driver.getTitle().then(function(title) {
        console.log("The title is: " + title);
        driver.quit();
    });

})();
