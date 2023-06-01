import ApexCharts from "apexcharts";
import { s5Data } from "../data/s5Data.js";

// ------------------- Data Preparation -------------------
function mapData(data) {
    var data2 = [];
    for (const [key, value] of Object.entries(data)) {
        if (key != "work_category") {
            data2.push({
                x: key,
                y: value,
            });
        }
    }
    return data2;
}

var carpentry_work = mapData(
    s5Data.filter((x) => x.work_category == "General carpentry work")[0]
);
var elevators = mapData(
    s5Data.filter((x) => x.work_category == "Elevators")[0]
);
var construction_cleaning = mapData(
    s5Data.filter((x) => x.work_category == "Construction cleaning")[0]
);
var floor_coverings = mapData(
    s5Data.filter((x) => x.work_category == "Floor coverings")[0]
);
var sealing_coatings = mapData(
    s5Data.filter((x) => x.work_category == "Sealing coatings")[0]
);
var earthworks = mapData(
    s5Data.filter((x) => x.work_category == "Earthworks")[0]
);
var attic = mapData(s5Data.filter((x) => x.work_category == "Attic")[0]);
var windows = mapData(s5Data.filter((x) => x.work_category == "Windows")[0]);
var scaffolding = mapData(
    s5Data.filter((x) => x.work_category == "Scaffolding")[0]
);
var plastering = mapData(
    s5Data.filter((x) => x.work_category == "Plastering work")[0]
);
var gardening = mapData(
    s5Data.filter((x) => x.work_category == "Gardening work")[0]
);
var kitchen = mapData(
    s5Data.filter((x) => x.work_category == "Kitchen fittings")[0]
);
var painting = mapData(
    s5Data.filter((x) => x.work_category == "Painting work")[0]
);
var masonry_reinforced = mapData(
    s5Data.filter(
        (x) => x.work_category == "Masonry and reinforced concrete work"
    )[0]
);
var metal_construction = mapData(
    s5Data.filter((x) => x.work_category == "Metal construction work")[0]
);
var tiling = mapData(s5Data.filter((x) => x.work_category == "Tiling work")[0]);
var sheet_metal = mapData(
    s5Data.filter((x) => x.work_category == "Sheet metal work")[0]
);
var civil_engineering = mapData(
    s5Data.filter((x) => x.work_category == "Civil engineering works")[0]
);
var carpentry = mapData(
    s5Data.filter((x) => x.work_category == "Carpentry work")[0]
);

// ------------------- Chart Preparation -------------------
var options = {
    chart: {
        type: "heatmap",
        height: "100%",
        width: "100%",
    },
    series: [
        {
            name: "Carpentry Work",
            data: carpentry,
        },
        {
            name: "Civil Engineering",
            data: civil_engineering,
        },
        {
            name: "Sheet Metal Work",
            data: sheet_metal,
        },
        {
            name: "Tiling Work",
            data: tiling,
        },
        {
            name: "Metal Construction Work",
            data: metal_construction,
        },
        {
            name: "Masonry and Reinforced Concrete",
            data: masonry_reinforced,
        },
        {
            name: "Painting Work",
            data: painting,
        },
        {
            name: "Kitchen Fittings",
            data: kitchen,
        },
        {
            name: "Gardening Work",
            data: gardening,
        },
        {
            name: "Plastering Work",
            data: plastering,
        },
        {
            name: "Scaffolding",
            data: scaffolding,
        },
        {
            name: "Windows",
            data: windows,
        },
        {
            name: "Attic",
            data: attic,
        },
        {
            name: "Earthworks",
            data: earthworks,
        },
        {
            name: "Sealing Coatings",
            data: sealing_coatings,
        },
        {
            name: "Floor Coverings",
            data: floor_coverings,
        },
        {
            name: "Construction Cleaning",
            data: construction_cleaning,
        },
        {
            name: "Elevators",
            data: elevators,
        },
        {
            name: "General Carpentry Work",
            data: carpentry_work,
        },
    ],
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        heatmap: {
            reverseNegativeShade: true,
            shadeIntensity: 0.5,
            distributed: false,
            enableShades: false,
            colorScale: {
                ranges: [
                    {
                        from: -30,
                        to: -10.5,
                        color: "#588B8B",
                        name: "low",
                    },
                    {
                        from: -10.6,
                        to: 0,
                        color: "#93B7BE",
                        name: "medium",
                    },
                    {
                        from: 0.01,
                        to: 10,
                        color: "#dc9283",
                        name: "high",
                    },
                    {
                        from: 10.1,
                        to: 40,
                        color: "#C8553D",
                        name: "extreme",
                    },
                ],
            },
        },
    },
    xaxis: {
        type: "category",
        labels: {
            rotate: 0,
            hideOverlappingLabels: false,
            trim: true,
        },
    },
    yaxis: {
        type: "category",
    },

    tooltip: {
        y: {
            formatter: function (val) {
                return val.toFixed(2) + "%";
            },
        },
    },
};

// ------------------- Chart Generation -------------------
export var s5Chart = new ApexCharts(
    document.querySelector("#s5-chart"),
    options
);
