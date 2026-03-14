# javascript-test-0002-final-14736-shivansh
Final Project Assignment - This repository contains the complete final project code and documentation.


# Number Pattern Program (JavaScript)

## Overview

This JavaScript program prints a **symmetric number pattern** using nested loops.
The pattern starts with numbers increasing from `1` to `5` and then decreasing back to `1`.
With each new row, the pattern shifts to the right and the sequence becomes shorter.

This program demonstrates **loop control, pattern logic, and proper spacing**.

Example output for `n = 5`:

```
1 2 3 4 5 4 3 2 1 
 1 2 3 4 3 2 1 
  1 2 3 2 1 
   1 2 1 
    1 
```

---

## How the Program Works

### 1. Pattern Size

The variable `n` determines how many rows the pattern will have.

```javascript
let n = 5;
```

---

### 2. Outer Loop (Rows)

The outer loop controls how many rows will be printed.

```javascript
for (let i = 0; i < n; i++)
```

---

### 3. Leading Spaces

Before printing numbers, spaces are added to shift the pattern to the right.

```javascript
for (let s = 0; s < i; s++) {
  space += " ";
}
```

Each row adds one extra space.

---

### 4. Increasing Numbers (Left Side)

The first part of the pattern prints numbers from **1 up to a decreasing limit**.

```javascript
for (let j = 0; j < n - i; j++) {
  left += (j + 1) + " ";
}
```

---

### 5. Decreasing Numbers (Right Side)

The second part prints numbers in **reverse order**.

```javascript
for (let j = n - i - 2; j >= 0; j--) {
  right += (j + 1) + " ";
}
```

---

### 6. Combine and Print

Both parts are combined and printed using `console.log`.

```javascript
console.log(space + left + right);
```

---

## Code

```javascript
// Pattern Program

let n = 5;

for (let i = 0; i < n; i++) {

  // print leading spaces
  let space = "";
  for (let s = 0; s < i; s++) {
    space += " ";
  }

  // first half of numbers
  let left = "";
  for (let j = 0; j < n - i; j++) {
    left += (j + 1) + " ";
  }

  // second half of numbers
  let right = "";
  for (let j = n - i - 2; j >= 0; j--) {
    right += (j + 1) + " ";
  }

  console.log(space + left + right);
}
```

---

## How to Run

1. Install **Node.js**
2. Save the program as `pattern.js`
3. Open the terminal in the project folder
4. Run the command:

```
node pattern.js
```

---

## Concepts Used

* Nested loops
* Pattern printing logic
* String concatenation
* JavaScript console output

---

## Author

This program was created as a **practice exercise for learning JavaScript loops and pattern problems**.
