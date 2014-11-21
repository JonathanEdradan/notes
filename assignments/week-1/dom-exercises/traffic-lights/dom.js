// write code here
var red = function() {
	document.querySelector("#light1").setAttribute("fill", "red");
}

var white = function() {
	document.querySelector("#light1").setAttribute("fill", "white");
}

document.querySelector("#light1").addEventListener("mouseover", red);
document.querySelector("#light1").addEventListener("mouseout", white);

var yellow = function() {
	document.querySelector("#light2").setAttribute("fill", "yellow");
}

var white = function() {
	document.querySelector("#light2").setAttribute("fill", "white");
}
document.querySelector("#light2").addEventListener("mouseover", yellow);
document.querySelector("#light2").addEventListener("mouseout", white);

var green = function() {
	document.querySelector("#light3").setAttribute("fill", "green")
}


document.querySelector("#light3")addEventListener("mouseover", function() {
	document.querySelector("#light3").setAttribute("fill", "green")
}
