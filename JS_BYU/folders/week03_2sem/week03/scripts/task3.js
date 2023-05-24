/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    const sum = parseInt(number1) + parseInt(number2);
    return sum;
    
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
function addNumbers() {
    firstNumber = document.getElementById("addend1").value;
    secondNumber = document.getElementById("addend2").value;
    const sum = add(firstNumber, secondNumber);
    document.querySelector("#sum").value = sum;
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(number1, number2) {
    const subtract = parseInt(number1) - parseInt(number2);
    return subtract;
}
const subtractNumbers = function() {
    firstNumber = document.getElementById("minuend").value;
    secondNumber = document.getElementById("subtrahend").value;
    const difference = subtract(firstNumber, secondNumber);
    document.querySelector("#difference").value = difference;
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => parseInt(number1 * number2);

const multiplyNumbers = function() {
    firstNumber = document.getElementById("factor1").value;
    secondNumber = document.getElementById("factor2").value;
    const product = multiply(firstNumber, secondNumber);
    document.querySelector("#product").value = product;
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const division = (number1, number2) => parseInt(number1 / number2);

const divideNumbers = function() {
    firstNumber = document.getElementById("dividend").value;
    secondNumber = document.getElementById("divisor").value;
    const quotient = division(firstNumber, secondNumber);
    document.querySelector("#quotient").value = quotient;
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentData = new Date();
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const yearData = currentData.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = yearData;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = numbers;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddNumbs = numbers.filter(numb => numb % 2 == 1 );
document.querySelector("#odds").innerHTML = oddNumbs;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenNumbs = numbers.filter(numb => numb % 2 == 0);
document.querySelector("#evens").innerHTML = evenNumbs;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sum = numbers.reduce((total, counter) => total += counter,0);
document.querySelector("#sumOfArray").innerHTML = sum;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplying = numbers.map(counter => counter *= 2);
document.querySelector("#multiplied").innerHTML = multiplying;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumAndMultiply = numbers.map(counter => counter *= 2).reduce((total, counter) => total += counter);
document.querySelector("#sumOfMultiplied").innerHTML = sumAndMultiply;
