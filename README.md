# Reverse Pascal Triangle Pattern in JavaScript

This project demonstrates how to generate a **Reverse Pascal Triangle Pattern** using JavaScript.

The program prints Pascal’s Triangle **from top row to bottom row in reverse order**, where each number represents a **binomial coefficient**. This problem is commonly asked in **coding assessments and technical interviews** to evaluate knowledge of loops, mathematical logic, and pattern printing.

---

## 📌 Problem Statement

Write a program that prints a **Reverse Pascal Triangle Pattern** for a given number of rows.

Example when `rows = 5`:

```text
1 4 6 4 1
 1 3 3 1
  1 2 1
   1 1
    1
```

---

## 🧠 Logic Used

Pascal’s Triangle is based on the **Binomial Coefficient**:

[
C(n,r) = \frac{n!}{r!(n-r)!}
]

Instead of computing factorials repeatedly, we use an **iterative relation**:

[
C(n,r+1) = C(n,r) \times \frac{n-r}{r+1}
]

### Steps:

1. Start printing rows from **`rows - 1` down to `0`**.
2. Print **leading spaces** for alignment.
3. Start each row with value **1**.
4. Compute the next value using the relation above.
5. Continue until the row is complete.

This approach reduces unnecessary calculations and keeps the algorithm efficient.

---

## 💻 Implementation

```javascript
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

    // create leading spaces
    let line = " ".repeat(rows - 1 - row);

    let value = 1;

    for (let col = 0; col <= row; col++) {
      line += value + " ";

      // calculate next Pascal value
      value = (value * (row - col)) / (col + 1);
    }

    console.log(line.trimEnd());
  }
}

// Example
printReversePascalTriangle(5);
```

---

## ⚙️ How to Run

1. Install **Node.js** on your system.
2. Save the file as:

```
reversePascalTriangle.js
```

3. Run the program:

```bash
node reversePascalTriangle.js
```

---

## 📂 Project Structure

```
reverse-pascal-triangle-pattern
│
├── reversePascalTriangle.js
└── README.md
```

---

## 🚀 Features

* Clean and optimized JavaScript implementation
* Efficient binomial coefficient calculation
* Input validation for safe execution
* Reusable function-based structure
* Beginner-friendly explanation

---

## 📚 Concepts Covered

* JavaScript Nested Loops
* Pattern Printing
* Pascal Triangle Mathematics
* Binomial Coefficient Optimization

---

## 👨‍💻 Author

**Shivansh Dubey**

B.Tech in Computer Science and Engineering


Technologies:
Java • JavaScript • React • MySQL
