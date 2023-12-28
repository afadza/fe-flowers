import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function useAddress() {
  const { data: Provinces, isLoading } = useQuery({
    queryKey: ["provinces"],
    queryFn: async () => {
      const response = await axios.get(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
      );
      console.log(response.data);
      return response.data;
    },
  });

  return { Provinces, isLoading };
}

export default useAddress;
