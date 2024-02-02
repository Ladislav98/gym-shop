import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 30px;
  gap: 18px;
  border: 1px solid blue;

  display: flex;
  justify-self: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;
export const CalculatorTitle = styled.h2``;
export const HeightCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const UserHeightInput = styled.input``;
export const WeightCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const UserWeightInput = styled.input``;

export const CalcButton = styled.button`
  padding: 4px 8px;
`;
