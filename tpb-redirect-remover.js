// ==UserScript==
// @name         TPB Redirect Remover
// @namespace    https://github.com/jomut9/tpb-redirect-remover
// @version      0.01
// @description  try to take over the world!
// @author       jomut9
// @match        *://thepiratebay*.org/?url=*
// ==/UserScript==

(function() {
    'use strict';
    var url = document.URL.split('=');
    if (url[1].includes('thepiratebay')){
        location.replace(url[1]);
    }
})();
