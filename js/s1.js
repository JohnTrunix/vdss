var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        type: "donut",
        width: "100%",
        height: "100%",
        toolbar: {
            show: true,
        },
    },
};

var chart = new ApexCharts(document.querySelector("#s1-chart"), options);
chart.render();
