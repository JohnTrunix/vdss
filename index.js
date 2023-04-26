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
    anchors: [
        "intro",
        "section-1",
        "section-2",
        "section-3",
        "section-4",
        "end",
    ],
    navigationTooltips: [
        "Intro",
        "Section 1",
        "Section 2",
        "Section 3",
        "Section 4",
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

    // Credits
    credits: {
        enabled: true,
        label: "Made with fullPage.js",
        position: "right",
    },

    beforeLeave: function (origin, destination, direction) {
        return true;
    },
});

// ------------------------------- FUNCTIONS -------------------------------
