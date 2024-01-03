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

  // Add Product Hooks
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    description: "flower",
    price: "",
    rating: 5,
    stockQuantity: 10,
    category: [],
  });

  function handleNewProductChange(event) {
    const { name, value, files } = event.target;

    if (files) {
      setSelectedFile(files[0]);
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  }

  const fileInputRef = React.useRef(null);

  function handleCategoriesChange(event) {
    const { id, checked } = event.target;

    if (checked) {
      setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, id]);
    } else {
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== id)
      );
    }
  }

  function onCloseModal() {
    setOpenModal(false);
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
  }

  const { mutate: addProduct } = useMutation({
    mutationFn: async () => {
      setOpenModal(false);
      const response = await API.post(
        "/product",
        {
          name: newProduct.name,
          image: selectedFile,
          description: newProduct.description,
          price: newProduct.price,
          rating: newProduct.rating,
          stockQuantity: newProduct.stockQuantity,
          category: selectedOptions,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(" Berhasil add product", response.data);
    },
    onSuccess: async () => {
      setOpenModal(false);
      setSelectedFile(null);
      setSelectedOptions([]);
      setNewProduct({
        name: "",
        image: "",
        description: "flower",
        price: "",
        rating: 5,
        stockQuantity: 10,
        category: [],
      });
      queryClient.invalidateQueries({ queryKey: ["products"] });
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
      console.log(error);
      throw new Error("Failed to add to cart");
    },
  });

  const cartOrder = carts?.filter((item) => item.checkout === true);
  const deliverOrder = cartOrder?.filter((item) => item.delivered === false);
  const deliveredOrder = cartOrder?.filter(
    (item) => item.delivered === true && item.received === false
  );
  const cartReceived = cartOrder?.filter((item) => item.received === true);

  return {
    carts,
    openModal,
    setOpenModal,
    handleFileChange,
    onCloseModal,
    selectedFile,
    selectedOptions,
    cartOrder,
    formatPrice,
    newProduct,
    handleNewProductChange,
    addProduct,
    fileInputRef,
    deliver,
    handleCheckboxChange,
    handleCategoriesChange,
    checkedItems,
    deliverOrder,
    deliveredOrder,
    cartReceived,
  };
}

export default useAdmin;
