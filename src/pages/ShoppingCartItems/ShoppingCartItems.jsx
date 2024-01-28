import { useContext } from "react";
import { Cart } from "../../components/Cart/Cart";
import { ShoppingContext } from "../../context/ShoppingContext";

export const CartItemsList = () => {
  const { cartItems } = useContext(ShoppingContext);

  return (
    <>
      {cartItems.map((item) => (
        <Cart key={item.id} item={item} />
      ))}
    </>
  );
};
