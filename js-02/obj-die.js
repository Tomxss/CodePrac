var die = {
    size: 4,
    count: 1,
    roll: function(dieSize = 6) {
        return (Math.ceil(dieSize * Math.random()));
    }

};

console.log(die);
console.log(die.roll());