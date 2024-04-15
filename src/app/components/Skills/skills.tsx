// Skills.tsx

import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const data = {
  labels: ["FRONTEND", "BACKEND", "UI/UX", "QA"],
  datasets: [
    {
      data: [7, 5, 8, 7],
      fill: true,
      backgroundColor: "transparent",
      borderColor: "blue",
      pointBackgroundColor: "rgb(0, 123, 255)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(0, 123, 255)",
    },
  ],
};

const options = {
  scales: {
    r: {
      ticks: {
        display: false,
      },
      grid: {
        color: function (context) {
          return context.tick.value <= 50 ? "grey" : "black";
        },
      },
      angleLines: {
        color: "#000000",
      },
      display: true,
      min: 0,
      max: 10,
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const Skills: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chartInstance: Chart | null = null;

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        // If there's an existing chart instance, destroy it before creating a new one
        if (chartInstance) {
          chartInstance.destroy();
        }

        chartInstance = new Chart(ctx, {
          type: "radar",
          data: data,
          options: options, // Use the options object here
        });
      }
    }

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "400px", height: "400px" }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Skills;
