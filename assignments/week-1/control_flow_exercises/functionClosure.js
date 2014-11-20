/* Function Expression
ammomymous or unnamed 

//Function Declaration 
named function()


//global

var createClosure = function() {
	var count = 0;
	// level 1
	return function() {
		//level 2
		return count++;
	}
};

createClosure();
*/

var jonathan = {}
jonathan.dog = "Asia";
jonathan.car = "BMW"
jonathan.sister = "Ronna"


var generalAssembly = {}
generalAssembly.classSize = "21"
generalAssembly.address = "225 Bush St."
generalAssembly.staff = "Cho, Dennis, and Colt"

jonathan.sayThis = function() {
	return this.dog; 
}

generalAssembly.sayThis = function() {
	return this;
}

jonathan.sayThis();
//generalAssembly.sayThis();
