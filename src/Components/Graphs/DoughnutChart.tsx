import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundColor = [
  "rgba(255, 99, 132)",
  "rgba(54, 162, 235)",
  "rgba(255, 206, 86)",
  "rgba(75, 192, 192)",
  "rgba(153, 102, 255)",
  "rgba(255, 159, 64)",
  "rgba(139, 195, 74)",
];

export const getRandomColors = () => {
  const colors = Array.from(Array(backgroundColor.length).keys());
  const randomColors = [];
  while (colors.length > 0) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    randomColors.push(backgroundColor[colors[randomIndex]]);
    colors.splice(randomIndex, 1);
  }
  return randomColors;
};

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor,
      borderWidth: 1,
    },
  ],
};

type DoughnutChartProps = {
  company?: string;
  labels: Array<string>;
  prices: Array<number>;
};

const DoughnutChart = ({ company, labels, prices }: DoughnutChartProps) => {
  return (
    <Doughnut
      data={{
        labels: labels,
        datasets: [
          {
            // label: company,
            data: prices,
            backgroundColor: getRandomColors(),
            borderWidth: 1,
            borderRadius: 3,
            offset: 5,
            hoverOffset: 5,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        cutout: "75%",
      }}
    />
  );
};

export default DoughnutChart;
