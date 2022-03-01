const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const waitForSelector = require("../support/action/waitForSelector")
const clickElement = require("../support/action/clickElement")
const keyboardPress = require("../support/action/keyboardPress")
const {strict: assert} = require("assert");

Given(/^Empty ToDo list$/, async function () {
    await openUrl.call(this, "http://34.135.153.228")
    const selector = '#todolist'
    await waitForSelector.call(this, selector)
    const elementText = await this.page.$eval(selector, el => el.textContent);
    //assert.strictEqual(elementText, "", `Expected "${selector}" to "" but had "${elementText}" instead`);
});

When(/^I write "([^"]*)" to (.*) and click to (.*)$/, async function (arr, txt, btn) {

    txtSelector = "#addTxt"
    btnSelector = "#addBtn"
    mainSelector = "#ToDoListMain"

    await this.page.focus(txtSelector);
    await this.page.keyboard.type(arr);

    await clickElement.call(this,btnSelector)
    await this.page.waitForTimeout(10 * 1000);

});
Then(/^I should see "([^"]*)" item in ToDo list$/,async function (arr) {
    const selector = '#todolist ul li'
    const isIncludes = await this.page.$$eval(selector,
        (items, arr) => {
            const isIncludes = items.filter(x => x.innerText == arr)
            return isIncludes.length == 1
        },
        arr);
    assert.strictEqual(isIncludes, true)
});