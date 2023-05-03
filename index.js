// ------------------------------- VARIABLES -------------------------------
var scrollCountTrigger = 6; //number of times the user has to scroll to go to the next section
var scrollCount = 0; //number of times the user has to scroll to go to the next section

// --------------------------- FULLPAGE.JS Init ----------------------------
new fullpage("#fullpage", {
    licenseKey: "gplv3-license",

    // Accessibility
    scrollingSpeed: 700,
    autoScrolling: true,
    keyboardScrolling: true,
    animateAnchor: false,
    lockAnchors: false,
    recordHistory: true,
    scrollBar: false,

    navigation: true,
    navigationPosition: "right",
    anchors: ["intro", "s1", "s2", "s3", "s4", "s5", "recap", "end"],
    navigationTooltips: [
        "Intro",
        "Section 1",
        "Section 2",
        "Section 3",
        "Section 4",
        "Section 5",
        "Recap",
        "End",
    ],

    // Design
    verticalCentered: true,
    fitToSection: true,
    /*sectionsColor: [
            "#f2f2f2",
            "#4BBFC3",
            "#7BAABE",
            "whitesmoke",
            "#000",
        ],*/

    // Custom selectors
    sectionSelector: ".section",
    slideSelector: ".slide",

    // Credits disables because of custom reference on last section
    credits: {
        enabled: false,
    },

    beforeLeave: function (origin, destination, direction) {
        return true;
    },
});

// ------------------------------- FUNCTIONS -------------------------------

// Language Selection Feedback
function changeLanguage() {
    var selectBox = document.getElementById("language-select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (selectedValue != "en") {
        window.alert(
            `Sorry, [${selectedValue}] is currently not implemented. \nWe are working on other language implementations!`
        );
        selectBox.value = "en";
    }
}
