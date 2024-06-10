import { FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const Sidebar = () => {
  const { cart } = useCart();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-56 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar>
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">
                <FaShoppingCart></FaShoppingCart>
                My Cart ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review">
                <MdReviews></MdReviews>
                Add a Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
                <FaList></FaList>
                My Bookings
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-shop/salad">
                <FaSearch></FaSearch>
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
