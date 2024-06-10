import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = (category) => {
  const [menus, setMenus] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("http://localhost:5000/menu").then((res) => {
      const popularMenu = res.data?.filter((item) => item.category === category);
      setMenus(popularMenu);
      setLoader(false);
    });
  }, []);

  return [menus, loader];
};

export default useMenu;
