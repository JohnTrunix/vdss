// ---------- VARIABLES ----------
var scrollCountTrigger = 6; //number of times the user has to scroll to go to the next section
var scrollCount = 0; //number of times the user has to scroll to go to the next section

// ---------- FULLPAGE.JS Init ----------
new fullpage("#fullpage", {
    licenseKey: "gplv3-license",

    // Accessibility
    scrollingSpeed: 0,
    autoScrolling: true,
    keyboardScrolling: true,
    animateAnchor: false,
    lockAnchors: false,
    recordHistory: true,
    scrollBar: false,

    navigation: true,
    navigationPosition: "right",
    anchors: ["intro", "section-2", "end"],
    navigationTooltips: ["Intro", "Section 2", "End"],

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

    beforeLeave: function (origin, destination, direction, trigger) {
        scrollCount++;
        console.log("Trigger Type: " + trigger);
        if (scrollCount >= scrollCountTrigger && trigger == "wheel") {
            scrollCount = 0;
            handleAction(direction, origin, destination);
            return true;
        } else if (trigger != "wheel") {
            return true;
        }
        return false;
    },
});

// ---------- FUNCTIONS ----------

function handleAction(direction, origin, destination) {
    if (origin.anchors == "intro") {
        // get s2 elements
        s2Title = document.getElementById("s2-title");
        s2Content = document.getElementById("s2-content");
    }
}
