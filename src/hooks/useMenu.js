import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = (category) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: menus = [],
    isPending: loader,
    refetch,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosPublic("/menu");

      if (category === "all") {
        return res.data;
      }

      const categorizedMenu = res.data?.filter((item) => item.category === category);
      return categorizedMenu;
    },
  });

  return [menus, loader, refetch];
};

export default useMenu;
