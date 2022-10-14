const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	if(str.length==0) return "";

	let regexp = /(.)\1{0,}/g;
	let newArr = str.match(regexp);

	for(let i = 0; i < newArr.length; i++){
		if(newArr[i].length !== 1) newArr[i] = newArr[i].length + newArr[i][0];
	}
return newArr.join("");
}

module.exports = {
  encodeLine
};
