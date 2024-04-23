import React from "react";
import TickMark from "../assets/tickmark.png";
const Schedule = () => {
  const mettings = [
    {
      description: "This is to Notify you that you will be attending..",
      time: "8:30 PM",
    },
    {
      description: "This is to Notify you that you will be attending..",
      time: "9:00 PM",
    },
    {
      description: "This is to Notify you that you will be attending..",
      time: "1:30 PM",
    },
    {
      description: "This is to Notify you that you will be attending..",
      time: "3:30 PM",
    },
  ];
  return (
    <div className=" w-[334px] h-[389px] rounded-[3.16px] flex flex-col gap-1 ">
      <div className=" flex justify-between">
        <span className=" font-Poppins text-[18px] leading-[21.78px]  font-semibold  ">
          Schedule
        </span>
        <a
          className=" text-[15px] font-semibold leading-[18.15px] text-purple"
          href="#"
        >
          View All (9)
        </a>
      </div>
      <span className=" w-[334px] border-[0.63px] border-bordercolor mt-2 ]"></span>
      {/* all meetings */}
      <div>
        {mettings.map((item, index) => (
          <div
            key={index}
            className=" w-[319px] min-h-[68px]  flex gap-4 items-baseline mt-4"
          >
            <div className=" rounded-[3.16px] items-center justify-center flex relative w-[15px] h-[15px] bg-red ">
              <img
                src={TickMark}
                alt="tick"
                className=" w-[6px] h-[6px] "
              />
            </div>
            <div className=" flex flex-col items-start gap-3">
              <div className="flex items-center justify-between  w-full">
                <p className=" font-Poppins font-medium text-[16px] text-black leading-[24px]">
                  Meeting
                </p>
                <p className=" font-Poppins text-[15px] leading-[22.5px] font-medium">
                  {item.time}
                </p>
              </div>
              <p className=" text-grey w-full font-sans font-normal text-[14px] leading-[16.41px]">
                {item.description}
              </p>
              <a
                href="#"
                className=" text-[13px] leading-[15.73px] font-semibold  text-purple font-Poppins"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Schedule;
