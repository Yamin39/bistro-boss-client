import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { cart, isPending } = useCart();
  const { isAdmin } = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">CONTACT US</NavLink>
      </li>
      {
        // user ? 'true': 'false'
        // user ? condition ? 'double true' : 'one true' : 'false'
      }
      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">DASHBOARD</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome">DASHBOARD</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/our-menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/our-shop/salad">OUR SHOP</NavLink>
      </li>
      <li className="tooltip tooltip-bottom" data-tip="Cart">
        <NavLink to="/dashboard/cart" className="relative btn w-full btn-circle lg:btn-sm">
          {isPending ? <span className="loading loading-spinner loading-sm"></span> : <TiShoppingCart />}
          <span className="absolute -top-2 -right-2 p-1 bg-red-200 rounded-full text-red-700">{cart.length}</span>
        </NavLink>
      </li>
      <li>
        {user ? (
          <button onClick={handleLogOut} className="btn btn-error btn-sm text-xs">
            LOGOUT
          </button>
        ) : (
          <NavLink to="/login">LOGIN</NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="w-[98%] max-w-screen-xl mx-auto mt-4">
      <div className="navbar justify-between bg-base-100">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
