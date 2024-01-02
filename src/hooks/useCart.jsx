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
  const queryClient = useQueryClient();
  const token = localStorage.getItem("token");
  const auth = useSelector((state) => state.auth);
  const cart = auth.cart.filter((item) => item.checkout === false);
  const cartOrder = auth.cart.filter(
    (item) => item.checkout === true && item.received === false
  );
  const cartReceived = auth.cart.filter((item) => item.received === true);
  const [checkedItems, setCheckedItems] = useState({});
  const [cartIdss, setCartIdss] = useState([]);
  const [cartIdsNumbers, setCartIdsNumbers] = useState([]);

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
    const updatedCartIdss = Object.keys(checkedItems).filter(
      (key) => checkedItems[key]
    );
    setCartIdss(updatedCartIdss);
    const updatedCartIdsNumbers = updatedCartIdss.map((str) =>
      parseInt(str, 10)
    );
    setCartIdsNumbers(updatedCartIdsNumbers);
  }, [checkedItems]);

  const { mutate: checkout } = useMutation({
    mutationFn: async () => {
      const response = await API.patch("/cart", {
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
      console.log(error.response);
      throw new Error("Failed to add to cart");
    },
  });

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

  const [idOrder, setIdOrder] = useState(null);

  const { mutate: received } = useMutation({
    mutationFn: async () => {
      const response = await API.patch("/cart/received", {
        id: idOrder,
      });
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
      console.error("Error received:", error);
      throw new Error("Failed received");
    },
  });

  return {
    quantity,
    decrementQuantity,
    incrementQuantity,
    addToCart,
    cart,
    cartOrder,
    checkout,
    checkedItems,
    handleCheckboxChange,
    calculateTotalPrice,
    formatPrice,
    setIdOrder,
    idOrder,
    received,
    cartReceived
  };
}

export default useCart;
