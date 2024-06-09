import FoodCard from "../../../components/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";

const MenuTab = ({ category }) => {
  const [menus] = useMenu(category);
  return (
    <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3">
      {menus.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default MenuTab;
