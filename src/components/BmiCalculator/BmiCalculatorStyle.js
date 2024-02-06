import styled from "styled-components";
import { colors } from "./../../utils/styles/theme";

export const CalculatorWrapper = styled.div`
  width: 300px;
  padding: 30px;
  gap: 18px;

  display: flex;
  justify-self: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  border-radius: 8px;

  box-shadow: 0px 9px 30px 0px rgb(56, 135, 190);
`;
export const CalculatorTitle = styled.h2``;
export const HeightCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-direction: column;
`;
export const UserHeightInput = styled.input``;
export const WeightCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-direction: column;
`;
export const UserWeightInput = styled.input``;

export const LabelBmi = styled.label`
  font-size: 12px;
  align-self: flex-start;
  margin-left: 16px;
`;

export const CalcButton = styled.button`
  padding: 4px 8px;
  background-color: #40a2d8;
  border: none;
  border-radius: 5px;
  color: ${colors.white};
`;

export const HandleButtonStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

export const TotalBmi = styled.h3`
  margin-top: 20px;
`;

export const CalcRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const CategoryBmi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const CategoryBmiResult = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
