const calculateLoan = () => {
  const LoanAmountValue = document.getElementById("loan-amount").value;
  const InterestRateValue = document.getElementById("interest-rate").value;
  const MonthToPayValue = document.getElementById("interest-rate").value;

  const interest =
    (LoanAmountValue * (InterestRateValue * 0.01)) / MonthToPayValue;

  const monthlyPayment = (LoanAmountValue / MonthToPayValue + interest).toFixed(
    2
  );

  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payment : ${monthlyPayment}`;
};
