import styled from "styled-components";
import { breakpoints } from "../../utils/styles/theme";

export const ProductContent = styled.article`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;
export const ProductFigure = styled.figure`
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 32px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.12);

  @media screen and (${breakpoints.tablet}) {
    flex-shrink: 0;
    width: 350px;
    height: 350px;
    margin-right: 48px;
  }
  @media screen and (${breakpoints.desktop}) {
    width: 500px;
    height: 370px;
    margin-right: 60px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: space-between;

  @media screen and (${breakpoints.desktop}) {
    align-items: flex-end;
  }
`;

export const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 150%;
`;
