import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useFetchData from "../api/ClientAPI";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

const URL = "https://global-warming.org/api/arctic-api";

function PolarIceChart() {
  const { data } = useFetchData(URL);

  let arcticData = data?.arcticData?.map(
    (item) => `${item.year}/${item.month}`,
  );
  let extent = data?.arcticData?.map((item) => item.extent);
  let area = data?.arcticData?.map((item) => item.area);
  let rank = data?.arcticData?.map((item) => item.rank);

  const chartData = {
    labels: arcticData,
    datasets: [
      {
        label: "Extent",
        data: extent,
        backgroundColor: "blue",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Rank",
        data: rank,
        backgroundColor: "cyan",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Area",
        data: area,
        backgroundColor: "grey",
        fill: false,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    tooltips: {
      titleFont: {
        size: 14,
        weight: "bold",
      },
      bodyFont: {
        size: 12,
      },

      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.value + " units";
        },
      },
    },
  };

  return (
    <>
      <Line data={chartData} height={500} width={1000} options={options} />
    </>
  );
}

export default PolarIceChart;
