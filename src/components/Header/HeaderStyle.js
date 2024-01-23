import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
import { NavLink } from "react-router-dom";
import Cart from "../../assets/images/shop.svg?react";

export const HeaderWrapper = styled.header`
  background-color: ${colors.secondary};
  width: 100%;
  height: auto;
  border-radius: 0 0 8px 8px;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 24px;
`;

export const HeaderLogo = styled.img``;
export const HeaderNav = styled.nav`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: 16px;
  color: ${colors.black};
  margin-right: 32px;
  transition: color 0.3s ease-out;

  &:hover {
    color: ${colors.primaryDark};
    font-weight: 500;
  }
  &.active {
    color: ${colors.primary};
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const ShoppingCart = styled(Cart)`
  display: block;
  width: 24px;
  height: 24px;
`;
