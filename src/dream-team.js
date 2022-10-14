const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	let newArr = [];
	if(!members) return false;
	for(let i = 0; i < members.length; i++){
		if(typeof(members[i]) === "string"){
			members[i] = members[i].split("").filter(x=> x !== " ").join("");
			newArr.push(members[i]);
		} 
	}
	return newArr.map(x=>x[0].toUpperCase()).sort().join("");
}

module.exports = {
  createDreamTeam
};
