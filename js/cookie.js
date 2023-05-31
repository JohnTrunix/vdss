// check if cookie is set in cache
var siteLoadEventListner = window.addEventListener("load", function () {
    trackingCookie = getCookieValue("vdss_allowCookies");
    handleCookie(trackingCookie);
});

// event listener for cookie accept/deny buttons
var acceptButton = document.getElementById("cookie-accept-btn");
acceptButton.addEventListener("click", function () {
    acceptCookies(true);
});

var declineButton = document.getElementById("cookie-decline-btn");
declineButton.addEventListener("click", function () {
    acceptCookies(false);
});

// handle cookie value if already set
function handleCookie(trackingCookie) {
    if (trackingCookie === "true" || trackingCookie === "false") {
        document.getElementById("cookie").style.display = "none";
        setScroll(true);
        loadGoogleAnalytics();
    } else {
        document.getElementById("cookie").style.display = "block";
        setScroll(false);
    }
}

// get cookie value from cache
function getCookieValue(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "notSet";
}

// button trigger for accepting/denying cookies
function acceptCookies(accept) {
    if (accept === true) {
        setCookie("vdss_allowCookies", "true", 365);
    } else {
        setCookie("vdss_allowCookies", "false", 365);
    }
    document.getElementById("cookie").style.display = "none";
    setScroll(true);
}

// trigger for changing cookie value
function changeCookie() {
    document.getElementById("cookie").style.display = "block";
    setScroll(false);
}

// set cookie in cache
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 3600);
    var expires = "expires=" + d.toUTCString();
    document.cookie =
        cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
    trackingCookie = cvalue;
    loadGoogleAnalytics();
}

// set scroll access
function setScroll(status) {
    if (status == false) {
        fullpage_api.setAllowScrolling(false);
    } else {
        fullpage_api.setAllowScrolling(true);
    }
}
