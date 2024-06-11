import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Root from "../layout/Root";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Cart from "../pages/Dashboard/Cart/Cart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "our-menu",
        element: <Menu></Menu>,
      },
      {
        path: "our-shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      // admin routes
      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
