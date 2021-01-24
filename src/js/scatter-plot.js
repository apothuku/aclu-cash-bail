import { ScatterPlot } from "./classes/Graph.js";
import { RACE_SCATTER_PLOT, BAIL_CASES_SCATTER_PLOT } from "./data.js";

/* PLOT CREATION FUNCTIONS */
const createRaceScatterPlot = () => {
  const xAxis = {
    name: "Cash Bail Rate",
    min: 20,
    max: 100,
    numTicks: 8,
    convert: num => `${num}%`
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 80000,
    numTicks: 8,
    convert: num => num === 0 ? "0" : `${num / 1000}K`
  };

  const tooltipConfig = {
    columns: [
      { dataKey: "name", isHeader: true },
      { header: "% Cash Bail", dataKey: "x", toText: value => `${value.toFixed(1)}%` },
      { header: "Avg. Bail Amount", dataKey: "y", toText: value => value.toLocaleString("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}
    ]
  };

  const container = document.getElementById("race-scatter-plot");
  return new ScatterPlot(RACE_SCATTER_PLOT, xAxis, yAxis, null, tooltipConfig, container);
};

const createCasesScatterPlot = () => {
  const cashBailRateToText = num => `${num}%`;
  const bailAmountToText = num => num === 0 ? "0" : `${num}K`;
  const totalBailCasesToText = num => num.toLocaleString();

  const xAxis = {
    name: "Cash Bail Rate",
    min: 20,
    max: 60,
    numTicks: 8,
    convert: cashBailRateToText
  };
  const yAxis = {
    name: "Bail Amount",
    min: 0,
    max: 70,
    numTicks: 7,
    convert: bailAmountToText
  };

  const tooltipConfig = {
    rows: [
      { header: "Cash Bail Rate", dataKey: "x", toText: num => `${num.toFixed(1)}%`},
      { header: "Average Bail Amount", dataKey: "y", toText: value => (value * 1000).toLocaleString("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }) },
      { header: "Total Cases", dataKey: "r", toText: totalBailCasesToText }
    ]
  };

  // 4px radius - 100;
  // 30px radius - 10000;
  // 120px radius - 40000;

  const radiusScale = {
    min: 4,
    max: 120,
    minValue: 100,
    maxValue: 42000
  };

  const container = document.getElementById("cases-scatter-plot");
  return new ScatterPlot(BAIL_CASES_SCATTER_PLOT, xAxis, yAxis, radiusScale, tooltipConfig, container);
};

/* RENDER PAGE */
createRaceScatterPlot();
createCasesScatterPlot();
