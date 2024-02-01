import { useContext } from "react";
import { CartItem } from "../../components/CartItem/CartItem";
import { ShoppingContext } from "../../context/ShoppingContext";
import { Grid } from "../../utils/styles/generalStyles";

export const ShoppingCartItemsList = () => {
  const { cartItems } = useContext(ShoppingContext);

  return (
    <>
      <Grid>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Grid>
    </>
  );
};
