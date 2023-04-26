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

var options = {
    chart: {
        height: "100%",
        width: "100%",
    },
    series: [
        {
            name: "Count",
            type: "line",
            data: data.map((d) => d.count),
        },
        {
            name: "Average",
            type: "area",
            data: data.map((d) => d.avg),
        },
    ],

    xaxis: {
        categories: data.map((d) => d.year),
        tooltip: {
            enabled: true,
        },
    },
    yaxis: {
        min: 0,
        max: 80,
        tickAmount: 8,
    },
    stroke: {
        curve: "smooth",
    },
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
};

var chart = new ApexCharts(document.querySelector("#line-chart2"), options);
chart.render();
