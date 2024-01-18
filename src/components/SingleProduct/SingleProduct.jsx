import {
  ProductContent,
  ProductDescription,
  ProductFigure,
  ProductImage,
} from "./SingleProductStyle";
import PropTypes from "prop-types";

const SingleProduct = ({ imgSrc, imgAlt, content }) => {
  return (
    <ProductContent>
      <ProductFigure>
        <ProductImage src={imgSrc} alt={imgAlt} />
      </ProductFigure>
      <ProductDescription>{content}</ProductDescription>
    </ProductContent>
  );
};

SingleProduct.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  content: PropTypes.string,
};

export default SingleProduct;
