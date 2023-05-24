import ApexCharts from "apexcharts";
import { s6Tooltip } from "./tooltip.js";

// ------------------- Data Preparation -------------------
const data = [
    { x: "Zurich", y: 550, i: "info" },
    { x: "Zug", y: 149, i: "info" },
    { x: "Geneva", y: 184, i: "info" },
    { x: "Lucerne", y: 190, i: "info" },
    { x: "Argau", y: 84, i: "info" },
    { x: "Thurgau", y: 31, i: "info" },
    { x: "Schaffhausen", y: 70, i: "info" },
    { x: "Ticino", y: 300, i: "info" },
    { x: "Appenzell", y: 44, i: "info" },
    { x: "Basel", y: 68, i: "info" },
    { x: "Bern", y: 28, i: "info" },
    { x: "Wallis", y: 19, i: "info" },
    { x: "Solothurn", y: 290, i: "info" },
];

//sort data by y value (descending)
var sortedData = data.sort(function (a, b) {
    return b.y - a.y;
});

// ------------------- Chart Preparation -------------------
var options = {
    chart: {
        type: "treemap",
        height: "100%",
        width: "100%",
    },
    series: [
        {
            data: sortedData,
        },
    ],
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data =
                w.globals.initialSeries[seriesIndex].data[dataPointIndex];

            return s6Tooltip(data);
        },
    },
};

// ------------------- Chart Generation -------------------
export var s6Chart = new ApexCharts(
    document.querySelector("#s6-chart"),
    options
);
