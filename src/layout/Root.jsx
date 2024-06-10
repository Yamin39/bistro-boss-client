import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <div className="w-11/12 max-w-screen-xl mx-auto">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
