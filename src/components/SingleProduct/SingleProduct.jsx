import { useNavigate } from "react-router-dom";
import { Button } from "../../utils/styles/generalStyles";
import {
  ButtonWrapper,
  ProductContent,
  ProductDescription,
  ProductFigure,
  ProductImage,
  ProductInfo,
} from "./SingleProductStyle";
import PropTypes from "prop-types";

const SingleProduct = ({ imgSrc, imgAlt, content, onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <ProductContent>
      <ProductFigure>
        <ProductImage src={imgSrc} alt={imgAlt} />
      </ProductFigure>
      <ProductInfo>
        <ProductDescription>{content}</ProductDescription>
        <ButtonWrapper>
          <Button onClick={() => navigate("/products")}>Go back</Button>
          <Button isadded="true" onClick={onAddToCart}>
            Add to cart
          </Button>
        </ButtonWrapper>
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
