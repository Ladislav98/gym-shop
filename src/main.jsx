import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingProvider } from "./context/ShoppingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShoppingProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShoppingProvider>
  </React.StrictMode>
);
