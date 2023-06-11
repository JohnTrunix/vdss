import ApexCharts from "apexcharts";
import { s1Data } from "../data/03_exports/s1Data";

// ------------------- Data Preparation -------------------
var colors = new Array(s1Data.length - 1).fill("#93B7BE");
colors.push("#C8553D");

var data2018 = s1Data.map((x) => {
    return {
        x: x.country,
        y: x["2018"],
        color: colors.shift(),
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
        },
        yaxis: {
            lines: {
                show: false,
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
        min: 0,
        max: 100,
        tickAmount: 10,
        labels: {
            formatter: function (val) {
                return val + "%";
            },
        },
        title: {
            text: "Ratio of Homeownership (%)",
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
