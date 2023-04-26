var options = {
    chart: {
        type: "treemap",
        height: "100%",
        width: "100%",
    },
    series: [
        {
            data: [
                {
                    x: "INTC",
                    y: 1.2,
                },
                {
                    x: "GS",
                    y: 0.4,
                },
                {
                    x: "CVX",
                    y: -1.4,
                },
                {
                    x: "GE",
                    y: 2.7,
                },
                {
                    x: "CAT",
                    y: -0.3,
                },
                {
                    x: "RTX",
                    y: 5.1,
                },
                {
                    x: "CSCO",
                    y: -2.3,
                },
                {
                    x: "JNJ",
                    y: 2.1,
                },
                {
                    x: "PG",
                    y: 0.3,
                },
                {
                    x: "TRV",
                    y: 0.12,
                },
                {
                    x: "MMM",
                    y: -2.31,
                },
                {
                    x: "NKE",
                    y: 3.98,
                },
                {
                    x: "IYT",
                    y: 1.67,
                },
            ],
        },
    ],
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: "12px",
        },
        formatter: function (text, op) {
            return [text, op.value];
        },
        offsetY: -4,
    },
};

var chart = new ApexCharts(
    document.querySelector("#s4-forecast-price"),
    options
);
chart.render();
