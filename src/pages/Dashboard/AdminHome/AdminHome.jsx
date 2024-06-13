import { useQuery } from "@tanstack/react-query";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats, isPending: loader } = useQuery({
    queryKey: ["admin-state"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-states");
      return res.data;
    },
  });

  return (
    <>
      {loader ? (
        <div className="min-h-screen flex justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl my-10">
            <span>Hi, Welcome </span>
            {user?.displayName ? user.displayName : "Back"}
          </h2>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaDollarSign className="text-3xl"></FaDollarSign>
              </div>
              <div className="stat-title">Revenue</div>
              <div className="stat-value">${Number(stats.revenue).toFixed(2)}</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl"></FaUsers>
              </div>
              <div className="stat-title">Users</div>
              <div className="stat-value">{stats.userCount}</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaBook className="text-3xl"></FaBook>
              </div>
              <div className="stat-title">Menu Items</div>
              <div className="stat-value">{stats.menuItemCount}</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Orders</div>
              <div className="stat-value">{stats.orderCount}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;
