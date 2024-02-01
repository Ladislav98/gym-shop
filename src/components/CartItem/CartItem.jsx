import PropTypes from "prop-types";
import { useContext } from "react";
import {
  CartInput,
  CartButton,
  CartFigure,
  CartItemImg,
  CartPrice,
  CartTitle,
  CartWrapper,
} from "./CartItemStyle";
import { ShoppingContext } from "../../context/ShoppingContext";

export const CartItem = ({ item }) => {
  const { removeFromCart, addToCart } = useContext(ShoppingContext);

  return (
    <CartWrapper>
      <CartFigure>
        <CartItemImg src={item.imgSrc} alt={item.imgAlt} />
      </CartFigure>
      <CartTitle>{item.title}</CartTitle>
      <CartPrice>${item.price}</CartPrice>
      <CartButton onClick={() => removeFromCart(item)}>-</CartButton>
      <CartInput
        value={item.quantity}
        onChange={(e) => e.target.value} // Needs to be updated
      ></CartInput>
      <CartButton onClick={() => addToCart(item)}>+</CartButton>
    </CartWrapper>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }),
};
