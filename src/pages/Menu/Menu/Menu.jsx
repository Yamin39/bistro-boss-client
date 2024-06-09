import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import menuImg2 from "../../../assets/menu/dessert-bg.jpeg";
import menuImg3 from "../../../assets/menu/pizza-bg.jpg";
import menuImg4 from "../../../assets/menu/salad-bg.jpg";
import menuImg5 from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu | Bistro Boss</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
      <MenuCategory category="popular"></MenuCategory>

      <Cover img={menuImg2} title="DESSERTS"></Cover>
      <MenuCategory category="dessert"></MenuCategory>

      <Cover img={menuImg3} title="PIZZA"></Cover>
      <MenuCategory category="pizza"></MenuCategory>

      <Cover img={menuImg4} title="SALADS"></Cover>
      <MenuCategory category="salad"></MenuCategory>

      <Cover img={menuImg5} title="SOUPS"></Cover>
      <MenuCategory category="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
