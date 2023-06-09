"use strict";


// add button function

function detect_jq() {
    if (typeof jQuery == 'undefined') {
        console.log("jQuery not detected");
        return false;
    } else {
        console.log("jQuery detected");
        return true;
    }
}

// test jquery is loaded
async function testJquery() {
    let a = await detect_jq();
    console.log(a);
}

function get_settings_from_storage() {
    chrome.storage.local.get(null).then(result => { 
        console.log(result);
        console.log(result.fontColor);
        // first should get the settings from chrome storage
        // then add the settings to the page
        // set font color
        $("#fontColor").attr("placeholder", result.fontColor);

        $('#font_name').attr("value", result.font_name);

        // set global mode
        $("#mode_switch").attr("checked", () => {
            console.log("current mode is " + result.mode);
            return result.mode == "dark" ? true : false;
        });
        $("#page_margin").attr("value", result.page_margin);
        $("#font_size").attr("value", result.font_size);
    });
}

function set_listen_events() {
    $("#settings").on("change", "#fontColor", () => {
        console.log("input event detected");
        let color = $("#fontColor").val();
        console.log(color);
        chrome.storage.local.set({fontColor: color});
    });
    $('#settings').on("change", "#mode_switch", () => {
        if ($("#mode_switch").is(":checked")) {
            console.log("checked.");
            chrome.storage.local.set({mode: "dark"});
        } else {
            console.log("unchecked.");
            chrome.storage.local.set({mode: "light"});
        }
        
    });
    $("#settings").on("change", "#font_name", () => {
        let font = $("#font_name").val();
        console.log(font);
        chrome.storage.local.set({font_name: font});
    });
    $("#settings").on("change", "#page_margin", () => {
        chrome.storage.local.set({ page_margin: `${$("#page_margin").val()}px` });
    });
    $("#settings").on("change", "#font_size", () => {
        chrome.storage.local.set({ font_size: `${$("#font_size").val()}px` });
    });
}



 // init settings
$(document).ready(function () {
    console.log("web page is load ready!");
    get_settings_from_storage();
    set_listen_events();
    
});

// lisetn settings change
chrome.storage.onChanged.addListener(get_settings_from_storage);

