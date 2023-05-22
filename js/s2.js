import ApexCharts from "apexcharts";
import { s2Data } from "../data/s2Data.js";
import { pipe } from "./tooltip.js";

// ------------------- Data Preparation -------------------

// ------------------- Chart Preparation -------------------

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
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
    },
    series: [
        {
            name: "Average Square Meter Price",
            data: s2Data.map((x) => {
                return {
                    x: x.Country,
                    y: x.Average,
                    fillColor: x.color,
                };
            }),
        },
    ],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 4,
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        labels: {
            rotate: -90,
        },
    },
    yaxis: {
        reversed: false,
        labels: {
            formatter: function (val) {
                return pipe(val) + " CHF";
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
