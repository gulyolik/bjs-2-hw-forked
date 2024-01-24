"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
	let x;
	let y;
	if (d < 0) {
		arr = [];
	};
	if (d === 0) {
		x = -b / (2 * a);
		arr = [x];
	}
	if (d > 0) {
		x = (-b + Math.sqrt(d)) / (2 * a);
		y = (-b - Math.sqrt(d)) / (2 * a);
		arr = [x, y];
	}
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = parseInt(percent) / 100 / 12;
	let S = parseInt(amount) - parseInt(contribution);
	let n = parseInt(countMonths);
	let payment = S * (P + (P / (((1 + P) ** n) - 1)));
	let totalMortage = Number((payment* countMonths).toFixed(2));
	return totalMortage;

}