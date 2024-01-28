import { useContext } from "react";
import {
  CartButton,
  CartFigure,
  CartItemImg,
  CartPrice,
  CartTitle,
  CartWrapper,
} from "./CartStyle";
import { ShoppingContext } from "../../context/ShoppingContext";

export const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(ShoppingContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleAdd = (item) => {
    addToCart(item);
  };

  return (
    <div>
      {cartItems.map((item) => (
        <CartWrapper key={item.id}>
          <CartFigure>
            <CartItemImg src={item.imgSrc} alt={item.imgAlt} />
          </CartFigure>
          <CartTitle>{item.title}</CartTitle>
          <CartPrice>${item.price}</CartPrice>
          <CartButton onClick={() => handleRemove(item)}>-</CartButton>
          <CartButton onClick={() => handleAdd(item)}>+</CartButton>
        </CartWrapper>
      ))}
    </div>
  );
};
