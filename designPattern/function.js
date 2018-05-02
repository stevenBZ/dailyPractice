let i=5
let j=5
let obj = function(){
	this.i =4;
}
obj.prototype.p1 = function(){
	return i
}

let obj2 = function(){
	this.j =4;
	this.p1 = function(){
		return this.j
	}
}

let m = new obj()
let n = new obj2()
console.log(m.p1())
console.log(n.p1())