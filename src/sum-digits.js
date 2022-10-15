const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	let arr = String(n).split("").map(x=>+x);
	let numb;
	function getCount(value){
		if(value.reduce((a,b)=> a+b)>9){
			value = String(value.reduce((a,b)=> a+b)).split("").map(x=>+x);
			console.log(value)
			getCount(value);
		} else {
			numb = value.reduce((a,b)=> a+b);
		}
	}
	getCount(arr)
	return numb;
}

module.exports = {
  getSumOfDigits
};
