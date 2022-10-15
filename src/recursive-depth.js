const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
	calculateDepth(arr) {
		if(arr.length ===0) return 1;
		let maxxx = [];
		let count = 1;
		function getCount(arr){
			for(let i = 0; i < arr.length; i++){
				if(Array.isArray(arr[i])){
					count++;
					maxxx.push(count);
					getCount(arr[i]);
					count = 1;
				}
			}
		}
		getCount(arr);
		return (Math.max(...maxxx)== Infinity || Math.max(...maxxx)== -Infinity) ? 1 : Math.max(...maxxx);
	}
}

module.exports = {
  DepthCalculator
};
