// function

// declaration
function hello(){
	console.log("hallo");
}

hello();

var hey = function(){
	console.log("hey");
}

hey();

function name(){
	console.log("Jonathan");
}

name();

function four(){
	var x = 2
	var y = 2
	console.log(x + y);
}

four();

function multiple(){
	var u = 3
	var i = 12
	console.log(u * i);
}

multiple();

function numberEntered(x){
	console.log("The number entered is: ", x);
}
numberEntered(5);
numberEntered(7);
numberEntered(25);

function anyNumber(x,y){
	console.log("Sum is:", x + y);
}

anyNumber(3,7);

function anyName(f,l){
	console.log("My name is",f , l);
}

anyName("Jonathan","Taylor");

function petNameAndBreed(name, breed){
	var details = name + ", " + breed;
	console.log(details);
}

petNameAndBreed("Luka","Husky");

function priceOfCandyBars(price){
	var total = (price *.07) + price;
	console.log("Price is " + total);
}
priceOfCandyBars(1);