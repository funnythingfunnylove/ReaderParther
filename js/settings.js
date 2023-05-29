"use strict";

function setSettings(key, value) {
  chrome.storage.local.set({ [key] : value });
}

function deleteSettings(key) {
  chrome.storage.local.remove(key);
}

function getSettings(key) {
  return chrome.storage.local.get(key);
}

function loadTheme(name) {
    let theme = chrome.runtime.getURL('theme/' + name + '.json');
    fetch(theme)
        .then(response => response.json())
        .then(data => {
            let item = JSON.stringify(data);
            let theme = JSON.parse(item);
            for (let key in theme) {
                setSettings(key, theme[key]);
            }
        })
        .catch(error => console.log(error));
}

function loadSettings() {
    let settings = chrome.runtime.getURL('theme/setting.json');
    fetch(settings)
        .then(response => response.json())
        .then(data => {
            let item = JSON.stringify(data);
            let settings = JSON.parse(item);
            for (let key in settings) {
                console.log('set ' + key + ' ' + settings[key]);
                setSettings(key, settings[key]);
            } 
        })
        .catch(error => console.log(error));
      }

loadSettings();
loadTheme('default');


// debug get all settings values
function PrintAllSettings() {
  chrome.storage.local.get(null).then(result => {
    console.log(result);
  });  
}

PrintAllSettings();