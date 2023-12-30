import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { API } from "../libs/api";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN } from "../stores/RootReducer";

function useAddress() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const auth = useSelector((state) => state.auth);
  const [selectedProvinceId, setSelectedProvinceId] = useState({
    id: 0,
    name: "",
  });
  const [selectedRegencyId, setSelectedRegencyId] = useState({
    id: 0,
    name: "",
  });
  const [selectedDistrictId, setSelectedDistrictId] = useState({
    id: 0,
    name: "",
  });
  const [selectedVillageId, setSelectedVillageId] = useState({
    id: 0,
    name: "",
  });
  const [customer, setCustomer] = useState({
    name: auth.name || "",
    email: auth.email || "",
    address: auth.address || "",
    password: auth.password || "",
  });
  const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (auth) {
      setIsLoading(false);
    }
  }, [auth]);

  function handleEdit() {
    setEdit(!edit);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  }

  const { data: Provinces } = useQuery({
    queryKey: ["provinces"],
    queryFn: async () => {
      const response = await axios.get(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
      );
      return response.data;
    },
  });

  const { data: Regencies } = useQuery({
    queryKey: ["regencies", selectedProvinceId.id],
    queryFn: async () => {
      if (selectedProvinceId) {
        const response = await axios.get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinceId.id}.json`
        );
        return response.data;
      }
      return [];
    },
    enabled: !!selectedProvinceId.id,
  });

  const { data: Districts } = useQuery({
    queryKey: ["districts", selectedRegencyId.id],
    queryFn: async () => {
      if (selectedRegencyId) {
        const response = await axios.get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencyId.id}.json`
        );
        return response.data;
      }
      return [];
    },
    enabled: !!selectedRegencyId.id,
  });

  const { data: Villages } = useQuery({
    queryKey: ["villages", selectedDistrictId.id],
    queryFn: async () => {
      if (selectedDistrictId) {
        const response = await axios.get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrictId.id}.json`
        );
        return response.data;
      }
      return [];
    },
    enabled: !!selectedDistrictId.id,
  });

  const handleProvinceChange = (id, name) => {
    setSelectedProvinceId({ id, name });
    setSelectedRegencyId("");
    setSelectedDistrictId("");
    setSelectedVillageId("");
  };

  const handleRegencyChange = (id, name) => {
    setSelectedRegencyId({ id, name });
    setSelectedDistrictId("");
    setSelectedVillageId("");
  };

  const handleDistrictChange = (id, name) => {
    setSelectedDistrictId({ id, name });
    setSelectedVillageId("");
  };

  const handleVillageChange = (id, name) => {
    setSelectedVillageId({ id, name });
  };

  const { mutate: editCustomer } = useMutation({
    mutationFn: async () => {
      const response = await API.patch(
        "/customer",
        {
          name: customer.name ? customer.name : auth.name,
          email: customer.email ? customer.email : auth.email,
          address: customer.address
            ? customer.address +
              ", " +
              ` ${selectedVillageId.name}, ${selectedDistrictId.name}, ${selectedRegencyId.name}, ${selectedProvinceId.name}`
            : auth.address,
          password: customer.password ? customer.password : auth.password,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
      const response = await API.get("/customer/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response check", response.data);
      dispatch(
        AUTH_LOGIN({
          ...response.data.customer,
          cart: response.data.cartUser,
        })
      );
    },
    onError: (error) => {
      console.error("Error update customer:", error);
      throw new Error("Failed to add to cart");
    },
  });

  return {
    Provinces,
    Regencies,
    Districts,
    Villages,
    selectedProvinceId,
    selectedRegencyId,
    selectedDistrictId,
    selectedVillageId,
    customer,
    edit,
    isOpen,
    isLoading,
    auth,
    editCustomer,
    setIsOpen,
    handleEdit,
    handleProvinceChange,
    handleRegencyChange,
    handleDistrictChange,
    handleVillageChange,
    handleChange,
  };
}

export default useAddress;
