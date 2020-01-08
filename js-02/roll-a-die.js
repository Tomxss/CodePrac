var getDieRoll = function(dieSize = 6) {
    return (Math.ceil(dieSize * Math.random()));
};

var roll = getDieRoll();
var rating = "That was trash...";

if (roll >= 3 && roll < 6) {
    rating ="Great roll!";
}
    console.log(rating);

console.log("You rolled a "+roll+".");