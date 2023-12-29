import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { API } from "../libs/api";
import { AUTH_LOGIN } from "../stores/RootReducer";
import { useDispatch, useSelector } from "react-redux";

function useCart() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();
  const auth = useSelector((state) => state.auth);
  const cart = auth.cart;
  const [checkedItems, setCheckedItems] = useState({});
  const [cartIdss, setCartIdss] = useState([]);
  const [cartIdsNumbers, setCartIdsNumbers] = useState([]);
  console.log(checkedItems);

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [itemId]: !prevItems[itemId],
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      if (checkedItems[item.id]) {
        totalPrice += parseFloat(item.totalPrice);
      }
    });
    return totalPrice.toFixed(2);
  };

  useEffect(() => {
    setCartIdss(Object.keys(checkedItems).filter((key) => checkedItems[key]));
    setCartIdsNumbers(cartIdss.map((str) => parseInt(str, 10)));
  }, [checkedItems]);

  const { mutate: checkout } = useMutation({
    mutationFn: async () => {
      const response = await API.delete("/cart", {
        cartIds: cartIdsNumbers,
      });
      console.log(response.data);
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
      console.error("Error adding to cart:", error);
      throw new Error("Failed to add to cart");
    },
  });

  console.log("array id", cartIdss  );
  console.log("array numbar", cartIdsNumbers);

  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString("id-ID", {
      maximumFractionDigits: 2,
    });
  };

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

  return {
    quantity,
    decrementQuantity,
    incrementQuantity,
    addToCart,
    cart,
    checkout,
    checkedItems,
    handleCheckboxChange,
    calculateTotalPrice,
    formatPrice,
  };
}

export default useCart;
