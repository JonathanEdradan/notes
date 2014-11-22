<<<<<<< HEAD
var uList = document.querySelector("ul");
var list = uList.getElementsByTagName('li');
var numbers = ["first", "second", "third", "fourth"];
for (var i = 0; i<= list.length; i++) {
	list[i].textContent = numbers[i];
}
=======
// write code here
document.querySelector("li").textContent = "first";
document.querySelectorAll("li")[1].textContent = "second";
document.querySelectorAll("li")[3].textContent = "fourth";
>>>>>>> c4969055e9d262af535074326eaa84a9cb2aaeb3
