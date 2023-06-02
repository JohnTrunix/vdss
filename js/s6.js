import ApexCharts from "apexcharts";
import { s6Data } from "../data/s6Data.js";
import { s6Tooltip } from "./tooltip.js";

// ------------------- Data Preparation -------------------
var income_tax = s6Data.map((x) => x.income_tax);
var profit_tax = s6Data.map((x) => x.profit_tax);
var wealth_tax = s6Data.map((x) => x.wealth_tax);

// ------------------- Chart Preparation -------------------
var colors = ["#588B8B", "#C8553D", "#8b8bae"];
var options = {
    chart: {
        type: "bar",
        height: "100%",
        width: "100%",
        toolbar: {
            show: true,
        },
    },
    colors: colors,
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "80%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    series: [
        {
            name: "Income Tax (%)",
            data: income_tax,
        },
        {
            name: "Profit Tax (%)",
            data: profit_tax,
        },
        {
            name: "Wealth Tax (‰)",
            data: wealth_tax,
        },
    ],
    xaxis: {
        categories: s6Data.map((x) => x.region),
        labels: {
            rotate: 0,
            hideOverlappingLabels: false,
            trim: true,
        },
    },
    yaxis: [
        {
            seriesName: "Income Tax",
            labels: {
                formatter: function (val) {
                    return val.toFixed(0) + "%";
                },
            },
            min: 0,
            max: 45,
            tickAmount: 9,
        },
        {
            seriesName: "Income Tax",
            show: false,
            labels: {
                formatter: function (val) {
                    return val.toFixed(0) + "%";
                },
            },
            min: 0,
            max: 45,
            tickAmount: 9,
        },
        {
            seriesName: "Wealth Tax",
            show: false,
            labels: {
                formatter: function (val) {
                    return val.toFixed(0) + "‰";
                },
            },
            min: 0,
            max: 45,
            tickAmount: 9,
        },
    ],
    legend: {
        position: "top",
        horizontalAlign: "center",
    },
};

// ------------------- Chart Generation -------------------
export var s6Chart = new ApexCharts(
    document.querySelector("#s6-chart"),
    options
);
