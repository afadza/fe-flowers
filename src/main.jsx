import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { RootReducer } from "../src/stores/RootReducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: RootReducer,
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
