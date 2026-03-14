/**
 * Prints a reverse Pascal triangle
 * @param {number} rows - Number of rows in the triangle
 */

function printReversePascalTriangle(rows) {
  if (!Number.isInteger(rows) || rows < 1) {
    console.error("Invalid input: rows must be a positive integer.");
    return;
  }

  for (let row = rows - 1; row >= 0; row--) {

    // print leading spaces
    let line = " ".repeat(rows - 1 - row);

    let value = 1;

    for (let col = 0; col <= row; col++) {
      line += value + " ";

      // compute next Pascal value
      value = (value * (row - col)) / (col + 1);
    }

    console.log(line.trimEnd());
  }
}

// Example
printReversePascalTriangle(5);
