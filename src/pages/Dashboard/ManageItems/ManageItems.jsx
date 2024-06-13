import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menus, loader, refetch] = useMenu("all");
  const axiosSecure = useAxiosSecure();

  console.log(menus);

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Menu item has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center h-24">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {menus.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td className="text-right">${item.price}</td>
                      <td>
                        <Link to={`/dashboard/updateItem/${item._id}`} className="btn btn-ghost btn-lg bg-orange-500">
                          <FaEdit
                            className="text-white 
                                          "
                          ></FaEdit>
                        </Link>
                      </td>
                      <td>
                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg">
                          <FaTrashAlt className="text-red-600"></FaTrashAlt>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageItems;
