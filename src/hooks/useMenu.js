import { useEffect, useState } from "react";

const useMenu = (category) => {
  const [menus, setMenus] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data?.filter((item) => item.category === category);
        setMenus(popularMenu);
        setLoader(false);
      });
  }, []);

  return [menus, loader];
};

export default useMenu;
