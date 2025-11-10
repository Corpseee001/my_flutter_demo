// Addition
function showSum() {
  let chris = 5;
  let dhamala = 6;
  const sum = chris + dhamala;
  const result = document.getElementById("sumResult");
  result.textContent = `The sum of ${chris} + ${dhamala} is ${sum}.`;
}

// Subtraction
function showSubtraction() {
  let chris = 10;
  let dhamala = 4; 
  const difference = chris - dhamala;
  const result = document.getElementById("subResult");
  result.textContent = `The difference of ${chris} - ${dhamala} is ${difference}.`;
}

// Multiplication
function showMultiplication() {
  let chris = 3;
  let dhamala = 7;
  const product = chris * dhamala;
  const result = document.getElementById("mulResult");
  result.textContent = `The product of ${chris} × ${dhamala} is ${product}.`;
}

// Division
function showDivision() {
  let chris = 20;
  let dhamala = 5;
  const quotient = chris / dhamala;
  const result = document.getElementById("divResult");
  result.textContent = `The quotient of ${chris} ÷ ${dhamala} is ${quotient}.`;
}
