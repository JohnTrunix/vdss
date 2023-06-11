import ApexCharts from "apexcharts";
import { s3Data } from "../data/03_exports/s3Data.js";

// ------------------- Data Preparation -------------------
var condos = s3Data.map((x) => {
    return {
        x: x.date,
        y: x.prc_condos,
    };
});

var houses = s3Data.map((x) => {
    return {
        x: x.date,
        y: x.prc_houses,
    };
});

var appartments = s3Data.map((x) => {
    return {
        x: x.date,
        y: x.prc_rental,
    };
});

// ------------------- Chart Preparation -------------------
var colors = ["#C8553D", "#588B8B", "#8b8bae"];
var options = {
    chart: {
        type: "line",
        height: "100%",
        width: "100%",
        toolbar: {
            show: true,
        },
    },
    colors: colors,
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    series: [
        {
            name: "Condos",
            data: condos,
        },
        {
            name: "Houses",
            data: houses,
        },
        {
            name: "Appartments",
            data: appartments,
        },
    ],
    xaxis: {
        type: "datetime",
        tickAmount: 6 * 2,
        labels: {
            formatter: function (val) {
                var date = new Date(val);
                var month = date.getMonth();
                var year = date.getFullYear();
                return month + "/" + year;
            },
        },
    },

    yaxis: {
        tickAmount: 6,
        labels: {
            formatter: function (val) {
                return Math.round(val) + "%";
            },
        },
        title: {
            text: "Price Change compared to 2020 (%)",
            offsetX: -10,
            offsetY: 0,
            style: {
                cssClass: "apex-axis-title",
            },
        },
    },

    legend: {
        position: "left",
        horizontalAlign: "left",
        floating: true,
        offsetY: 15,
        offsetX: 50,
    },
};
// ------------------- Chart Generation -------------------
export var s3Chart = new ApexCharts(
    document.querySelector("#s3-chart"),
    options
);
