import React from "react";
import NavIcon from "../assets/navicon.png";
import { FaBell } from "react-icons/fa";
import { IoIosMoon } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import ProfileImg from "../assets/navbarimg.png";
import "../App.css";
const NavBar = () => {
  return (
    <div className="   w-[1202px] h-[73px] flex items-center">
      {/* part 1 navimage and options */}
      <div className=" flex gap-3 items-center">
        <img
          src={NavIcon}
          alt="icon"
          className=" w-[56px] h-[56px]  rounded-[7px]"
        />
        <div className=" px-3 font-Noto flex gap-3 items-center border p-2 rounded-full">
          <p className="  font-bold font-Mono text-[20px] leading-[27.24px]">
            Igniculuss
          </p>
          <FaAngleDown />
        </div>
      </div>
      {/* search input  */}
      <div className="  relative left-[261px] border h-[44px] w-[343px] flex  items-center">
        <input
          placeholder="Search"
          type="text"
          name="search"
          id="search"
          className=" py-[10px] px-[16px] placeholders w-full h-full border-none"
        />
        <CiSearch className=" text-slate-500 w-[24px] h-[24px] right-2 absolute" />
      </div>
      <div className=" ml-4 relative left-[268px] h-[44px] w-[156px] flex  rounded-[4px] border-[0.6px]  items-center justify-around">
        <p className=" text-[14px] leading-[19.1px] font-bold font-Nunito">
          14 Feb 2019
        </p>
        <FaAngleDown className=" text-black w-[24px] h-[24px]" />
      </div>
      {/* icons  */}
      <div className=" left-[280px] relative ml-5 flex gap-6 items-center">
        <div className=" relative w-[18px] h-[20px]">
          <FaBell className=" text-purple w-full h-full " />
          <div className=" absolute top-0 right-0 w-[10px] h-[10px] border-[1px] bg-red rounded-full"></div>
        </div>
        <IoIosMoon className=" w-[24px] h-[24px] left-[497px] " />
        <CiSettings className="  text-grey  w-[22.41px] h-[21.23px] left-[512px]" />
      </div>
      {/* profile drop down  */}
      <div className=" relative flex gap-[12px] left-[300px] items-center border  px-1 rounded-full h-[42px] ">
        <img
          src={ProfileImg}
          alt="img"
          className=" w-[28px] h-[28px] "
        />
        <FaAngleDown className="  gap-1" />
      </div>
    </div>
  );
};

export default NavBar;
