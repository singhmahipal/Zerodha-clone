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

export const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Holdings" },
  },
  scales: {
    x: {
      ticks: {
        maxRotation: 45,
        minRotation: 45,
        padding: 8,
        font: { size: 12 },
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}
