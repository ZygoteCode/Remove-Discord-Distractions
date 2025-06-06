// ==UserScript==
// @name         Discord Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Remove all the Discord distractions to get concentrated on what's really important
// @author       ZygoteCode
// @match        https://www.discord.com/*
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @updateURL    https://github.com/ZygoteCode/Remove-Discord-Distractions/raw/main/DiscordRemoveDistractions.user.js
// @downloadURL  https://github.com/ZygoteCode/Remove-Discord-Distractions/raw/main/DiscordRemoveDistractions.user.js
// @grant        none
// ==/UserScript==

(function()
{
    const head = document.head || document.getElementsByTagName('head')[0];
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = ".privateChannelsHeaderContainer_ddcec6,.title_b7d661,.profilePanel__12596,.guilds__2b93a,.searchBar_e4ea2a,.container__5c7e7,.toolbar__88c63,a[href='/store'],a[href='/shop'],a[href='/channels/@me']{display:none!important;visibility:hidden!important;}";
    head.appendChild(styleElement);
})();
