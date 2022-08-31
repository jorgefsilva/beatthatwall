// ==UserScript==
// @name         BeatThatWall
// @namespace    jayass
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/jorgefsilva/beatthatwall/main/main.tampermonkey.js
// @description  Beat any paywall with just a click!
// @author       Jorge Silva
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    let iframe = document.createElement('iframe');
    iframe.src = "https://cfworker-beatthatwall.jayass.workers.dev/?url=" + location.href;
    iframe.style.cssText = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;";

    let body = document.createElement('body');
    let html = document.createElement('html');

    body.appendChild(iframe);
    html.appendChild(body);

    document.open();
    document.write(html.outerHTML);
    document.close();
})();