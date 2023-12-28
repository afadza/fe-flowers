import React, { useEffect } from "react";
import RoutePages from "./routers";
import Main from "./layout/Main";
import { useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { API } from "./libs/api";
import { AUTH_LOGIN } from "./stores/RootReducer";

const queryClient = new QueryClient();
const App = () => {
  const dispatch = useDispatch();

  async function checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
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
    }
  }

  useEffect(() => {
    checkToken();
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RoutePages>
        <Main />
      </RoutePages>
    </QueryClientProvider>
  );
};

export default App;
