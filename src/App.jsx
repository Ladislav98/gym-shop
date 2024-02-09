import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import AllProducts from "./pages/AllProducts/AllProducts";
import { ShoppingCartItemsList } from "./pages/ShoppingCartItemsList/ShoppingCartItemsList";
import BmiPage from "./pages/BmiPage/BmiPage";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SingIn/SignIn";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<AllProducts />} />
          <Route path="/products/:id/" element={<ProductPage />} />
          <Route
            path="/bmi"
            element={
              <ProtectedRoute>
                <BmiPage />
              </ProtectedRoute>
            }
          />
          <Route path="/shopping-cart" element={<ShoppingCartItemsList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
