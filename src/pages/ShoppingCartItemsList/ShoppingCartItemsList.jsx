import { useContext } from "react";
import { CartItem } from "../../components/CartItem/CartItem";
import { ShoppingContext } from "../../context/ShoppingContext";
import {
  ClearButton,
  EmptyCartInfo,
  FlexItems,
  TotalInfo,
  TotalItems,
  TotalText,
} from "./ShoppiCartItemsListStyle";
import { Link } from "react-router-dom";
import { Button } from "../../utils/styles/generalStyles";

export const ShoppingCartItemsList = () => {
  const { cartItems, getCartTotal, clearCart } = useContext(ShoppingContext);

  return (
    <>
      <FlexItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </FlexItems>
      {cartItems.length > 0 ? (
        <TotalItems>
          <ClearButton onClick={() => clearCart()}>Clear cart</ClearButton>
          <TotalInfo>
            <TotalText>Total products: {cartItems.length}</TotalText>
            <TotalText>Total price: €{getCartTotal()}</TotalText>
          </TotalInfo>
          <Button>Checkout</Button>
        </TotalItems>
      ) : (
        <EmptyCartInfo>
          <TotalText>Your cart is empty. </TotalText>
          <Link to={"/products"}>
            <Button>Start Shopping</Button>
          </Link>
        </EmptyCartInfo>
      )}
    </>
  );
};
