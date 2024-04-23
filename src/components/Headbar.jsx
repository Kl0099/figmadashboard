import React from "react";
import "../App.css";
import Cloudsun from "../assets/cloudsun.png";
import ManIcon from "../assets/man.png";
const Headbar = () => {
  return (
    <div className=" ml-2  mt-[50px] flex w-[695px] h-[88px] purplegradient py-[6px] pl-[0px] pr-[10px] rounded-[7px]">
      {/* part 1  */}
      <div className=" relative items-center  flex w-[342.5px] h-[82px] ">
        {/* cloudy  */}
        <div className="  flex flex-col gap-2 py-[0px] pr-[10px] pl-[12px]  items-center w-[120px]  ">
          <img
            src={Cloudsun}
            alt="weather"
            className=" w-[32px] h-[32px] text-white "
          />
          <p className=" font-medium text-[13px] leading-[16.9px] text-center font-DmSans text-white">
            Partly Cloudy
          </p>
        </div>
        {/* date 21sep 2022 */}
        <div className="  items-start border-l-[1px] border-l-white border-dotted w-[222.5px] flex flex-col gap-1  pl-4 ">
          <p className=" font-medium text-[13px] leading-[16.9px] font-DmSans text-white">
            21 September 2022
          </p>
          <p className=" font-DmSans font-bold leading-[41.6px] text-white text-[32px] ">
            Today
          </p>
        </div>
      </div>
      {/* part 2  */}
      <div className=" relative    items-center w-[342.5px] h-[59px] gap-8 flex ">
        <div>
          <p className=" text-white w-[117p] h-[25px] py-[4px] px-[8px] gap-[10px] rounded-[4px] bg-purple  font-medium font-DmSans text-[13px] leading-[16.9px] ">
            Present-on time
          </p>
        </div>
        <div className=" top-[-65px] right-[210px] absolute  w-[100.94px] h-[105px]">
          <img
            src={ManIcon}
            alt="icon"
            className=" w-full h-full"
          />
        </div>
        <div className=" mt-4 flex-col items-start w-[128px]  flex gap-1">
          <p className=" font-medium font-DmSans leading-[16.9px] text-[13px] text-white">
            Entry Time
          </p>
          <p className=" font-DmSans font-bold leading-[41.6px] text-white text-[32px] ">
            10:11 AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headbar;
