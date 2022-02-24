const {Given, When, Then} = require("cucumber");

Given(/^given sanity$/, function () {
    console.log("given sanity")
});

When(/^when sanity$/, function () {
    console.log("when sanity")
});

Then(/^then sanity$/, function () {
    console.log("then sanity")
});