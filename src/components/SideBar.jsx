import React, { useState } from "react";
import Assestant from "../assets/assestant.png";
import Employee from "../assets/employee.png";
import Expenses from "../assets/expenses.png";
import Engage from "../assets/message.png";
import Tasks from "../assets/task.png";
import Payroll from "../assets/payroll.png";
import Leave from "../assets/leave.png";
import Workflow from "../assets/workflow.png";
import Reports from "../assets/reports.png";
import Home from "../assets/homeicon.png";
import { FaGreaterThan } from "react-icons/fa6";
import UserIcon from "../assets/user.png";
const SideBar = () => {
  const sidebarlinnks = [
    {
      title: "Home",
      icon: Home,
      arrow: false,
    },
    {
      title: "Engage",
      icon: Engage,
      arrow: false,
    },
    {
      title: "Tasks",
      icon: Tasks,
      arrow: false,
    },
    {
      title: "Employee",
      icon: Employee,
      arrow: true,
    },
    {
      title: "payroll",
      icon: Payroll,
      arrow: true,
    },
    {
      title: "Leave",
      icon: Leave,
      arrow: true,
    },
    {
      title: "Workflow",
      icon: Workflow,
      arrow: true,
    },
    {
      title: "Reports",
      icon: Reports,
      arrow: true,
    },
    {
      title: "Expense Claims",
      icon: Expenses,
      arrow: true,
    },
    {
      title: "Assests Management",
      icon: Assestant,
      arrow: false,
    },
  ];
  const [currentLink, setCurrentlink] = useState(sidebarlinnks[0]);

  return (
    <div className=" w-[238px] h-[1105px] flex flex-col bg-purple">
      {/* user profile */}
      <div className=" mt-10 flex flex-col items-center gap-2">
        <img
          src={UserIcon}
          alt="user"
          className=" w-[91px] h-[91px] rounded-full  border-darkwhite border-[5px] "
        />
        <p className=" text-white font-sans font-bold text-center leading-[18px]  text-[16px]">
          Jacqueline Wagner
        </p>
        <p className=" text-white capitalize text-center leading-[18px] font-sans text-[12px] font-medium">
          CHRO
        </p>
      </div>
      {/* user sections  */}
      <div className=" mt-5 flex flex-col gap-2 ">
        {sidebarlinnks.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 `}
          >
            <div
              className={` rounded-tl-[0px] rounded-tr-[19px] rounded-br-[19px] w-[6px] bg-white h-[46px] ${
                item.title === currentLink.title ? " opacity-100" : " opacity-0"
              }`}
            ></div>

            <div
              className={`pl-5 relative  rounded-[8px] items-center w-[210px] h-[46px] flex gap-5 ${
                item.title === currentLink.title ? " bg-darkwhite" : ""
              }`}
            >
              <img
                src={item.icon}
                alt="icon"
                className=" w-[20px] h-[20px] "
              />
              <p className=" text-white font-medium text-[14px] leading-[21px]">
                {item.title}
              </p>
              {item.arrow && (
                <p className=" right-2 absolute">
                  <FaGreaterThan
                    color="white"
                    size={11}
                    fontWeight={700}
                  />
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
