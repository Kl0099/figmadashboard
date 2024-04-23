import React from "react";
import SideBar from "../components/SideBar";
import Headbar from "../components/Headbar";
import NavBar from "../components/NavBar";
import Calenders from "../components/Calender";
import Jobbar from "../components/Jobbar";
import VerticleChart from "../components/VerticleChart";
import Donutchart from "../components/Donutchart";
import EmployeeStatus from "../components/EmployeeStatus";
const Dashboard = () => {
  return (
    <div className=" flex ">
      <SideBar />
      <div className=" flex flex-col ">
        <NavBar />
        <div className=" flex  items-baseline">
          <div className=" flex flex-col ">
            {/* headbar  */}
            <Headbar />
            <Jobbar />
            {/* there is two charts */}
            <div className=" flex gap-4 ">
              <VerticleChart />
              <Donutchart />
            </div>
            <EmployeeStatus />
          </div>
          {/* calender */}
          <div>
            <Calenders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
