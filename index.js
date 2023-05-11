// ------------------------------- Imports -------------------------------
import { s1Chart } from "./js/s1";
import { s2Chart } from "./js/s2";
import { s3Chart } from "./js/s3";
import { s4Chart } from "./js/s4";
import { s5Chart } from "./js/s5";

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
        renderChart(origin, destination);
        return true;
    },
});

// render all charts on load
s1Chart.render();
s2Chart.render();
s3Chart.render();
s4Chart.render();
s5Chart.render();

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

//chart animation restart
function renderChart(origin, destination) {
    if (destination.anchor == "s1") {
        restartAnimation(s1Chart);
    }
    if (destination.anchor == "s2") {
        restartAnimation(s2Chart);
    }
    if (destination.anchor == "s3") {
        restartAnimation(s3Chart);
    }
    if (destination.anchor == "s4") {
        restartAnimation(s4Chart);
    }
    if (destination.anchor == "s5") {
        restartAnimation(s5Chart);
    }
}

function restartAnimation(chart) {
    chart.updateOptions(
        (newOptions = {
            chart: {
                animations: {
                    enabled: true,
                    easing: "easeinout",
                    speed: 1200,
                    animateGradually: {
                        enabled: true,
                        delay: 200,
                    },
                },
            },
        }),
        (animate = true)
    );
}
