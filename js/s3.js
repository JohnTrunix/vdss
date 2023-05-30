import ApexCharts from "apexcharts";
import { s3Data } from "../data/s3Data.js";

// ------------------- Data Preparation -------------------
var condos = s3Data.map((x) => {
    return {
        x: x.Date,
        y: x.c_diff_abs_per,
    };
});

var houses = s3Data.map((x) => {
    return {
        x: x.Date,
        y: x.h_diff_abs_per,
    };
});

var appartments = s3Data.map((x) => {
    return {
        x: x.Date,
        y: x.a_diff_abs_per,
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
            yaxis: {
                lines: {
                    show: true,
                },
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
        labels: {
            formatter: function (val) {
                return val.toFixed(2) + "%";
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
};
// ------------------- Chart Generation -------------------
export var s3Chart = new ApexCharts(
    document.querySelector("#s3-chart"),
    options
);
