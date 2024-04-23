import React from "react";
import Ali from "../assets/employee1.png";
import Mark from "../assets/employee2.png";
import Justin from "../assets/employee3.png";
const EmployeeStatus = () => {
  const employees = ["Employees Name", "Department", "Age", "Active", "status"];
  const data = [
    {
      name: "Ali Mujeed",
      department: "Marketing",
      Age: "23",
      Active: "+100",
      status: "Permanent",
      photo: Ali,
    },
    {
      name: "Mark Leo",
      department: "UI/UX",
      Age: "23",
      Active: "+100",
      status: "Contract",
      photo: Mark,
    },
    {
      name: "Justin Agnes",
      department: "Finace",
      Age: "23",
      Active: "+100",
      status: "Permanent",
      photo: Justin,
    },
  ];
  return (
    <div className=" mt-3 border items-center ml-2 w-[732px] h[326px] rounded-[10px] flex flex-col ">
      <div className=" w-[672px] h-[300px] flex flex-col  ">
        <div className=" mt-3 flex justify-between">
          <p className=" font-semibold text-[18px] leading-[27px] font-Poppins">
            Employees status
          </p>
          <p className=" cursor-pointer text-purple font-sans font-semibold text-[15px] leading-[18.5px">
            {"View All(15)"}
          </p>
        </div>
        <div className=" mb-2 border-lighblue border-[0.63px] w-full mt-3"></div>
        <div
          className="w-full flex justify-between
		 items-center font-Poppins font-medium text-[20px] "
        >
          {employees.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>

        {/* all 3 employees  */}
        <div className=" mt-2 w-full h-[190px] flex flex-col  ">
          {data.map((item, index) => (
            <div className="  my-2 flex items-center justify-between">
              <div className="   w-2/5 flex gap-2 items-center ">
                <img
                  src={item.photo}
                  alt="photo"
                  className=" w-[50px] h-[50px] "
                />
                <p className=" font-Poppins font-medium text-[17px] leading-[19.2px]  text-brown">
                  {item.name}
                </p>
              </div>
              <p className=" w-1/5 text-left font-Poppins font-medium text-[17px] leading-[19.2px]  text-brown">
                {item.department}
              </p>
              <p className=" w-1/5  text-center font-Poppins font-medium text-[17px] leading-[19.2px]  text-brown">
                {item.Age}
              </p>
              <p className=" w-1/5 text-left pl-5 font-Poppins font-medium text-[17px] leading-[19.2px]  text-brown">
                {item.Active}
              </p>
              <div className=" w-1/9  flex items-center ">
                <div
                  className={` border rounded-[5px]  text-purple w-[73px] h-[26px] py-[6.5px] px-[9px] gap-[10px] flex items-center justify-center font-medium text-[11px] leading-[12.89px] ${
                    item.status === "Contract"
                      ? " w-[73px] bg-lightblue2 text-[rgba(81, 40, 167, 0.7)]"
                      : "bg-lighblue text-[rgba(81, 40, 167, 0.7)]"
                  }`}
                >
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeStatus;
