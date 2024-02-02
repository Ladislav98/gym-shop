import styled from "styled-components";
import { breakpoints } from "../../utils/styles/theme";

export const CartWrapper = styled.div`
  padding: 20px;
  margin: 0 12px;
  background-color: aliceblue;
  border: 1px solid grey;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 20px;
  @media screen and (${breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
    width: 500px;
  }
`;

export const CartFigure = styled.figure`
  overflow: hidden;
  border-radius: 6px;
  width: 100px;
  height: 60px;
  justify-self: flex-start;
`;

export const CartItemImg = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const CartInfo = styled.div`
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: auto;
`;

export const CartTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
`;

export const CartPrice = styled.p`
  font-size: 14px;
`;

export const CartQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
    align-items: stretch;
    gap: 4px;
  }
`;

export const CartInput = styled.input`
  width: 30px;
  text-align: center;
`;

export const CartButton = styled.button`
  padding: 4px 8px;
`;
