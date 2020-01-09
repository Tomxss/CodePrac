var gradeBook = {

    _grades: [],

    addGrade: function(newGrade) {
        this._grades.push(newGrade);
    },

    getCountOfGrades: function() {
        return this._grades.length;
    }
    
};

exports.book = gradeBook;