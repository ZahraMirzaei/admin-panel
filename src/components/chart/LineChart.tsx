import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // rtl: true,
      // textDirection: "rtl",
      labels: {
        font: {
          size: 20,
          color: "#fff",
        },
      },
    },
  },
};

interface IchartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}
const LineChart: React.FC<{ chartData: IchartData }> = (props) => {
  return <Line data={props.chartData} options={options} />;
};

export default LineChart;
