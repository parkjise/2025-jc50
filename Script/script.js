const measureKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degress celsius")),
  };
  console.log(measurment);
  console.table(measurment);
  // console.log(measurment.value);
  // console.warn(measurment.value);
  // console.error(measurment.value);
  const kelvin = measurment.value + 273;
  return kelvin;
};

console.log(measureKelvin());
