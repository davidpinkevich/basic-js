const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let firstArray = s1.split("");
	let secondArray = s2.split("");
	for (let i = 0; i < firstArray.length;i++){
		for (let j = 0; j < secondArray.length; j++){
			if(firstArray[i] === secondArray[j]){
				firstArray.splice(i-1,1,1);
				secondArray.splice(j-1,1,1);
			}
		}
	}
	return (firstArray.filter(x=>x==1).length) ? firstArray.filter(x=>x==1).length : 0;
}

module.exports = {
  getCommonCharacterCount
};
