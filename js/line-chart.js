import { Chart } from "chart.js/auto";

(async function () {
    const data = [
        { year: 2010, count: 10, avg: 13 },
        { year: 2011, count: 20, avg: 15 },
        { year: 2012, count: 15, avg: 18 },
        { year: 2013, count: 25, avg: 20 },
        { year: 2014, count: 22, avg: 25 },
        { year: 2015, count: 30, avg: 30 },
        { year: 2016, count: 28, avg: 35 },
        { year: 2017, count: 35, avg: 23 },
        { year: 2018, count: 40, avg: 13 },
        { year: 2019, count: 38, avg: 24 },
        { year: 2020, count: 45, avg: 60 },
        { year: 2021, count: 28, avg: 73 },
        { year: 2022, count: 48, avg: 43 },
    ];

    new Chart(document.getElementById("line-chart"), {
        type: "line",
        data: {
            labels: data.map((row) => row.year),
            datasets: [
                {
                    label: "Count",
                    data: data.map((row) => row.count),
                    fill: true,
                    pointStyle: false,
                },
                {
                    label: "Average",
                    data: data.map((row) => row.avg),
                    fill: false,
                    pointStyle: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 5,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 80,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                    intersect: false,
                    axis: "x",
                },
            },
            animation: {
                duration: 4000,
            },
        },
    });
})();
