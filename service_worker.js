"use strict";
console.log("service worker is loaded.");

importScripts("js/declarative_net.js");
importScripts("js/settings.js");
importScripts("js/content.js");

chrome.action.onClicked.addListener((tab) => {
    //chrome.scripting.executeScript({
    //    target: {tabId: tab.id},
    //    func:   changebg
    //});
    console.log("clicked");
    //console.warn(addPrint(1, 3));
    getMaxStaticRulesCount();
});

oninstall = () => {
    console.log("this message will show on running service worker");
}


// message exchange test
chrome.bookmarks.onCreated.addListener((id) => {
    console.log(`${id} bookmark created`);
});

chrome.bookmarks.onRemoved.addListener((id) => {
    console.log(`${id} bookmark removed`);
});

chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name === "knockknock");
    port.onMessage.addListener(function(msg) {
      if (msg.joke === "Knock knock") {
        port.postMessage({question: "Who's there?"});
        console.log("message sent");
      }
      else if (msg.answer === "Madame") {
        port.postMessage({question: "Madame who?"});
        console.log(msg.answer);
      }
      else if (msg.answer === "Madame... Bovary") {
        port.postMessage({question: "I don't get it."});
        console.log(msg.answer);
      }
        
    });
  });

