
// Object Literal
var player = {
	name 			: "",
	Life 			: 100,
	damage 			: 0,
	hasSniperRifle  : true,
	sniperDamage	: 40,
	hasSword		: false,
	swordDamage		: 30,
	rank 			: ["soldier", "mage", "spartan", "GIGN"],

	challenge		: function(){
		console.log("Would you like to fight");
	},

	Fightme		: function(){
		console.log("Would you like to fight me" + me.name)
	},

	attack	: function(target){
		console.log(this.name + " attacks " + target.name + " for " + this.damage);
			target.life -= this.damage
	},

	pickedUpSword : function(){
		if (this.hasSword === true) {
			console.log(this.name + " picked up sword")
		}
	}



};


var saul = Object.create(player);
saul.name = "Saul"
saul.life = 120;
saul.damage = 20;
saul.hasSniperRifle = false;
console.log(saul.name);
console.log(saul.life);


var me = Object.create(player);
me.name = "Jonathan";
me.life = 100;
me.damage = 49;
me.hasSniperRifle = true;
me.rank = "GIGN";
me.challenge();
me.hasSword = true;
console.log(me.name);
console.log(me.life);
console.log(me.damage);
console.log(me.hasSniperRifle);
console.log(me.rank);
saul.attack(me);
console.log(me.name + " health is " + me.life);
me.pickedUpSword();
me.attack(saul)
console.log(saul.name + " health is " + saul.life);