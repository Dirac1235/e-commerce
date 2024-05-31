"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OrdersBarChart = ({ orders }) => {
  // Group the orders by week of the month and calculate the total amount for each week
  const ordersByWeek = orders.reduce((acc, order) => {
    const date = new Date(order.order_date);
    const weekOfMonth = Math.ceil((date.getDate() + 6 - date.getDay()) / 7);
    const monthYear = `${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
    const label = `Week ${weekOfMonth} (${monthYear})`;

    if (!acc[label]) {
      acc[label] = { totalAmount: 0, count: 0 };
    }
    acc[label].totalAmount += order.total_amount;
    acc[label].count += 1;
    return acc;
  }, {});

  // Prepare the data for the bar chart
  const chartData = {
    labels: Object.keys(ordersByWeek).reverse(),
    datasets: [
      {
        label: "Total Amount",
        data: Object.values(ordersByWeek)
          .map((order) => order.totalAmount)
          .reverse(),
        backgroundColor: "#f1a80b",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Order Count",
        data: Object.values(ordersByWeek)
          .map((order) => order.count)
          .reverse(),
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 9, // Decrease the font size for y-axis labels
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 9, // Decrease the font size for x-axis labels
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Sales/Revenue Metrics",
        font: {
          size: 16, // Increase the font size for the chart title
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default OrdersBarChart;
