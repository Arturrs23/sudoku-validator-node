class Validator {
  static validate(sudoku) {
    const validator = new Validator

    return validator.validate(sudoku)
  }


// If the puzzle is valid and completed, return Sudoku is valid.
// If the puzzle is valid but not fully completed, return Sudoku is valid but incomplete.
// If the puzzle is not valid, return Sudoku is invalid.


// A puzzle is valid if:

// No numbers are repeated in any of the rows
// No numbers are repeated in any of the columns
// Every 9x9 square has no repeated numbers
// Only numbers 1 - 9 are used to fill the puzzle (or 0 for empty cells)

//  0 - incomplete sudoku

validate(sudoku) {
  // loop rows to 9
  for (let i = 0; i < 9; i++) { 

    //  set() to check if there are any duplicate numbers
    const row = new Set(sudoku[i]);

    // use .size and if does not equal 9 unique elements stop and return
    if (row.size !== 9 ) { 

      // return different messages based on the condition
      if (row.size == 9) {
        return "Sudoku is valid.";
      } else if (row.has(0)) {
        return "Sudoku is valid but incomplete.";
      } else {
        return "Sudoku is invalid.";
      }
    }
  }
  
}







}

module.exports = Validator




