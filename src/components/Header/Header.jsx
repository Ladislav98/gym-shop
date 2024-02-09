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
import { useContext, useState } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";
import { AuthContext } from "../../context/AuthContext";
import { Hamburger } from "../HamburgerMenu/HamburgerMenuStyle";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useContext(ShoppingContext);
  const { isLoggedIn, setIsLoggedIn, setIsAdmin } = useContext(AuthContext);

  function handleLogOut() {
    setIsAdmin(false);
    setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
  }

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  const hamburgerItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Cart",
      path: "/shopping-cart",
    },
  ];

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <HeaderLink to={"/"}>
            <HeaderLogo src={imgSrc} />
          </HeaderLink>
          <HeaderNav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/products">Products</HeaderLink>
            <HeaderLink to="/bmi">BMI calculator</HeaderLink>
            <HeaderLink to="/shopping-cart">
              <ShoppingCart /> ({cartItems.length})
            </HeaderLink>
            {!isLoggedIn && (
              <Button onClick={() => navigate("/sign-in")} isoutline="true">
                Sign in
              </Button>
            )}
            {!isLoggedIn && (
              <Button onClick={() => navigate("/register")}>Register</Button>
            )}
            {isLoggedIn && <Button onClick={handleLogOut}>Log out</Button>}
          </HeaderNav>
          <Hamburger onClick={handleOpen} />
          {isOpen && (
            <HamburgerMenu
              onLogOut={handleLogOut}
              isLoggedIn={isLoggedIn}
              onOpen={handleOpen}
              isOpen={isOpen}
              hamburgerItems={hamburgerItems}
            />
          )}
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
