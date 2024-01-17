import { Link } from "react-router-dom";
import {
  ProductFigure,
  ProductImage,
  ProductPrice,
  ProductTitle,
  Product as ProductWrapper,
} from "./ProductStyle";
import PropTypes from "prop-types";

const Product = ({ imgSrc, price, title, imgAlt, id }) => {
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
