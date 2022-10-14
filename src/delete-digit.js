const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let testArr = [];
	let arr = String(n).split("");

	for(let i = 0; i < arr.length; i++){
		let count = arr[i];
		arr.splice(i,1);
		testArr.push(arr.join(""));
		arr.splice(i,0,count);
	}

	let numberArr = testArr.map(x=>Number(x));
	return Math.max(...numberArr);
}

module.exports = {
  deleteDigit
};
