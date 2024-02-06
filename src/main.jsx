import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingProvider } from "./context/ShoppingContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ShoppingProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShoppingProvider>
    </AuthProvider>
  </React.StrictMode>
);
