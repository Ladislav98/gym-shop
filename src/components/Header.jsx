import {
  HeaderInner,
  HeaderLink,
  HeaderLogo,
  //   HeaderLink,
  HeaderNav,
  HeaderProfile,
  HeaderWrapper,
} from "./HeaderStyle";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <HeaderLogo>Logo</HeaderLogo>
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
