import { Button } from "../../utils/styles/generalStyles";
import {
  ProductContent,
  ProductDescription,
  ProductFigure,
  ProductImage,
  ProductInfo,
} from "./SingleProductStyle";
import PropTypes from "prop-types";

const SingleProduct = ({ imgSrc, imgAlt, content, onAddToCart }) => {
  return (
    <ProductContent>
      <ProductFigure>
        <ProductImage src={imgSrc} alt={imgAlt} />
      </ProductFigure>
      <ProductInfo>
        <ProductDescription>{content}</ProductDescription>
        <Button isadded="true" onClick={onAddToCart}>
          Add to cart
        </Button>
      </ProductInfo>
    </ProductContent>
  );
};

SingleProduct.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  content: PropTypes.string,
  onAddToCart: PropTypes.func,
};

export default SingleProduct;
