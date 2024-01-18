import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsMock from "../../utils/mock/products";
import Section from "../../components/Section/Section";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

export const ProductPage = () => {
  const { id } = useParams();

  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsMock);
    }, 1000);
  }, []);

  useEffect(() => {
    products &&
      setProduct(products.find((product) => product.id === parseInt(id)));
  }, [products]);

  return !product ? null : (
    <Section title={product.title}>
      <SingleProduct
        imgSrc={product.imgSrc}
        imgAlt={product.imgAlt}
        content={product.content}
      />
    </Section>
  );
};
