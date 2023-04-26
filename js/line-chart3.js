// Daten für die Linien
var data1 = [
    { x: 0, y: 5 },
    { x: 1, y: 9 },
    { x: 2, y: 7 },
    { x: 3, y: 3 },
    { x: 4, y: 6 },
    { x: 5, y: 1 },
];

var data2 = [
    { x: 0, y: 3 },
    { x: 1, y: 6 },
    { x: 2, y: 4 },
    { x: 3, y: 8 },
    { x: 4, y: 2 },
    { x: 5, y: 5 },
];

var width = window.innerWidth;
var height = window.innerHeight;

var xScale = d3.scaleLinear().domain([0, 5]).range([0, width]);
var yScale = d3.scaleLinear().domain([0, 10]).range([height, 0]);

// Erstelle eine Linienfunktion
var line = d3
    .line()
    .x(function (d) {
        return xScale(d.x);
    })
    .y(function (d) {
        return yScale(d.y);
    });

// Erstelle das SVG-Element für das Diagramm
var svg = d3.select("#line-chart3");

// Zeichne die erste Linie
svg.append("path")
    .datum(data1)
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("d", line);

// Zeichne die zweite Linie
svg.append("path")
    .datum(data2)
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 2)
    .attr("d", line);

// make grid
svg.append("g")
    .attr("class", "grid")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale).ticks(5).tickSize(-height).tickFormat(""));

svg.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(yScale).ticks(5).tickSize(-width).tickFormat(""));
