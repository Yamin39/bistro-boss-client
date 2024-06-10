import toast from "react-hot-toast";
import { TiWarning } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { isPending, refetch } = useCart();

  const { name, image, price, recipe } = item;

  const handleAddToCart = (food) => {
    if (!user && !user?.email) {
      toast("Please log in to add to cart!", { icon: <TiWarning className="text-lg text-warning" />, duration: 3100 });
      navigate("/login", { state: { from: location } });
      return;
    }

    const cartItem = {
      menuId: food._id,
      email: user.email,
      name: food.name,
      image: food.image,
      price: food.price,
    };

    axiosSecure.post("/carts", cartItem).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        // refetch the cart to update the count on navbar
        refetch();
      }
    });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p className="btn btn-ghost rounded-full hover:bg-transparent border-2 border-black hover:border-black min-h-0 h-8 cursor-text">{item.category}</p>
        <div className="card-actions justify-end">
          {isPending ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              adding
            </button>
          ) : (
            <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
