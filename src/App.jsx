import React from "react";
import RoutePages from "./routers";
import Main from "./layout/Main";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./stores/RootReducer";
const App = () => {
  const store = configureStore({
    reducer: RootReducer,
  });
  return (
    <Provider store={store}>
      <RoutePages>
        <Main />
      </RoutePages>
    </Provider>
  );
};

export default App;
