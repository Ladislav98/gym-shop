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

export const CartItem = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(ShoppingContext);

  return (
    <>
      {cartItems.map((item) => (
        <CartWrapper key={item.id}>
          <CartFigure>
            <CartItemImg src={item.imgSrc} alt={item.imgAlt} />
          </CartFigure>
          <CartTitle>{item.title}</CartTitle>
          <CartPrice>${item.price}</CartPrice>
          <CartButton onClick={() => removeFromCart(item)}>-</CartButton>
          <CartInput
            value={item.quantity}
            onChange={(e) => e.target.value} //treba izmjenit
          ></CartInput>
          <CartButton onClick={() => addToCart(item)}>+</CartButton>
        </CartWrapper>
      ))}
    </>
  );
};
