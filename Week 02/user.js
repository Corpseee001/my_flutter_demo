
function toggleContainer1() {
  const text = document.getElementById("toggleText1");
  const button = event.target;

}

function showSum() {
  let chris = 5;
  let dhamala = 6;
  const sum = chris + dhamala;
  const result = document.getElementById("sumResult");
  result.textContent = `The sum of ${chris} + ${dhamala} is ${sum}.`;
}