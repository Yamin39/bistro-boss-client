import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="w-11/12 max-w-screen-xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
