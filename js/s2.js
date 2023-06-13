// ------------------- Imports -------------------
import ApexCharts from "apexcharts";
import { s2Data } from "../data/03_exports/s2Data.js";
import { pipe } from "./tooltip.js";

// ------------------- Chart Preparation -------------------
// generate colors and set first color to red (-> Switzerland)
var colors = new Array(s2Data.length - 1).fill("#93B7BE");
colors.unshift("#C8553D");

// set chart options
var options = {
    chart: {
        type: "bar",
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
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    series: [
        {
            name: "Average price",
            data: s2Data.map((x) => {
                return {
                    x: x.country,
                    y: x.avg_price,
                    fillColor: colors.shift(),
                };
            }),
        },
    ],
    plotOptions: {
        bar: {
            horizontal: true,
            borderRadius: 4,
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        min: 0,
        max: 7500,
        tickAmount: 9,
        labels: {
            formatter: function (val) {
                return (val / 1000).toFixed(1) + "k CHF/m²";
            },
        },
        title: {
            text: "Average price (CHF/m²)",
            offsetX: 0,
            offsetY: 10,
            style: {
                cssClass: "apex-axis-title",
            },
        },
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return pipe(val, "'") + " CHF";
            },
        },
    },
};

// ------------------- Chart Generation -------------------
export var s2Chart = new ApexCharts(
    document.querySelector("#s2-chart"),
    options
);
