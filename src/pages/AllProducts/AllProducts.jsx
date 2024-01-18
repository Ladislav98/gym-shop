import Section from "../../components/Section/Section";
import Product from "../../components/Product/Product";
import { Grid } from "../../utils/styles/generalStyles";
import { useState, useEffect } from "react";
import productsMock from "../../utils/mock/products";

function Courses() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsMock);
    }, 1000);
  }, []);

  return (
    <>
      <Section
        title="Open your new possibilities"
        subtitle="We recommend that you choose one of the featured products. If you don't find anything for you here, search for products in detail on the products page."
      >
        {products && (
          <Grid>
            {products.map((product) => (
              <Product
                key={product.id}
                imgSrc={product.imgSrc}
                imgAlt={product.imgAlt}
                title={product.title}
                subtitle={product.subtitle}
                time={product.time}
                id={product.id}
              />
            ))}
          </Grid>
        )}
      </Section>
    </>
  );
}

export default Courses;
