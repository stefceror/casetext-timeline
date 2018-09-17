import Chart from "./chart";
import DataParser from "./data_parser";
import rawData from "./raw_data";
import frontexpress from "frontexpress";
import axios from "axios";

const app = frontexpress();
const apiUrl =
  "https://law.casetext.com/search?count=20&start=0&types=case&destinationDocId=";

let width = window.innerWidth;
let height = window.innerHeight;

app.get("/case/:id", (req, res) => {
  let searchString = req.params.id;

  // This would be the api fetching data, but the url
  // provided doesn't allow cross-origin requests.
  //
  // axios({
  //   type: "get",
  //   url: apiUrl + searchString,
  //   responseType: "json"
  // }).then(apiData => {
  //   //here we would load the data if we could
  // });

  let data = DataParser(rawData);

  document.getElementById(
    "timeline-title"
  ).innerText = `Citation timeline for ${searchString}`;

  Chart(data, width, height);
});

app.listen();
