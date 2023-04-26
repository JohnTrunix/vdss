import Chart from "chart.js/auto";

// https://github.com/chartjs/Chart.js/blob/master/docs/samples/animations/progressive-line-easing.md
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

var ctx = document.getElementById("line-chart");
const previousY = (ctx) =>
    ctx.index === 0
        ? ctx.chart.scales.y.getPixelForValue(100)
        : ctx.chart
              .getDatasetMeta(ctx.datasetIndex)
              .data[ctx.index - 1].getProps(["y"], true).y;

(async function () {
    new Chart(ctx, {
        type: "line",
        data: {
            labels: data.map((row) => row.year),
            datasets: [
                {
                    label: "Count",
                    data: data.map((row) => row.count),
                    fill: true,
                    pointStyle: false,
                    tension: 0.2,
                },
                {
                    label: "Average",
                    data: data.map((row) => row.avg),
                    fill: false,
                    pointStyle: false,
                    tension: 0.2,
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
                duration: 800,
                easing: "easeOutQuart",
            },
        },
    });
})();
