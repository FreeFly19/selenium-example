const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const client = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

client.get('https://www.google.com/');

var o = {};
if (Math.random()>0.5) {
    o.hello = function (a,b) {};
} else {
    o.hello = 5;
}




client.findElement(By.name('q')).sendKeys('webdriver');

client.findElement(By.name('btnK')).click();

client.wait(until.titleIs('webdriver - Пошук Google'), 1);

client.getTitle().then(function (title) {
    console.log(title);
});

client.quit();
