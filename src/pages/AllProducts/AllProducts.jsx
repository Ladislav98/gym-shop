import Section from "../../components/Section/Section";
import Product from "../../components/Product/Product";
import { Grid } from "../../utils/styles/generalStyles";
import { useState, useEffect, useContext } from "react";
import productsMock from "../../utils/mock/products";
import { ShoppingContext } from "../../context/ShoppingContext";

function AllProducts() {
  const [products, setProducts] = useState(null);
  const { addToCart } = useContext(ShoppingContext);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsMock);
    }, 1000);
  }, []);

  return (
    <>
      <Section
        title="Revitalize your fitness routine"
        subtitle="Uncover a world of peak performance with our full range of supplements. Your journey to optimal fitness starts now."
      >
        {products && (
          <Grid>
            {products.map((product) => (
              <Product
                key={product.id}
                imgSrc={product.imgSrc}
                imgAlt={product.imgAlt}
                title={product.title}
                price={product.price}
                id={product.id}
                addToCart={() => addToCart(product)}
              />
            ))}
          </Grid>
        )}
      </Section>
    </>
  );
}

export default AllProducts;
