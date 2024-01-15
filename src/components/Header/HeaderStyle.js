import styled from "styled-components";
import { colors } from "../../utils/styles/theme";
import { NavLink } from "react-router-dom";

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
  padding: 12px;
`;

export const HeaderLogo = styled.img``;
export const HeaderNav = styled.nav``;

export const HeaderLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.primary};
  margin-right: 20px;
`;

export const HeaderProfile = styled.p``;
