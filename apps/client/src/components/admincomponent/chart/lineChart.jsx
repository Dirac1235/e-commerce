"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

function registerChartJSPlugins() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
}

export default function ChartComponent({ userData }) {
  registerChartJSPlugins();

  const userCountByDate = userData.reduce((acc, user) => {
    const date = user.createdAt;
    if (acc[date]) {
      acc[date] += 1;
    } else {
      acc[date] = 1;
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(userCountByDate).map((dateString) =>
      new Date(dateString).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Number of Users",
        data: Object.values(userCountByDate),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointHitRadius: 10,
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointBorderColor: "white",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Users Created Per Day",
        font: {
          size: 22,
          weight: "bold",
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <div className="linechart">
      <Line data={chartData} options={options} />
    </div>
  );
}
