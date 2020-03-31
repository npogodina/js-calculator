
// USER INPUT
// Please, specify two numbers and the math operation in Input object below:

const input = {
  num1: 6,
  num2: "70",
  operation: "multiply"
}

// FUNCTIONS

function intro(operation, num1, num2) {
  console.log("Welcome to Awesome JavaScript Calculator");
  console.log("========================================");
  console.log("You selected...");
  console.log(`Math operation: ${operation}`);
  console.log(`Number 1: ${num1}`);
  console.log(`Number 2: ${num2}`);
}

function validateMathOperation(operation) {
  valid = {
    add: "+",
    "+": "+",
    subtract: "-",
    "-": "-",
    multiply: "*",
    "*": "*",
    "divide": "/",
    "/": "/"
  }

  if (!(operation in valid)) throw new Error(`The operation requested is invalid: ${operation}.`);
  return valid[operation];
}

function validateNum(num) {
  if (isNaN(num) || num === "" || num === true || num === false) {
    throw new Error(`Invalid number: ${num}.`);
  }
  return Number(num); // converting String to Number
}

function compute(operation, num1, num2) {
  let result;
  switch(operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  return result;
}

// LOGIC
intro(input.operation, input.num1, input.num2);

let operation = validateMathOperation(input.operation);
let num1 = validateNum(input.num1);
let num2 = validateNum(input.num2);

if (operation === "/" && num2 === 0) throw new Error(`You cannot divide by zero.`);

let result = compute(operation, num1, num2);

console.log(`${num1} ${operation} ${num2} = ${result}`);