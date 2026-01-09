// btnEl
// bmiInputEl
// weightConditionEl
// calculateBMI
// heightValue
// weightValue
// bmiValue

// 18.5  Under weight
// 18.5  24.9 Normal weight
// 25  29.9 Overweight weight
// 30  Obesity

const btnEl = document.getElementById("btn");

const calculateBMI = () => {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  const bmiValue = weightValue / (heightValue * heightValue);
  const bmiInputEl = document.getElementById("bmi-result");
  const weightConditionEl = document.getElementById("weight-condition");
  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight weight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
};

btnEl.addEventListener("click", calculateBMI);
