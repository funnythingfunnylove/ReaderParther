"use strict";

console.log('hello from action.js');

function haha () {
    console.log("hello AAA");
}


// this is not working ? why
chrome.action.onClicked.addListener(() => {
    console.log("clicked");
});