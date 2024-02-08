import {
  HeaderInner,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  HeaderWrapper,
  ShoppingCart,
} from "./HeaderStyle";

import imgSrc from "./../../assets/images/logo.png";
import { Button } from "../../utils/styles/generalStyles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(ShoppingContext);

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <HeaderLogo src={imgSrc} />
          <HeaderNav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/products">Products</HeaderLink>
            <HeaderLink to="/bmi">BMI calculator</HeaderLink>
            <HeaderLink to="/shopping-cart">
              <ShoppingCart /> ({cartItems.length})
            </HeaderLink>
            <Button onClick={() => navigate("/sign-in")} isoutline="true">
              Sign in
            </Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </HeaderNav>
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
