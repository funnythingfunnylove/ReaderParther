"use strict";

function contentRegister(domain_name) {
  // per website register content_scripts
  chrome.scripting
    .registerContentScripts([
      {
        id: domain_name,
        js: [
          "lib/jquery.js",
          "lib/anime.min.js",
          "lib/jquery.animejs.js",
          "js/message_c.js",
          "js/app.js",
          `js/site/${domain_name}.js`,
          `js/site/${domain_name}_theme.js`,
        ],
        css: [`css/${domain_name}.css`],
        persistAcrossSessions: true,
        matches: [`https://*.${domain_name}/*`],
        runAt: "document_end",
      },
    ])
    .then(() => console.log(`registration ${domain_name} complete`))
    .catch((err) => null);
}

function GetAllContentRegisterScripts() {
  chrome.scripting.getRegisteredContentScripts().then((result) => {
    console.log(result);
  });
}
async function getCurrentURL() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(tab);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // !! rewrite to check list of domains
  fetch(chrome.runtime.getURL("rules/site.json"))
    .then((response) => response.json())
    .then((data) => {
      data.sites.some((item) => {
        if (tab.url.includes(item.domain)) {
            contentRegister(item.domain);
        }
      });
    });
});
