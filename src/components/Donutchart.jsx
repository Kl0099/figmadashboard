import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { FaFemale, FaMale } from "react-icons/fa";
const Donutchart = () => {
  const malePercentage = 65;
  const femalePercentage = 35;

  const data = {
    labels: ["Female", "Male"],
    datasets: [
      {
        // 65% male 35%female
        data: [65, 35],
        backgroundColor: [
          "rgba(22, 192, 152, 1)", // Male color
          "rgba(89, 50, 234, 1)", // Female color
        ],
        borderWidth: [5, 0], // No border
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false, // Hide legend
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className=" rounded-[10px] w-[277px] h-[318px] border  flex flex-col items-center justify-evenly">
      <p className=" text-[18px] leading-[27px] font-semibold text-black font-Poppins ">
        Employee Composition
      </p>
      <div className=" relative   w-[173.9px] h-[172px]">
        <div className=" bg-white  rounded-[10px] shadow-md top-5 left-[-40px] absolute p-[10px] w-[83px] h-[46px] flex items-center justify-center gap-3">
          <FaFemale className=" w-[9.27px] h-[24.71px]" />
          <p className="  font-sans text-[20px] font-bold leading-[24.26px] text-black">
            35%
          </p>
        </div>

        <Doughnut
          data={data}
          options={options}
          className="  w-full h-full "
        />
        <div className=" bg-white bottom-5 right-[-35px]   rounded-[10px] shadow-md  absolute p-[10px] w-[83px] h-[46px] flex items-center justify-center gap-3">
          <FaMale className=" w-[9.27px] h-[24.71px]" />
          <p className="  font-sans text-[20px] font-bold leading-[24.26px] text-black">
            65%
          </p>
        </div>
      </div>
      <p className=" text-[16px] leading-[19.41px] text-center text-grey">
        856 employee total
      </p>
    </div>
  );
};

export default Donutchart;
