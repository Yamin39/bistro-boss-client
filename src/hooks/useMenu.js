import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = (category) => {
  const [menus, setMenus] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/menu").then((res) => {
      if (category === "all") {
        setMenus(res.data);
        setLoader(false);
        return;
      }
      const popularMenu = res.data?.filter((item) => item.category === category);
      setMenus(popularMenu);
      setLoader(false);
    });
  }, []);

  return [menus, loader];
};

export default useMenu;
