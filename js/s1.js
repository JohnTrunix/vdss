import { test_var2 } from "../data/testfile2.js";
import { pipe, s1TooltipTemplate } from "./tooltipTemplate.js";

// ------------------- Data Preparation -------------------
var easter_swiss = test_var2.filter((x) => x.region == "Eastern Switzerland");
var espace_midland = test_var2.filter((x) => x.region == "Espace Midland");
var northwest_swiss = test_var2.filter(
    (x) => x.region == "Northwestern Switzerland"
);
var lake_geneva = test_var2.filter((x) => x.region == "Lake Geneva Region");
var central_swiss = test_var2.filter((x) => x.region == "Central Switzerland");
var ticino = test_var2.filter((x) => x.region == "Ticino");
var zurich = test_var2.filter((x) => x.region == "Zurich");

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
        size: 20,
        shape: "circle",
        hover: {
            size: 30,
        },
    },
    yaxis: {
        title: {
            text: "Single Family Homes [%]",
            offsetX: -20,
            offsetY: 0,
            style: {
                cssClass: "apex-axis-title",
            },
        },
        min: 30,
        max: 75,
        tickAmount: 9,
        labels: {
            formatter: function (val) {
                return val + "%";
            },
        },
    },
    xaxis: {
        title: {
            text: "Number of Inhabitants",
            offsetX: 0,
            offsetY: 20,
            style: {
                cssClass: "apex-axis-title",
            },
        },
        type: "numeric",
        min: 1000,
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
        offsetY: 10,
        offsetX: 5,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data =
                w.globals.initialSeries[seriesIndex].data[dataPointIndex];

            return s1TooltipTemplate(data);
        },
    },
};

// ------------------- Chart Generation -------------------
var chart = new ApexCharts(document.querySelector("#s1-chart"), options);
chart.render();
