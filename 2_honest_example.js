const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const client = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

client.get('https://www.google.com/')
    .then(function () {
        return client.findElement(By.name('q')).sendKeys('webdriver');
    })
    .then(function () {
        return client.findElement(By.name('btnK')).click();
    })
    .then(function () {
        return client.wait(until.titleIs('webdriver - Пошук Google'), 1000);
    })
    .then(function () {
        return client.getTitle();
    })
    .then(function (title) {
        console.log(title);
    })
    .then(function() {
        client.quit();
    });

