import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data?.filter((item) => item.category === "popular");
        setMenus(popularMenu);
      });
  }, []);
  return (
    <section className="my-10">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {menus.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
