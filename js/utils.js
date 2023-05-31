// ----------------------- Language Selection Feedback -----------------------
function changeLanguage() {
    var selectBox = document.getElementById("language-select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (selectedValue != "en") {
        window.alert(
            `Sorry, [ ${selectedValue} ] is currently not implemented. \nWe are working on other language implementations!`
        );
        selectBox.value = "en";
    }
}
// ----------------------- Google Analytics Cookie Consent -----------------------
// set cookie value [true, false, notSet]
var trackingCookie = "notSet";

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

function loadGoogleAnalytics() {
    if (trackingCookie === "true") {
        gtag("js", new Date());
        gtag("config", "G-MZ7S5XNTNR", {
            cookie_flags: "SameSite=None;secure",
        });
    }
}

//custom pageView tracking
function sendPageView(pageTitle) {
    if (trackingCookie === "true") {
        gtag("event", "slide_view", {
            page: document.location.href,
            title: pageTitle,
        });
    }
}
