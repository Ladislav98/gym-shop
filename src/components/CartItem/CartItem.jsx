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
  CartInfo,
  CartQuantity,
} from "./CartItemStyle";
import { ShoppingContext } from "../../context/ShoppingContext";

export const CartItem = ({ item }) => {
  const { removeFromCart, addToCart } = useContext(ShoppingContext);

  return (
    <CartWrapper>
      <CartFigure>
        <CartItemImg src={item.imgSrc} alt={item.imgAlt} />
      </CartFigure>
      <CartInfo>
        <CartTitle>{item.title}</CartTitle>
        <CartPrice>€{item.price}</CartPrice>
      </CartInfo>
      <CartQuantity>
        <CartButton onClick={() => removeFromCart(item)}>-</CartButton>
        <CartInput value={item.quantity}></CartInput>
        <CartButton onClick={() => addToCart(item)}>+</CartButton>
      </CartQuantity>
    </CartWrapper>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
};
