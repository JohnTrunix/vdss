function changeLanguage(){var e=document.getElementById("language-select"),o=e.options[e.selectedIndex].value;"en"!=o&&(window.alert(`Sorry, [ ${o} ] is currently not implemented. \nWe are working on other language implementations!`),e.value="en")}var trackingCookie="notSet",siteLoadEventListner=window.addEventListener("load",(function(){handleCookie(trackingCookie=getCookieValue("vdss_allowCookies"))}));function handleCookie(e){"true"===e||"false"===e?(document.getElementById("cookie").style.display="none",setScroll(!0),loadGoogleAnalytics()):(document.getElementById("cookie").style.display="block",setScroll(!1))}function getCookieValue(e){for(var o=e+"=",t=decodeURIComponent(document.cookie).split(";"),n=0;n<t.length;n++){for(var i=t[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(o))return i.substring(o.length,i.length)}return"notSet"}function acceptCookies(e){setCookie("vdss_allowCookies",1==e?"true":"false",365),document.getElementById("cookie").style.display="none",setScroll(!0)}function changeCookie(){document.getElementById("cookie").style.display="block",setScroll(!1)}function setCookie(e,o,t){var n=new Date;n.setTime(n.getTime()+31104e4*t);var i="expires="+n.toUTCString();document.cookie=e+"="+o+";"+i+";path=/;SameSite=Lax",trackingCookie=o,loadGoogleAnalytics()}function setScroll(e){0==e?fullpage_api.setAllowScrolling(!1):fullpage_api.setAllowScrolling(!0)}function gtag(){dataLayer.push(arguments)}function loadGoogleAnalytics(){"true"===trackingCookie&&(gtag("js",new Date),gtag("config","G-MZ7S5XNTNR",{cookie_flags:"SameSite=None;secure"}))}function sendPageView(e){"true"===trackingCookie&&gtag("event","slide_view",{page:document.location.href,title:e})}window.dataLayer=window.dataLayer||[];
//# sourceMappingURL=index.6d9f98d2.js.map