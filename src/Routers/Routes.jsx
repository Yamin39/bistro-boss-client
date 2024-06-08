import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";

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
    ],
  },
]);

export default router;
