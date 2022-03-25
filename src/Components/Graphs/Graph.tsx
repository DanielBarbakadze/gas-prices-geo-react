import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type GraphProps = {
  data: ChartData<any>;
  tableTitle: string;
};

const Graph = ({ data, tableTitle }: GraphProps) => {
  return (
    <Line
      options={{
        // responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: tableTitle,
          },
        },
        scales: {
          xAxes: {
            reverse: true,
          },
        },
      }}
      data={data}
    />
  );
};

export default Graph;
