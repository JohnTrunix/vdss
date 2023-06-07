import ApexCharts from "apexcharts";
import { s4Data } from "../data/s4Data.js";
import { pipe, s4Tooltip } from "./tooltip.js";

// ------------------- Data Preparation for each region -------------------
var easter_swiss = s4Data.filter((x) => x.region == "Eastern Switzerland");
var espace_midland = s4Data.filter((x) => x.region == "Espace Midland");
var northwest_swiss = s4Data.filter(
    (x) => x.region == "Northwestern Switzerland"
);
var lake_geneva = s4Data.filter((x) => x.region == "Lake Geneva Region");
var central_swiss = s4Data.filter((x) => x.region == "Central Switzerland");
var ticino = s4Data.filter((x) => x.region == "Ticino");
var zurich = s4Data.filter((x) => x.region == "Zurich");

// ------------------- Chart Preparation -------------------
var colors = [
    "#588B8B",
    "#F28F3B",
    "#C8553D",
    "#93B7BE",
    "#ffd166",
    "#ff9b71",
    "#8b8bae",
];
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
        show: false,
    },
    series: [
        {
            name: "Eastern Switzerland",
            data: easter_swiss.map((x) => {
                return {
                    x: x.inhabitants,
                    y: x.prc_single_home,
                    canton: x.canton,
                    region: x.region,
                    total_buildings: x.buildings_total,
                    single_family_home: x.single_family_home,
                };
            }),
        },
        {
            name: "Espace Midland",
            data: espace_midland.map((x) => {
                return {
                    x: x.inhabitants,
                    y: x.prc_single_home,
                    canton: x.canton,
                    region: x.region,
                    total_buildings: x.buildings_total,
                    single_family_home: x.single_family_home,
                };
            }),
        },
        {
            name: "Northwestern Switzerland",
            data: northwest_swiss.map((x) => {
                return {
                    x: x.inhabitants,
                    y: x.prc_single_home,
                    canton: x.canton,
                    region: x.region,
                    total_buildings: x.buildings_total,
                    single_family_home: x.single_family_home,
                };
            }),
        },
        {
            name: "Lake Geneva Region",
            data: lake_geneva.map((x) => {
                return {
                    x: x.inhabitants,
                    y: x.prc_single_home,
                    canton: x.canton,
                    region: x.region,
                    total_buildings: x.buildings_total,
                    single_family_home: x.single_family_home,
                };
            }),
        },
        {
            name: "Central Switzerland",
            data: central_swiss.map((x) => {
                return {
                    x: x.inhabitants,
                    y: x.prc_single_home,
                    canton: x.canton,
                    region: x.region,
                    total_buildings: x.buildings_total,
                    single_family_home: x.single_family_home,
                };
            }),
        },
        {
            name: "Ticino",
            data: ticino.map((x) => {
                return {
                    x: x.inhabitants,
                    y: x.prc_single_home,
                    canton: x.canton,
                    region: x.region,
                    total_buildings: x.buildings_total,
                    single_family_home: x.single_family_home,
                };
            }),
        },
        {
            name: "Zurich",
            data: zurich.map((x) => {
                return {
                    x: x.inhabitants,
                    y: x.prc_single_home,
                    canton: x.canton,
                    region: x.region,
                    total_buildings: x.buildings_total,
                    single_family_home: x.single_family_home,
                };
            }),
        },
    ],
    markers: {
        size: 14,
        colors: colors,
        shape: "circle",
        hover: {
            size: 30,
        },
    },
    yaxis: {
        title: {
            text: "Single Family Homes (%)",
            offsetX: -10,
            offsetY: 0,
            style: {
                cssClass: "apex-axis-title",
            },
        },
        min: 30,
        max: 80,
        tickAmount: 10,
        labels: {
            formatter: function (val) {
                return val + "%";
            },
        },
        axisBorder: {
            show: true,
        },
        axisTicks: {
            show: true,
        },
    },
    xaxis: {
        title: {
            text: "Number of Inhabitants",
            offsetX: 0,
            offsetY: 10,
            style: {
                cssClass: "apex-axis-title",
            },
        },
        type: "numeric",
        min: 0,
        max: 1600000,
        tickAmount: 10,
        labels: {
            formatter: function (val) {
                return pipe(Math.floor(val / 1000), "'") + "k";
            },
        },
    },
    legend: {
        position: "right",
        horizontalAlign: "center",
        floating: true,
        offsetY: 30,
        offsetX: 10,
        markers: {
            fillColors: colors,
        },
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data =
                w.globals.initialSeries[seriesIndex].data[dataPointIndex];

            return s4Tooltip(data);
        },
    },
};

// ------------------- Chart Generation -------------------
export var s4Chart = new ApexCharts(
    document.querySelector("#s4-chart"),
    options
);
