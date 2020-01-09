var book = require("../lib/grades").book;

exports["Grade additions"] = function(test) {

    book.addGrade(90);
    var count = book.getCountOfGrades();

    test.equal(count, 1);
    test.done();

};

exports["Average grades"] = function(test) {

    book.addGrade(100);
    book.addGrade(50);

    var average = book.getAverage();

    test.equal(average, 75);
    test.done();

};