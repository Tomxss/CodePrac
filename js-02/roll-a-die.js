var getDieRoll = function(dieSize = 6) {
    return (Math.ceil(dieSize * Math.random()));
};

var roll = getDieRoll();
var rating = "That was trash...";
var loopMsg = "-" + roll;

for (var i = 0; i < 10; i++) {
    if (roll >= 4) loopMsg = "*" + roll;
    console.log(loopMsg);
    roll = getDieRoll();
};

if (roll >= 3 && roll < 6) {
    rating ="Great roll!";
}
if (roll == 1){
    rating = "That was ok.";
}
console.log(rating);
console.log("You rolled a "+roll+".");