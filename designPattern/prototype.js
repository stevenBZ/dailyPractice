Function.prototype.addMethod = function(name, fn){
	this[name] = fn;	
	console.log(this);
}
let method = new Function();
// let methods = function(){};
method.addMethod('checkName', function(){
	console.log('hello');
});
method.checkName();