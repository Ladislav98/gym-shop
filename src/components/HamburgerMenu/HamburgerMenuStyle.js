import styled from "styled-components";
import HamburgerIcon from "./../../assets/images/icon-hamburger.svg?react";
import { breakpoints, colors } from "../../utils/styles/theme";
import { NavLink } from "react-router-dom";

export const Hamburger = styled(HamburgerIcon)`
  display: block;
  width: 32px;
  height: 32px;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerNav = styled.nav`
  background-color: ${colors.primaryDark};
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: ${({ isOpen }) => (isOpen ? "350ms ease-in-out" : "850ms")};
  z-index: 2;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerNavList = styled.ul`
  font-size: 16px;
  width: 100%;
  padding: 12px;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerItem = styled(NavLink)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
  width: 100%;
  color: ${colors.white};
  font-weight: 600;

  &:hover {
    background-color: ${colors.white};
    border-radius: 4px;
    color: ${colors.primary};
    font-weight: 700;
  }
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;
