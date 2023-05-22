import ApexCharts from "apexcharts";
import { s1Data } from "../data/s1Data.js";

// ------------------- Data Preparation -------------------
var data2018 = s1Data.map((x) => {
    return {
        x: x.Country,
        y: x["2018"],
        color: x.color,
    };
});

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
            name: "Ratio of Homeownership",
            data: data2018.map((x) => {
                return {
                    x: x.x,
                    y: x.y,
                    fillColor: x.color,
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
        labels: {
            formatter: function (val) {
                return val + "%";
            },
        },
    },

    tooltip: {
        y: {
            formatter: function (val) {
                return val + " %";
            },
        },
    },
};

// ------------------- Chart Generation -------------------
export var s1Chart = new ApexCharts(
    document.querySelector("#s1-chart"),
    options
);
