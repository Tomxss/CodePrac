var book = require("../lib/grades").book;

exports["setUp"] = function(callback) {

    book.reset();
    callback();

};

exports["Grade additions"] = function(test) {

    book.addGrade(90);
    var count = book.getCountOfGrades();

    test.equal(count, 1);
    test.done();

};

exports["Average grades"] = function(test) {

    book.addGrade(90);
    book.addGrade(85);
    book.addGrade(72);

    var average = book.getAverage();

    test.equal(average, 82.3333333333333333);
    test.done();

};

exports['Calculate letter grades'] = function(test) {

    book.addGrade(100);
    book.addGrade(90);

    var letter = book.getLetterGrade();

    test.equal(letter, 'A');
    book.reset();

    book.addGrade(80);
    book.addGrade(80);

    letter = book.getLetterGrade();

    test.equal(letter, 'B');
    book.reset();

    book.addGrade(79);
    book.addGrade(70);

    letter = book.getLetterGrade();

    test.equal(letter, 'C');
    book.reset();

    book.addGrade(40);
    book.addGrade(80);

    letter = book.getLetterGrade();

    test.equal(letter, 'D');
    book.reset();
    test.done();

    book.addGrade(100);
    book.addGrade(0);

    letter = book.getLetterGrade();

    test.equal(letter, 'F');

};