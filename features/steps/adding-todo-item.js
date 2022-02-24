const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const waitForSelector = require("../support/action/waitForSelector")
const {strict: assert} = require("assert");

Given(/^Empty ToDo list$/, async function () {
    await openUrl.call(this, "http://localhost:8080/")
    const selector = '#todolist'
    await waitForSelector.call(this, selector)
    const elementText = await this.page.$eval(selector, el => el.textContent);
    assert.strictEqual(elementText, "", `Expected "${selector}" to "" but had "${elementText}" instead`);});

When(/^I write "([^"]*)" to (.*) and click to (.*)$/, function (arr,txt,btn) {

});
Then(/^I should see "([^"]*)" item in ToDo list$/, function (arr) {

});