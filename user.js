// ==UserScript==
// @name         Send to xivanalysis
// @namespace    Not yet
// @version      0.1
// @description  Send your fflogs to xivanalysis
// @author       Meyas
// @match        https://*.fflogs.com/reports/*
// @match        https://fflogs.com/reports/*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function () {
    'use strict';
    $('#main-menu').append('<input type="button" value="XIVAnalysis" id="sendtoxivanalysis" class="right visible">')
    $("#sendtoxivanalysis").css("position", "relative").css("top", 10);
    $('#sendtoxivanalysis').click(function(){
        const hash = window.location.href.split('/').pop();
        window.open(`https://xivanalysis.com/find/${hash}`,'_blank');
    });
    // Your code here...
})();