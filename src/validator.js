class Validator {
  static validate(sudoku) {
    const validator = new Validator();

    return validator.validate(sudoku);
  }

  validate(sudoku) {
    // sudoku to digits array
    const digits = sudoku.match(/\d/g);
    
    // log the arr
    console.log(digits)
  
    // if no numbers or doesnt have 81 digits
    if (!digits || digits.length !== 81) {
      return 'Sudoku is invalid.';
    }
  
    // arrays for cols rows and 3x3 fields
    const rows = [];
    const cols = [];
    const fields = [];
  
    // creating new set() to arrays 
    // set to check unique digits
    for (let i = 0; i < 9; i++) {
      rows.push(new Set());
      cols.push(new Set());
      fields.push(new Set());
    }
  
    // iterating over digits
    for (let i = 0; i < digits.length; i++) {
      const digit = digits[i];
      const row = Math.floor(i / 9);
      const col = i % 9;
      const field = Math.floor(row / 3) * 3 + Math.floor(col / 3);
  
      //if there is zero
      if (digit === '0') {
        continue;
      }
  
      // if there are duplicates in row col or 3x3 field then invalid
      if (rows[row].has(digit) || cols[col].has(digit) || fields[field].has(digit)) {
        return 'Sudoku is invalid.';
      }
  
      // if no duplicates then add to the new set()
      rows[row].add(digit);
      cols[col].add(digit);
      fields[field].add(digit);
    }
  
    // 
    const emptyField = digits.filter(digit => digit === '0').length;
  
    // check if sudoku is valid but incomplete
    if (emptyField > 0 && emptyField > 10) {
      return 'Sudoku is valid but incomplete.';
    }
  


    return 'Sudoku is valid.';
  }
}
  


module.exports = Validator;


















