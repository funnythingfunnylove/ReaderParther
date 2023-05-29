"use strict";
/*

    content_scripts --> using for dymatic load contents_scripts for special website.

*/


function contentRegister(domain_name) {
    // per website register content_scripts
    chrome.scripting.registerContentScripts([
    {
        id: domain_name,
        js: ['js/message.js', `js/site/${domain_name}.js`, `js/site/${domain_name}_theme.js`],
        css : [`css/${domain_name}.css`],
        persistAcrossSessions: true,
        matches: [`https://*.${domain_name}/*`],
        runAt: "document_end",
    }])
    .then(() => console.log(`registration ${domain_name} complete`))
    .catch((err) => null);
}


function GetAllContentRegisterScripts() {
    chrome.scripting.getRegisteredContentScripts().then(result => {console.log(result);});
}

async function getCurrentURL() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)  => {
        if(tab.url.includes("nunubook.com")) {
            try{
                contentRegister("nunubook.com");
                
            }
            catch(err) {}
        }
    }    
);






