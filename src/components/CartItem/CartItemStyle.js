import styled from "styled-components";

export const CartWrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  background-color: aliceblue;
  margin-bottom: 20px;
  border: 1px solid red;
  width: 250px;
  height: 180px;
`;

export const CartFigure = styled.figure`
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  height: 60px;
`;

export const CartItemImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CartTitle = styled.h2`
  font-weight: 600;
`;

export const CartPrice = styled.p``;
export const CartInput = styled.input``;

export const CartButton = styled.button`
  padding: 8px;
`;
