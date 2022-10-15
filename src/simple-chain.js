const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
	arr:[],
	getLength() {
		return chainMaker.arr.length;
	},
	addLink(value) {
		this.arr.push(`( ${value} )`);
		return chainMaker;
	},
	removeLink(position) {
		if(typeof(position-1)!== "number" || !this.arr[position-1]){
			this.arr = []
			throw new Error("You can't remove incorrect link!");
		}
		this.arr.splice(position-1,1);
		return chainMaker;
	},
	reverseChain() {
		this.arr.reverse();
		return chainMaker;
	},
	finishChain() {
		let arrForChain = this.arr.join("~~");
		this.arr = [];
		return arrForChain;
	}
};


module.exports = {
  chainMaker
};
