import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";
import Section from "../../components/Section/Section";
import { Grid } from "../../utils/styles/generalStyles";
import productsMock from "../../utils/mock/products";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsMock);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Hero />
      <Section
        title={"Elevate your workout fuel"}
        subtitle={
          "Explore our top-recommended supplements or dive into the full range. If nothing strikes you here, uncover more on our supplements page."
        }
      >
        {isLoading && <LoaderSpinner />}
        {!isLoading && products && (
          <Grid>
            {products.map(
              (product, index) =>
                index < 3 && (
                  <Product
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    imgSrc={product.imgSrc}
                    imgAlt={product.imgAlt}
                    id={product.id}
                  />
                )
            )}
          </Grid>
        )}
      </Section>
    </>
  );
};

export default Home;
