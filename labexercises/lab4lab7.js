// this function logs the sum of two numbers to the console

function sum(a, b) {
   // console.log(a + b);
}

//sum(5, 10);
//sum(20, 30);

// create the Test

if (sum(2, 4) != 6) {
    throw new Error ('Test failed')}

//Write the code 
function sum(a, b) {
    return a + b;
}

console.log('All tests passed.');

function subtract(z, y) {
    console.log(z - y);
}

subtract(15, 5);
subtract(50, 20);

function multiply(x, y) {
    console.log(x * y);
}

multiply(4, 5);
multiply(7, 8);

function divide(c, d) {
    console.log(c / d);
}   

divide(20, 4);
divide(100, 5);

function personName(){
    return "Kingsley"
    }

console.log("Hello " + personName())