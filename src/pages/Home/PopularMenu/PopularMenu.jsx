import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
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
      <div className="mx-auto w-fit  py-10">
        <button className="btn btn-ghost border-b-[3px] border-b-black">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
