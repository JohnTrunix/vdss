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
  
  const margin = { top: 10, right: 30, bottom: 30, left: 60 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  
  const svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
  
  const x = d3.scaleBand()
    .domain(data.map(d => d.year))
    .range([margin.left, width - margin.right])
    .padding(0.1);
  
  const y1 = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([height - margin.bottom, margin.top]);
  
  const y2 = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.avg)])
    .range([height - margin.bottom, margin.top]);
  
  const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));
  
  const yAxisLeft = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y1))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
      .attr("x", -margin.left)
      .attr("y", 10)
  