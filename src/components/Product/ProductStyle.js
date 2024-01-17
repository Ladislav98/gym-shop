import styled from "styled-components";
import { colors } from "../../utils/styles/theme";

export const Product = styled.div`
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const ProductFigure = styled.figure`
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  height: 180px;
  margin-bottom: 24px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProductTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  margin-bottom: 16px;
  color: ${colors.black};
`;
