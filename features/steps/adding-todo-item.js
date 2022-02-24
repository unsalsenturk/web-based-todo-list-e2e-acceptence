const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const waitForSelector = require("../support/action/waitForSelector")
const checkContainsText = require("../support/check/checkContainsText")


Given(/^Empty ToDo list$/, async function () {
    await openUrl.call(this, "http://localhost:8080/")
    await waitForSelector.call(this, '#todolist')
    const selector = "#todolist"
    await checkContainsText.call(this, selector, false, "")
});

When(/^I write "([^"]*)" to (.*) and click to (.*)$/, function (arr,txt,btn) {

});
Then(/^I should see "([^"]*)" item in ToDo list$/, function (arr) {

});