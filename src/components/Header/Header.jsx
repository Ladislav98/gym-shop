import {
  HeaderInner,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  HeaderProfile,
  HeaderWrapper,
} from "./HeaderStyle";

import imgSrc from "./../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <HeaderLogo src={imgSrc} />
          <HeaderNav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/">Hello</HeaderLink>
          </HeaderNav>
          <HeaderProfile>Profile</HeaderProfile>
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

export default Header;
