import styled from "styled-components";
import { breakpoints, colors } from "./theme";

export const Button = styled.button`
  padding: 12px 20px;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: ${colors.white};
  transition: background-color 0.3s ease-out;
  border: none;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.issecondary &&
    `
    padding: 16px 20px;
  `}
  ${(props) =>
    props.isoutline &&
    `
    background-color: ${colors.white};
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
    margin-right:24px;
  `}

  &:hover {
    background-color: ${colors.primaryDark};

    ${(props) =>
      props.isoutline &&
      `
    color: ${colors.white};
    
  `}
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 32px;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
