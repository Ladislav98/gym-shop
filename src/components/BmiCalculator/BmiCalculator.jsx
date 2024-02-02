import { useState } from "react";
import {
  CalcButton,
  CalculatorTitle,
  CalculatorWrapper,
  HeightCard,
  UserHeightInput,
  UserWeightInput,
  WeightCard,
} from "./BmiCalculatorStyle";

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

  function BMItotal() {
    const heightCm = height / 100;
    return (weight / (heightCm * heightCm)).toFixed(2);
  }
  return (
    <CalculatorWrapper>
      <CalculatorTitle>BMI Calculator</CalculatorTitle>
      <HeightCard>
        <CalcButton onClick={handleDecreaseHeight}>-</CalcButton>
        <UserHeightInput
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <CalcButton onClick={handleAddHeight}>+</CalcButton>
      </HeightCard>
      <WeightCard>
        <CalcButton onClick={handleDecreaseWweight}>-</CalcButton>
        <UserWeightInput
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <CalcButton onClick={handleAddWeight}>+</CalcButton>
      </WeightCard>
      <h3>{BMItotal()}</h3>
    </CalculatorWrapper>
  );
};

export default BmiCalculator;
