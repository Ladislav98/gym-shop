import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";

export const FlexItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${breakpoints.tablet}) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (${breakpoints.desktop}) {
    margin-top: 24px;
  }
`;

export const TotalItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 30px;
  width: 300px;
  border-radius: 8px;
  gap: 12px;
  margin-bottom: 16px;

  @media screen and (${breakpoints.tablet}) {
    width: 400px;
  }
`;

export const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
  border: 1px solid grey;
  padding: 8px;
`;

export const TotalText = styled.p`
  color: ${colors.primaryDark};
  font-weight: 600;
`;

export const EmptyCartInfo = styled.div`
  margin: 0 auto;
  padding: 50px;
  font-size: 32px;
  color: ${colors.primaryDark};
  line-height: 28px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ClearButton = styled.button`
  padding: 6px 10px;
  background-color: white;
  color: ${colors.primaryDark};
  border-radius: 8px;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;
