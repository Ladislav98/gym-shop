import { Link } from "react-router-dom";
import {
  ProductFigure,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
} from "./ProductStyle";
import PropTypes from "prop-types";
import { Button } from "../../utils/styles/generalStyles";
import { useContext } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";

const Product = ({ imgSrc, price, title, imgAlt, id }) => {
  const { addToCart } = useContext(ShoppingContext);
  const handleAddToCart = () => {
    // Create an object representing the product
    const product = {
      id,
      imgSrc,
      price,
      title,
      imgAlt,
    };

    // Call addToCart function with the product object
    addToCart(product);
  };
  return (
    <>
      <ProductWrapper>
        <Link to={`/products/${id}`}>
          <ProductFigure>
            <ProductImage src={imgSrc} alt={imgAlt} />
          </ProductFigure>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price}</ProductPrice>
        </Link>
        <Button onClick={handleAddToCart}>Add to cart bato</Button>
      </ProductWrapper>
    </>
  );
};

Product.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.number,
};

export default Product;
