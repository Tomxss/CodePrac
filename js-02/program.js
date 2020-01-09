var dice = require("./obj-dice");
var die = dice.die;

die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.totalRolls);
console.log(die);
