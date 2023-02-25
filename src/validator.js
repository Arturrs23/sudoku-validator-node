class Validator {
  static validate(sudoku) {
    const validator = new Validator();

    return validator.validate(sudoku);
  }
  validate(sudoku) {
    const valid = "Sudoku is valid.";
    const invalid = "Sudoku is invalid.";
    const incomplete = "Sudoku is valid but incomplete.";
  
    // clear the string
    const newString = sudoku.replace(/[^\d]/g, "");

  
  
  
    // rows and cols
    for (let i = 0; i < 9; i++) {
      let row = "";
      let column = "";
  
      for (let j = 0; j < 9; j++) {
        // extract them to newString
        row += newString.substr();
        column += newString.substr(j * 9 + i, 1);
      }
      //using set() to check for duplicates
      const rowSet = new Set(row);
      const columnSet = new Set(column);
        if ( columnSet.size !== 9 || rowSet.size !== 9) {
          return invalid;
      }

    }

 

  

    // If Sudoku is valid and complete
    return valid;

    
  }
}


module.exports = Validator;




















