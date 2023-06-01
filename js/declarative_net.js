"use strict"
console.log('hello from declarative_net.js.')
/* this script main using to identify the current loading webpage and block the content, and load access.

*/

function getMaxStaticRulesCount() {
    chrome.declarativeNetRequest.getAvailableStaticRuleCount(
        (count) => {
            console.log(count);
            console.log(`大概可以创建${count}条规则`);
        });
}

function add_rule(rule) {
    chrome.declarativeNetRequest.updateSessionRules(
        {
            "addRules": [{
                    'id': rule.id,
                    "condition": {
                        "urlFilter" : rule.domain,
                        "resourceTypes" : ["script", "stylesheet"]
                    },
                    "action":  {"type": "block"}
                }],
            "removeRuleIds": [rule.id]
        } 
    )
}

function remove_rule(rule) {
    chrome.declarativeNetRequest.updateSessionRules({"removeRuleIds": [rule.id]});
}

function getAllSessionRules() {
    chrome.declarativeNetRequest.getSessionRules().then(rules => {return rules;});
};

function printAllRules() {
    chrome.declarativeNetRequest.getSessionRules().then(rules => console.log(rules));
}

function loadRules() {
    fetch(chrome.runtime.getURL('rules/site.json')).then(response => response.json()).then(data => {
            data.sites.forEach(site => add_rule(site));
        });
}

function remove_allRules()  {
    let rules = getAllSessionRules();
    rules.forEach(rule => {remove_rule(rule);});
}

loadRules();
