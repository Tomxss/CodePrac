var die = {
    size: 6,
    totalRolls: 0,
    roll: function() {
        this.totalRolls++;
        return (Math.ceil(this.size * Math.random()));
    }

};
die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.totalRolls);
console.log(die);
