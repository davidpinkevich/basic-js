const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
	let arr = [];
	let miniArr = [];
	if (str == null){
		miniArr = ["null"];
	} else { 
		miniArr = [String(str)];
	}
	
	let secondArr =[];
	if(options.hasOwnProperty("addition")) {
		let count = options.additionRepeatTimes;
		for(let i = 0; i <count; i++){
			if(options.addition == null){
				secondArr.push("null");
			} else{
				secondArr.push(String(options.addition));
			}
		}
	} 
	if(options.hasOwnProperty("additionSeparator")){
		secondArr=secondArr.join(options.additionSeparator);
	} else{
		secondArr=secondArr.join("|");
	}
	miniArr[0]+=secondArr;
	if(options.hasOwnProperty("repeatTimes")) {
		let countTwo = options.repeatTimes;
		for(let i = 0; i <countTwo; i++){
			arr.push(miniArr);
		} 
	} else {
		if(options.addition){
			return miniArr[0] +=options.addition;
		} 
	}
	if(options.hasOwnProperty("separator")){
		arr = arr.join(options.separator);
	} else {
		arr = arr.join("+");
	}
	return arr;
}

module.exports = {
  repeater
};
