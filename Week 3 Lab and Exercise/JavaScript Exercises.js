// ================================
// Exercise 1: Variables and Data Types
// ================================
console.log("Exercise 1: Variables and Data Types");

let name = "Kritika";
let age = 20;
let email = "kritika@gmail.com";

console.log("Name:", name);
console.log("Age:", age);
console.log("Email:", email);


// ================================
// Exercise 2: Functions and Conditional Statements
// ================================
console.log("\nExercise 2: isAdult(age)");

function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log("Age 20:", isAdult(20));
console.log("Age 15:", isAdult(15));


// ================================
// Exercise 3: Loops (1 to 10)
// ================================
console.log("\nExercise 3: Counting from 1 to 10");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// ================================
// Exercise 4: Arrays and Loops
// ================================
console.log("\nExercise 4: Favorite Fruits");

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// ================================
// Exercise 5: Conditional Statements and Functions
// ================================
console.log("\nExercise 5: isEven(number)");

function isEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("Number 10:", isEven(10));
console.log("Number 7:", isEven(7));


// ================================
// Exercise 6: Conditional Statements and Loops
// ================================
console.log("\nExercise 6: Even or Odd from 1 to 20");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is Even");
  } else {
    console.log(i + " is Odd");
  }
}


// ================================
// Exercise 7: Functions, Arrays, and Loops
// ================================
console.log("\nExercise 7: Sum of Array");

let numbers = [5, 10, 15, 20];

function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log("Array:", numbers);
console.log("Sum:", sumArray(numbers));


// ================================
// Exercise 8: Nested Loops (Multiplication Table)
// ================================
console.log("\nExercise 8: Multiplication Table (1 to 10)");

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
  console.log("--------------------");
}
