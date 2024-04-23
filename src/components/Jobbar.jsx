import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Jobbar = () => {
  const jobs = [
    {
      title: "New employees",
      numbers: "18",
      progress: "80%",
      timed: "Last Month",
    },
    {
      title: "Total employees",
      numbers: "15",
      progress: "75%",
      timed: "Last Month",
    },
    {
      title: "Average Salary",
      numbers: "10",
      progress: "50%",
      timed: "Last Month",
    },
  ];
  return (
    <div className=" ml-2 mt-2  w-[740px] h-[200px] flex flex-col justify-center ">
      <p className=" font-Poppins text-[26px] leading-[42px] text-darkblue font-semibold">
        Dashboard
      </p>
      {/* jobbar  */}
      <div className=" justify-between flex gap-2 ">
        <div className=" w-[40px] h-[136px] rounded-[10px] opacity-50 bg-purple flex items-center justify-center ">
          <MdOutlineKeyboardArrowLeft
            size={22}
            color="white"
          />
        </div>
        {/* job div  */}
        <div className=" flex gap-4 ">
          {jobs.map((item, index) => (
            <div
              key={index}
              className=" px-3 gap-3  justify-center flex flex-col  border rounded-[10px] bg-white min-w-[204px] min-h-[136px]"
            >
              <p className=" font-Poppins text-[18px] font-medium leading-[28px] ">
                {item.title}
              </p>
              <p className=" text-[36px] leading-[28px] font-medium font-Poppins">
                {item.numbers}
              </p>
              <div className=" flex justify-between">
                <p className=" text-[16px] leading-[24px] font-normal">
                  Last month
                </p>
                <CircularProgressbar
                  value={item.progress}
                  text={`${item.progress}`}
                  className=" w-[23px] h-[23px]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className=" w-[40px] h-[136px] rounded-[10px] opacity-50 bg-purple flex items-center justify-center ">
          <MdKeyboardArrowRight
            size={22}
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Jobbar;
