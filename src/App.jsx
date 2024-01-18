import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import AllProducts from "./pages/AllProducts/AllProducts";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/" element={<AllProducts />} />
          <Route path="products/:id/" element={<ProductPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
