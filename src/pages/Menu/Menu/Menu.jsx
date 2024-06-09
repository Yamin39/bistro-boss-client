import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import menuImg2 from "../../../assets/menu/dessert-bg.jpeg";
import menuImg3 from "../../../assets/menu/pizza-bg.jpg";
import menuImg4 from "../../../assets/menu/salad-bg.jpg";
import menuImg5 from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu | Bistro Boss</title>
      </Helmet>

      <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
      <MenuCategory img={menuImg} title="OUR MENU" category="offered"></MenuCategory>

      <MenuCategory img={menuImg2} title="DESSERTS" category="dessert"></MenuCategory>

      <MenuCategory img={menuImg3} title="PIZZA" category="pizza"></MenuCategory>

      <MenuCategory img={menuImg4} title="SALADS" category="salad"></MenuCategory>

      <MenuCategory img={menuImg5} title="SOUPS" category="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
