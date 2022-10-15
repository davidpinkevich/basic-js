const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let sortArr = [];
	let numberArr= [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i]!==-1){
			sortArr.push(arr[i]);
			numberArr.push(i);
		} 
	}
	sortArr.sort((a,b)=>a-b);
	for(let i = 0; i < numberArr.length; i++){
		arr.splice(numberArr[i],1,sortArr[i]);
	}
	return arr;
}

module.exports = {
  sortByHeight
};
