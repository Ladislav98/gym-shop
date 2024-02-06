import { useState } from "react";
import {
  CalcButton,
  CalcRow,
  CalculatorTitle,
  CalculatorWrapper,
  CategoryBmi,
  CategoryBmiResult,
  HandleButtonStyle,
  HeightCard,
  LabelBmi,
  TotalBmi,
  UserHeightInput,
  UserWeightInput,
  WeightCard,
} from "./BmiCalculatorStyle";
import { Button } from "../../utils/styles/generalStyles";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  function handleAddHeight() {
    setHeight(() => height + 1);
  }
  function handleDecreaseHeight() {
    if (height) {
      setHeight(() => height - 1);
    }
  }
  function handleAddWeight() {
    setWeight(() => weight + 1);
  }
  function handleDecreaseWweight() {
    if (weight > 0) {
      setWeight(() => weight - 1);
    }
  }

  function handleReset() {
    setWeight(0);
    setHeight(0);
  }

  function BMItotal() {
    if (weight === 0 || height === 0) return;
    const heightCm = height / 100;
    return (weight / (heightCm * heightCm)).toFixed(2);
  }

  const bmi = BMItotal();
  return (
    <>
      <CalculatorWrapper>
        <CalculatorTitle>BMI Calculator</CalculatorTitle>
        <HeightCard>
          <LabelBmi>{"Height (cm)"}</LabelBmi>
          <CalcRow>
            <CalcButton onClick={handleDecreaseHeight}>-</CalcButton>
            <UserHeightInput
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
            <CalcButton onClick={handleAddHeight}>+</CalcButton>
          </CalcRow>
        </HeightCard>
        <WeightCard>
          <LabelBmi>{"Weight (kg)"}</LabelBmi>
          <CalcRow>
            <CalcButton onClick={handleDecreaseWweight}>-</CalcButton>
            <UserWeightInput
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
            <CalcButton onClick={handleAddWeight}>+</CalcButton>
          </CalcRow>
        </WeightCard>
        <HandleButtonStyle>
          <Button isbmi="true">Calculate</Button>
          <Button isbmireset="true" onClick={handleReset}>
            Reset
          </Button>
        </HandleButtonStyle>
        <TotalBmi>{bmi}</TotalBmi>
      </CalculatorWrapper>

      <CategoryBmi>
        <CategoryBmiResult>
          {bmi < 18.5 && "Underweight"}
          {bmi >= 18.5 && bmi < 25 && "Healthy"}
          {bmi < 30 && bmi > 25 && "Overweight"}
          {bmi > 30 && "Obese"}
        </CategoryBmiResult>
      </CategoryBmi>
    </>
  );
};

export default BmiCalculator;
