
var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorIsStuck = true;
var elevatorNumber = 13;

if (elevatorUp === true) {
	console.log("Going Up");
} else {
	console.log("Going Down");
}

if (elevatorBroken === true) {
	console.log("Elevator is Broke");
} else {
	console.log("Elevator Going Up/Down");
}

if (elevatorIsStuck === true) {
	console.log("Elevator is Stuck")
} else {
	console.log("Elevator Going  Up/Down")
}

if (elevatorBroken || elevatorIsStuck) {
	console.log("Oh Fache Mate");
}