import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ category }) => {
  const [menus, loader] = useMenu(category);
  return (
    <div>
      {loader ? (
        <div className="flex justify-center items-center h-24">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {menus.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
          </div>
          <div className="mx-auto w-fit  py-10">
            <button className="btn btn-ghost border-b-[3px] border-b-black">ORDER YOUR FAVORITE FOOD</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuCategory;
