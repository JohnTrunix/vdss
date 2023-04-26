const dataS2 = [
    { year: 2015, new: 23000, old: 20000, apartments: 10000 },
    { year: 2016, new: 2000, old: 25000, apartments: 15000 },
    { year: 2017, new: 40000, old: 1000, apartments: 20000 },
    { year: 2018, new: 42300, old: 35000, apartments: 40000 },
    { year: 2019, new: 45000, old: 40000, apartments: 30000 },
    { year: 2020, new: 54545, old: 10000, apartments: 10000 },
    { year: 2021, new: 55000, old: 50000, apartments: 70000 },
    { year: 2022, new: 1000, old: 5778, apartments: 75000 },
    { year: 2023, new: 65000, old: 60000, apartments: 80000 },
];

var s2TrendOptions = {
    chart: {
        type: "bar",
        height: "100%",
        width: "100%",
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
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    series: [
        {
            name: "New Build",
            data: dataS2.map((x) => x.new),
        },
        {
            name: "Old Build",
            data: dataS2.map((x) => x.old),
        },
        {
            name: "Apartments",
            data: dataS2.map((x) => x.apartments),
        },
    ],
    yaxis: {
        min: 0,
        max: 100000,
    },
    xaxis: {
        categories: dataS2.map((x) => x.year),
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
};

// export chart instance
var chartS2 = new ApexCharts(
    document.querySelector("#s2-estate-trend"),
    s2TrendOptions
);
chartS2.render();
