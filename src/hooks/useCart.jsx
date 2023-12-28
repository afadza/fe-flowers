import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { API } from "../libs/api";
import { AUTH_LOGIN } from "../stores/RootReducer";
import { useDispatch } from "react-redux";

function useCart() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  const { mutate: addToCart } = useMutation({
    mutationFn: async () => {
      const response = await API.post(
        "/cart",
        {
          productId: id,
          quantity: quantity,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data.message);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
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
      console.error("Error adding to cart:", error);
      throw new Error("Failed to add to cart");
    },
  });

  return { quantity, decrementQuantity, incrementQuantity, addToCart };
}

export default useCart;
