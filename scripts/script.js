// JavaScript Document
console.log("hi");

var deMenuButton = document.querySelector("header>button");
var deNav = document.querySelector("header nav:first-of-type");

var deSluitButton = document.querySelector("header nav button:first-of-type")

deMenuButton.addEventListener("click", toggleMenu);
deSluitButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	deNav.classList.toggle("open");
}