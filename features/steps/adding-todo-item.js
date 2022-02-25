const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const waitForSelector = require("../support/action/waitForSelector")
const clickElement = require("../support/action/clickElement")
const {strict: assert} = require("assert");

Given(/^Empty ToDo list$/, async function () {
    await openUrl.call(this, "http://localhost:8080/")
    const selector = '#todolist'
    await waitForSelector.call(this, selector)
    const elementText = await this.page.$eval(selector, el => el.textContent);
    assert.strictEqual(elementText, "", `Expected "${selector}" to "" but had "${elementText}" instead`);
});

When(/^I write "([^"]*)" to (.*) and click to (.*)$/, async function (arr, txt, btn) {

    txtSelector = "#addTxt"
    btnSelector = "#addBtn"
    await waitForSelector.call(this, txtSelector)
    await waitForSelector.call(this, btnSelector)

    const elementText = await this.page.$eval(txtSelector, async (el, arr) => {
            el.value = arr
            el.innerHTML = arr
            return el.textContent
        },
        arr);
    await clickElement.call(this,btnSelector)

});
Then(/^I should see "([^"]*)" item in ToDo list$/, function (arr) {

});