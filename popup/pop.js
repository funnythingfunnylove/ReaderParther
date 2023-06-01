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


$(document).ready(function () {
    console.log("web page is load ready!");
    $( "a" ).click(function( event ) {
 
        $("a").addClass("test");
        if ($("a").hasClass("test")) {
            $('a.test').removeClass("test");
            console.log("remove test class");
        }
 
    });
});