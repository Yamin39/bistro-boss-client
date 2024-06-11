import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaBook, FaEnvelope, FaUsers, FaUtensils } from "react-icons/fa6";
import { MdOutlineMenu, MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const Sidebar = () => {
  const { cart } = useCart();

  const isAdmin = true;

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
            {/* sidebar content */}

            {isAdmin ? (
              <>
                {/* nav links for admin */}
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils></FaUtensils>
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList></FaList>
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/bookings">
                    <FaBook></FaBook>
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-users">
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {/* nav links for normal users */}
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
              </>
            )}

            <div className="divider"></div>

            {/* shared nav links */}
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-menu">
                <MdOutlineMenu></MdOutlineMenu>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-shop/salad">
                <FaBagShopping></FaBagShopping>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaEnvelope></FaEnvelope>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
