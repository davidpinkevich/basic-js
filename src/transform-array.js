const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
	if(!Array.isArray(arr))throw new Error("'arr' parameter must be an instance of the Array!");
	let newArr = [].concat(arr);
	
	let next = "--double-next";
	let last = "--double-prev";

	let deleteNext = "--discard-next";
	let deleteLast = "--discard-prev";

	for(let i = 0; i < newArr.length; i++){
		if(newArr[i] == next) {
			if(newArr[i+1]) newArr.splice(i,1,newArr[i+1]);
		} else if(newArr[i] == last) {
			if(newArr[i-1]) newArr.splice(i, 1, newArr[i-1]);
		} else if(newArr[i] == deleteNext) {
			if(newArr[i+1] && (typeof(newArr[i+1])!== next || typeof(newArr[i+1])!== last || typeof(newArr[i+1])!== deleteNext || typeof(newArr[i+1])!== deleteLast)){
				newArr.splice(i+1,1);
			} 
		} else if(newArr[i] == deleteLast) {
			if(newArr[i-1] && ((typeof(newArr[i-1])!== next || typeof(newArr[i-1])!== last || typeof(newArr[i-1])!== deleteNext || typeof(newArr[i-1])!== deleteLast))){
				newArr.splice(i-1,1);
			}
		}
	}	
	return newArr.filter(x=> typeof(x)!=="string");
}

module.exports = {
  transform
};
