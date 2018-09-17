// Import scss files just like you would js files
import "../scss/main.scss";
import * as d3 from "d3";

const WIDTH = 800;
const HEIGHT = 600;
const PADDING = 50;

const DATE_FORMATTER = d3.timeFormat("%Y-%m-%d");
const TEN_DAYS = 1000 * 60 * 60 * 24 * 10;

let dateScale;

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
    .range([0, WIDTH - PADDING]);
}

function setUpAxis($svg, citationDates) {
  let axis = d3.axisBottom(dateScale).tickFormat(DATE_FORMATTER);

  $svg
    .append("g")
    .attr("transform", `translate(30,${(HEIGHT - PADDING) / 2})`)
    .call(axis);
}

function drawCaseDots($svg, data) {
  $svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => dateScale(d))
    .attr("cy", () => (HEIGHT - PADDING) / 2 - 25)
    .attr("r", 5)
    .attr("transform", `translate(30,0)`);
}

export default function(data) {
  let $svg = d3.select("svg");

  $svg.attr("width", WIDTH).attr("height", HEIGHT);

  setUpScale(data.citationDates);

  setUpAxis($svg, data.citationDates);

  drawCaseDots($svg, data.citationDates);
}
