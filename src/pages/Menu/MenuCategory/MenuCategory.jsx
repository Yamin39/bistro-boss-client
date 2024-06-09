import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ category, img, title }) => {
  const [menus, loader] = useMenu(category);
  return (
    <div>
      {loader ? (
        <div className="flex justify-center items-center h-24">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <Cover img={img} title={title}></Cover>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {menus.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
          </div>
          <div className="mx-auto w-fit  py-10">
            <Link to={`/our-shop/${category}`} className="btn btn-ghost border-b-[3px] border-b-black">
              ORDER YOUR FAVORITE FOOD
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuCategory;
