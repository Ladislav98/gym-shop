import {
  HeaderInner,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  HeaderWrapper,
} from "./HeaderStyle";

import imgSrc from "./../../assets/images/logo.png";
import { Button } from "../../utils/styles/generalStyles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <HeaderLogo src={imgSrc} />
          <HeaderNav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/products">Products</HeaderLink>
            <HeaderLink to="/bmi">BMI calculator</HeaderLink>
            <Button onClick={() => navigate("/")} isoutline="true">
              Sign in
            </Button>
            <Button onClick={() => navigate("/")}>Register</Button>
          </HeaderNav>
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
