// Import scss files just like you would js files
import "../scss/main.scss";
import * as d3 from "d3";

const PADDING = 50;

const DATE_FORMATTER = d3.timeFormat("%Y-%m-%d");
const TEN_DAYS = 1000 * 60 * 60 * 24 * 10;

let dateScale, width, height;

function addDays(theDate, days) {
  return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

function setUpScale(citationDates) {
  let dateExtent = d3.extent(citationDates);
  dateExtent[0] = addDays(dateExtent[0], -30);
  dateExtent[1] = addDays(dateExtent[1], 30);

  dateScale = d3
    .scaleLinear()
    .domain(dateExtent)
    .range([0, width - PADDING]);
}

function setUpAxis($svg, citationDates) {
  let axis = d3.axisBottom(dateScale).tickFormat(DATE_FORMATTER);

  $svg
    .append("g")
    .attr("transform", `translate(30,${(height - PADDING) / 2})`)
    .call(axis);
}

function addTooltip($svg) {
  d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
}

function showTooltip(data) {
  d3
    .select(".tooltip")
    .text(data.citationString)
    .style("left", d3.event.pageX + "px")
    .style("top", d3.event.pageY - 28 + "px");

  d3
    .select(".tooltip")
    .transition()
    .duration(200)
    .style("opacity", 1);
}

function hideTooltip() {
  d3
    .select(".tooltip")
    .transition()
    .duration(200)
    .text("")
    .style("opacity", 0);
}

function drawCaseDots($svg, data) {
  $svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => dateScale(d.date))
    .attr("cy", d => (height - PADDING) / 2 - (d.citationCount + 15))
    .attr("r", d => d.citationCount + 15)
    .attr("transform", `translate(30,0)`)
    .on("mouseover", showTooltip)
    .on("mouseout", hideTooltip);
}

export default function(data, pageWidth, pageHeight) {
  let $svg = d3.select("svg");

  width = pageWidth - PADDING;
  height = pageHeight - PADDING - 39;

  $svg.attr("width", width).attr("height", height);

  setUpScale(data.citationDates);

  setUpAxis($svg, data.citationDates);

  addTooltip($svg);

  drawCaseDots($svg, data.caseData);
}
