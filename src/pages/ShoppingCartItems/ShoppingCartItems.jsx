import { useContext } from "react";
import { CartItem } from "../../components/CartItem/CartItem";
import { ShoppingContext } from "../../context/ShoppingContext";

export const ShoppingCartItemsList = () => {
  const { cartItems, clearCart, getCartTotal } = useContext(ShoppingContext);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {cartItems.length > 0 ? (
        <>
          <h1>{getCartTotal()}</h1>
          <button onClick={() => clearCart()}>Clear your cart</button>
        </>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </>
  );
};
