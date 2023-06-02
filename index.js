// ------------------------------- Imports -------------------------------
import { s1Chart } from "./js/s1";
import { s2Chart } from "./js/s2";
import { s3Chart } from "./js/s3";
import { s4Chart } from "./js/s4";
import { s5Chart } from "./js/s5";
import { s6Chart } from "./js/s6";

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
    slidesNavigation: true,
    slidesNavPosition: "bottom",
    controlArrowsHTML: [
        '<svg xmlns="http://www.w3.org/2000/svg"  width="64" height="64" viewBox="0 0 24 24" stroke-width="1.75" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 6l-6 6l6 6"></path></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg"  width="64" height="64" viewBox="0 0 24 24" stroke-width="1.75" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></svg>',
    ],

    anchors: [
        "intro",
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "recap",
        "end",
    ],
    navigationTooltips: [
        "Intro",
        "Swiss Homeownership",
        "Average House Prices",
        "House Prices",
        "Proportion of Homes",
        "Construction Costs",
        "Taxes",
        "Affordability Calculations",
        "Recap",
        "References",
    ],

    // Design
    verticalCentered: true,
    fitToSection: true,

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

// ------------------------------- Chart init/handling -------------------------------
// render all charts on load
s1Chart.render();
s2Chart.render();
s3Chart.render();
s4Chart.render();
s5Chart.render();
s6Chart.render();

//chart animation restart
function restartAnimation(chart) {
    const chartOptions = {
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
    };
    chart.updateOptions(chartOptions, true, true, true);
}

// render chart on scroll to site handler
function renderChart(origin, destination) {
    if (destination.anchor == "s1") {
        restartAnimation(s1Chart);
    } else if (destination.anchor == "s2") {
        restartAnimation(s2Chart);
    } else if (destination.anchor == "s3") {
        restartAnimation(s3Chart);
    } else if (destination.anchor == "s4") {
        restartAnimation(s4Chart);
    } else if (destination.anchor == "s5") {
        restartAnimation(s5Chart);
    } else if (destination.anchor == "s6") {
        restartAnimation(s6Chart);
    }
}
