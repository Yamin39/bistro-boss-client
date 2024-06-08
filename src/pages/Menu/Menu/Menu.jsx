import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu | Bistro Boss</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
    </div>
  );
};

export default Menu;
