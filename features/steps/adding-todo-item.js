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
    //assert.strictEqual(elementText, "", `Expected "${selector}" to "" but had "${elementText}" instead`);
});

When(/^I write "([^"]*)" to (.*) and click to (.*)$/, async function (arr, txt, btn) {

    txtSelector = "#addTxt"
    btnSelector = "#addBtn"
    mainSelector = "#ToDoListMain"
    await waitForSelector.call(this, txtSelector)
    await waitForSelector.call(this, btnSelector)

    await clickElement.call(this,txtSelector)

    await this.page.$eval(mainSelector, async (el, arr,txtSelector,btnSelector) => {

        const txt = el.querySelector(txtSelector)
        const btn = el.querySelector(btnSelector)

        txt.innerText = arr
        await btn.click()

        },
        arr,txtSelector,btnSelector);

    await clickElement.call(this,btnSelector)

});
Then(/^I should see "([^"]*)" item in ToDo list$/,async function (arr) {
    const selector = '#todolist ul'
    await waitForSelector.call(this, selector)
    const isIncludes = await this.page.$$eval(selector,
        (items, arr) => {
            const isIncludes = items.includes(arr)
            return !!isIncludes
        },
        arr);
    assert.strictEqual(isIncludes, true)
});