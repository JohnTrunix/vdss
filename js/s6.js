import ApexCharts from "apexcharts";
import { s6Data } from "../data/s6Data.js";
import { s6Tooltip } from "./tooltip.js";

// ------------------- Data Preparation -------------------
var sortedData = s6Data.sort((a, b) => b.population - a.population);
sortedData = sortedData.map((x) => {
    return {
        x: x.region,
        y: x.population,
        population_density: x.population_density,
        area_total: x.area_total,
        lang_german: x.lang_german,
        lang_french: x.lang_french,
        lang_italian: x.lang_italian,
        lang_romansh: x.lang_romansh,
        lang_english: x.lang_english,
        income_tax: x.income_tax,
        profit_tax: x.profit_tax,
        wealth_tax: x.wealth_tax,
    };
});

// ------------------- Chart Preparation -------------------
var colors = [
    "#8b8bae",
    "#93B7BE",
    "#C8553D",
    "#F28F3B",
    "#ff9b71",
    "#588B8B",
    "#ffd166",
];
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
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false,
        },
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    colors: colors,
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
