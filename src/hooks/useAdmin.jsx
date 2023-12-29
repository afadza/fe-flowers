import { useQuery } from "@tanstack/react-query";
import React from "react";
import { API } from "../libs/api";

function useAdmin() {
  const { data: Carts } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await API.get("/carts");
      return response.data;
    },
  });

  return { Carts };
}

export default useAdmin;
