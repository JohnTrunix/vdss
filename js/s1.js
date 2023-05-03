import { test_var_headers, test_var } from "../data/testfile.js";

// ------------------- Data Preparation -------------------
var easter_swiss = test_var.filter((item) => item[4] == "Eastern Switzerland");
var espace_midland = test_var.filter((item) => item[4] == "Espace Midland");
var northwest_swiss = test_var.filter(
    (item) => item[4] == "Northwestern Switzerland"
);
var lake_geneva = test_var.filter((item) => item[4] == "Lake Geneva Region");
var central_swiss = test_var.filter((item) => item[4] == "Central Switzerland");
var ticino = test_var.filter((item) => item[4] == "Ticino");
var zurich = test_var.filter((item) => item[4] == "Zurich");

// ------------------- Chart Preparation -------------------
var options = {
    chart: {
        type: "scatter",
        height: "100%",
        width: "100%",
        toolbar: {
            show: true,
        },
    },
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true,
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
    },
    series: [
        {
            name: "Eastern Switzerland",
            data: easter_swiss.map((x) => [
                x[3],
                ((x[2] / x[1]) * 100).toFixed(2),
            ]),
        },
        {
            name: "Espace Midland",
            data: espace_midland.map((x) => [
                x[3],
                ((x[2] / x[1]) * 100).toFixed(2),
            ]),
        },
        {
            name: "Northwestern Switzerland",
            data: northwest_swiss.map((x) => [
                x[3],
                ((x[2] / x[1]) * 100).toFixed(2),
            ]),
        },
        {
            name: "Lake Geneva Region",
            data: lake_geneva.map((x) => [
                x[3],
                ((x[2] / x[1]) * 100).toFixed(2),
            ]),
        },
        {
            name: "Central Switzerland",
            data: central_swiss.map((x) => [
                x[3],
                ((x[2] / x[1]) * 100).toFixed(2),
            ]),
        },
        {
            name: "Ticino",
            data: ticino.map((x) => [x[3], ((x[2] / x[1]) * 100).toFixed(2)]),
        },
        {
            name: "Zurich",
            data: zurich.map((x) => [x[3], ((x[2] / x[1]) * 100).toFixed(2)]),
        },
    ],
    yaxis: {
        min: 30,
        max: 80,
        tickAmount: 5,
    },
    xaxis: {
        min: 1600,
        max: 1580000,
        tickAmount: 10,
    },
    legend: {
        position: "right",
        horizontalAlign: "center",
        floating: true,
        offsetY: 10,
        offsetX: 5,
    },
    tooltip: {
        enabled: true,
        x: {
            show: true,
            formatter: (val) => {
                return val + " Inhabitants";
            },
        },
        y: {
            show: true,
            formatter: function (val) {
                return val + "%";
            },
        },
    },
};

// ------------------- Chart Generation -------------------
var chart = new ApexCharts(document.querySelector("#s1-chart"), options);
chart.render();
