import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

interface PieChartProps {}

const PieChart: React.FC<PieChartProps> = () => {
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(true);
    }, 3000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const data = {
    labels: ["NextJs", "TypeScript", "TailwindCSS", "Jest", "Purple"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 30, // Reduced hoverOffset for better visual experience
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to fully utilize the container's dimensions
    layout: {
      padding: {
        top: 40, // Adjust the top padding
        bottom: 40, // Adjust the bottom padding
        left: 60,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== undefined) {
              label += context.parsed + "%";
            }
            return label;
          },
        },
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          padding: 20,
        },
      },
    },
    animation: {
      onComplete: () => {
        setDelayed(true);
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300; // Adjusted for a smoother animation
        }
        return delay;
      },
    },
  };

  // Adjusting the chart container style
  const chartContainerStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    width: "400px", // Maintain or adjust width as needed
    height: "300px", // Increased height to accommodate hover effects
    margin: "auto",
    overflow: "visible",
  };

  return (
    <div style={chartContainerStyle}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
