import { useState } from "react";
import { Button } from "../../utils/styles/generalStyles";
import {
  ProductContent,
  ProductDescription,
  ProductFigure,
  ProductImage,
  ProductInfo,
} from "./SingleProductStyle";
import PropTypes from "prop-types";

const SingleProduct = ({ imgSrc, imgAlt, content }) => {
  const [press, setPress] = useState(0);

  return (
    <ProductContent>
      <ProductFigure>
        <ProductImage src={imgSrc} alt={imgAlt} />
      </ProductFigure>
      <ProductInfo>
        <ProductDescription>{content}</ProductDescription>
        <Button isadded onClick={() => setPress((press) => press + 1)}>
          Add to cart {press}
        </Button>
      </ProductInfo>
    </ProductContent>
  );
};

SingleProduct.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  content: PropTypes.string,
};

export default SingleProduct;
