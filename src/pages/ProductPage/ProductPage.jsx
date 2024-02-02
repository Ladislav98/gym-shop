import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsMock from "../../utils/mock/products";
import Section from "../../components/Section/Section";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { ShoppingContext } from "../../context/ShoppingContext";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";

export const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(ShoppingContext);

  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsMock);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    products &&
      setProduct(products.find((product) => product.id === parseInt(id)));
  }, [products]);

  if (isLoading) return <LoaderSpinner />;

  return !product ? null : (
    <Section title={product.title}>
      <SingleProduct
        imgSrc={product.imgSrc}
        imgAlt={product.imgAlt}
        content={product.content}
        onAddToCart={() => addToCart(product)}
      />
    </Section>
  );
};
