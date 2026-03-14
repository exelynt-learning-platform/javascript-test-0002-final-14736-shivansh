// Reverse Pascal Triangle Pattern

let n = 5;

// function to calculate nCr
function combination(n, r) {
  let res = 1;

  for (let i = 0; i < r; i++) {
    res = res * (n - i) / (i + 1);
  }

  return Math.floor(res);
}

for (let i = n - 1; i >= 0; i--) {

  // print spaces
  let space = "";
  for (let s = 0; s < n - 1 - i; s++) {
    space += " ";
  }

  let row = "";

  // print Pascal numbers
  for (let j = 0; j <= i; j++) {
    row += combination(i, j) + " ";
  }

  console.log(space + row);
}