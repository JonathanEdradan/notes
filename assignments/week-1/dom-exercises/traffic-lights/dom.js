<<<<<<< HEAD
<<<<<<< HEAD
=======


document.querySelector("#light1").addEventListener("mouseover", function() {
	   document.querySelector("#light1").setAttribute.("fill","red") 

document.querySelector("#light1").addEventListener("mouseover", function() {
	   document.querySelector("#light1").setAttribute.("fill","white") 

=======
>>>>>>> 32889142b991884b24ca3b2ca84043fa766303db
document.querySelector("#light1").addEventListener("mouseover", function() {
	document.querySelector("#light1").style.fill = "red";
});
document.querySelector("#light1").addEventListener("mouseout", function() {
	document.querySelector("#light1").style.fill = "white";
});

document.querySelector("#light2").addEventListener("mouseover", function() {
	document.querySelector("#light2").style.fill = "yellow";
});
document.querySelector("#light2").addEventListener("mouseout", function() {
	document.querySelector("#light2").style.fill = "white";
});

document.querySelector("#light3").addEventListener("mouseover", function() {
	document.querySelector("#light3").style.fill = "green";
});
document.querySelector("#light3").addEventListener("mouseout", function() {
	document.querySelector("#light3").style.fill = "white";
});
<<<<<<< HEAD
=======
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
>>>>>>> c4969055e9d262af535074326eaa84a9cb2aaeb3
=======
>>>>>>> c86e920d2c604dce1b99f27d8b29c9e9259f77ae
>>>>>>> 32889142b991884b24ca3b2ca84043fa766303db
