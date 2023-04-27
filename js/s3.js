var options = {
    series: [
        {
            name: "Website Blog",
            type: "column",
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
            name: "Social Media",
            type: "line",
            data: [230, 420, 305, 270, 403, 202, 170, 310, 202, 202, 120, 106],
        },
    ],
    chart: {
        type: "line",
        width: "100%",
        height: "100%",
        toolbar: {
            show: false,
            tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false,
                customIcons: [],
            },
        },
    },
    stroke: {
        width: [0, 4],
    },
    yaxis: {
        min: 0,
        max: 1000,
    },
    labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
    ],
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
};

var chart = new ApexCharts(
    document.querySelector("#s3-mortage-rates"),
    options
);
chart.render();