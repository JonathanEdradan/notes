var People = function(names) {
	this.allNames = [];
	names.forEach(function(name) {
	  name = name.charAt(0).toUpperCase() + name.splice(1);
	  this.allNames.push(name);
	}.bind(this));

	// var that = this;
	// names.forEach(function(name) {
	//   name = name.charAt(0).toUpperCase() + name.splice(1);
	//   this.allNames.push(name);
	};
};