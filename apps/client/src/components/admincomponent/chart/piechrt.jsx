"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js/auto";

Chart.register(ArcElement, Tooltip, Legend);

const OrdersCategoryPieChart = ({ orderData }) => {
  // Group the orders by category and calculate the total amount for each category
  const ordersByCategory = orderData.reduce((acc, order) => {
    order.products.forEach((product) => {
      if (!acc[product.category]) {
        acc[product.category] = { totalAmount: 0, count: 0 };
      }
      acc[product.category].totalAmount += product.quantity * product.price;
      acc[product.category].count += 1;
    });
    return acc;
  }, {});

  // Sort the categories by total amount in descending order and take the top 8
  const topCategories = Object.entries(ordersByCategory)
    .sort(([, a], [, b]) => b.totalAmount - a.totalAmount)
    .slice(0, 8)
    .map(([category]) => category);

  // Define an array of colors
  const colors = [
    "#4e79a7", // Blue
    "#f28e2c", // Orange
    "#e15759", // Red
    "#76b7b2", // Teal
    "#59a14f", // Green
    "#edc949", // Yellow
    "#af7aa1", // Purple
    "#ff9da7", // Pink
  ];

  // Prepare the data for the pie chart
  const chartData = {
    labels: topCategories,
    datasets: [
      {
        label: "Total Amount",
        data: topCategories.map(
          (category) => ordersByCategory[category].totalAmount
        ),
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace("0.8", "1")),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Top 8 Orders by Category",
        fontSize: 16, // Decrease the font size of the title
      },
      legend: {
        position: "left",
        labels: {
          boxWidth: 12,
          padding: 10, // Decrease the padding between legend items
          fontSize: 12, // Decrease the font size of the legend labels
        },
      },
    },
    layout: {
      padding: {
        left: 45,
        right: 45, // Increase the right padding to make the chart bigger
      },
    },
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Disable aspect ratio to allow the chart to fill the available space
  };
  return <Pie data={chartData} options={options} />;
};

export default OrdersCategoryPieChart;
