const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
	if(!(date instanceof Date) || typeof(date) === "string" || typeof(date)=="number") throw new Error("Invalid date!");

	let data = date.getMonth();
	if(data === 0 || data === 1 || data === 11) return "winter";
	if(data === 2 || data === 3 || data === 4) return "spring";
	if(data === 5 || data === 6 || data === 7) return "summer";
	if(data === 8 || data === 9 || data === 10) return "autumn";
 }
module.exports = {
  getSeason
};
