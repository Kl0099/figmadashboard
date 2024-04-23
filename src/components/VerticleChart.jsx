import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const VerticleChart = () => {
  const data = {
    labels: ["Marketing", "UI/UX", "Finance", "Frontend", "Backend"],
    datasets: [
      {
        label: "",
        data: [40, 90, 60, 75, 50],
        backgroundColor: [
          "rgba(2, 99, 255, 1)",
          "rgba(255, 119, 35, 1)",
          "rgba(142, 48, 255, 1)",
          "rgba(81, 40, 167, 1)",
          "rgba(74, 150, 255, 1)",
        ],
        barThickness: 17, // Colors for each bar
      },
    ],
  };

  return (
    <div
      className=" border ml-2 bg-white p-4 items-start
	 flex flex-col gap-3 w-[430px] h-[318px] rounded-[10px]"
    >
      <p className="font-Poppins font-semibold text-[18px] leading-[27px]">
        Income & Outcome
      </p>
      <Bar
        className=" w-[402px] h-[252px] "
        options={{
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
              ticks: {
                stepSize: 25,
              },
            },
          },
          plugins: {
            legend: {
              display: false, // Hide legend
            },
          },
        }}
        data={data}
      />
    </div>
  );
};

export default VerticleChart;
