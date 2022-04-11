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
import { getRandomColors } from "./DoughnutChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "right" as const,
    },
    title: {
      display: false,
      text: "",
    },
  },
};

type Props = {
  labels: Array<string>;
  data: Array<number>;
  title: string;
};

const HorizontalBarChart = ({ title, labels, data }: Props) => {
  return (
    <Bar
      options={{
        ...options,
        plugins: {
          ...options.plugins,
          title: {
            ...options.plugins.title,
            text: title,
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            label: title,
            data: data,
            backgroundColor: getRandomColors(),
          },
        ],
      }}
    />
  );
};

export default HorizontalBarChart;
