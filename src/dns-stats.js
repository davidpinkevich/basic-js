const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
	let firstArr = domains;
	let obj = {};
	let arr = [];
	for(let i = 0; i < firstArr.length; i++){
		domains[i] = firstArr[i].split(".").reverse();
		let count = domains[i].length;
		let newArr = [];
		let str ="";
		for(let j = 0; j < count; j++){
			newArr.push(
				str +="." + domains[i][j]
			)
		}
		arr.push(newArr)
	}
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr[i].length; j++){
			if(!obj.hasOwnProperty(arr[i][j])){
				obj[arr[i][j]] = 1;
			} else {
				obj[arr[i][j]] += 1;
			}
		}
	}
	return obj;
}

module.exports = {
  getDNSStats
};
