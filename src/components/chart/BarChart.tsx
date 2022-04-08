import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

const BarChart: React.FC<{ chartData: IChartData; chartTitle: string }> = (
  props
) => {
  const { chartTitle } = props;
  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: "center" as const,
        },
        title: {
          display: true,
          text: chartTitle,
        },
      },
    }),
    [chartTitle]
  );
  return <Bar options={options} data={props.chartData} />;
};

export default BarChart;
