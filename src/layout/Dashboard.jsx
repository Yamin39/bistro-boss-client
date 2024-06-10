import { Outlet } from "react-router-dom";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-grow">
        <SectionTitle subHeading="My Cart" heading="WANNA ADD MORE?"></SectionTitle>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
