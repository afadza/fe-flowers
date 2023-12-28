import React from "react";
import { useQuery } from "@tanstack/react-query";
import { API } from '../libs/api'

function useProduct() {
  const { data: Products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await API.get("/products");
      return response.data;
    },
  });

  return { Products };
}

export default useProduct;
