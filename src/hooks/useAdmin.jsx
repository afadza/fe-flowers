import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { API } from "../libs/api";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN } from "../stores/RootReducer";

function useAdmin() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [checkedItems, setCheckedItems] = useState({});
  const [cartIdss, setCartIdss] = useState([]);
  const [cartIdsNumbers, setCartIdsNumbers] = useState([]);
  const { data: carts } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await API.get("/carts");
      return response.data;
    },
  });

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [itemId]: !prevItems[itemId],
    }));
  };

  useEffect(() => {
    const updatedCartIdss = Object.keys(checkedItems).filter(
      (key) => checkedItems[key]
    );
    setCartIdss(updatedCartIdss);
    const updatedCartIdsNumbers = updatedCartIdss.map((str) =>
      parseInt(str, 10)
    );
    setCartIdsNumbers(updatedCartIdsNumbers);
  }, [checkedItems]);

  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString("id-ID", {
      maximumFractionDigits: 2,
    });
  };

  const { mutate: deliver } = useMutation({
    mutationFn: async () => {
      const response = await API.patch("/cart/deliver", {
        cartIds: cartIdsNumbers,
      });
      console.log(response.data.message);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      const response = await API.get("/customer/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(
        AUTH_LOGIN({
          ...response.data.customer,
          cart: response.data.cartUser,
        })
      );
    },
    onError: (error) => {
      console.log(error.response);
      throw new Error("Failed to add to cart");
    },
  });

  const { mutate: addProduct } = useMutation({
    mutationFn: async (data) => {
      const response = await API.post("/product", data);
      console.log(response.data.message);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
    onError: (error) => {
      console.log(error.response);
      throw new Error("Failed to add to cart");
    },
  });

  const cartOrder = carts?.filter((item) => item.checkout === true);
  const deliverOrder = cartOrder?.filter((item) => item.delivered === false);
  const deliveredOrder = cartOrder?.filter((item) => item.delivered === true);

  return {
    carts,
    cartOrder,
    formatPrice,
    deliver,
    handleCheckboxChange,
    checkedItems,
    deliverOrder,
    deliveredOrder,
  };
}

export default useAdmin;
