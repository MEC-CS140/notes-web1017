// HOW TO UNCOMMENT BLOCKS OF CODE
// CTRL + Forward Slash (button to left of right shift key button)


// console.log(10 % 5);
// console.log(10 % 6);

// let myMultipleNum = 2 

// console.log(2 % myMultipleNum)
// console.log(7 % myMultipleNum)
// console.log(2002 % myMultipleNum)
// console.log(2001 % myMultipleNum)
// console.log(15 % myMultipleNum)


// let str1 = "Hello " + "World"
// console.log(str1);

// console.log("Hello" + " " + "World"); //another way to do this

// let helloStr = "Hello "
// let worldStr = "World"
// let bigStr = "Big "

// console.log(helloStr + worldStr);
// console.log(helloStr + bigStr + worldStr);

//Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// console.log(`${helloStr} ${bigStr} ${worldStr}`)
// console.log(`Hello ${bigStr} World`)

// console.log(helloStr + 1);
// console.log("1" + 1);

let mySum = 1 + 1
console.log("The sum is " + mySum) 
console.log("The sum is " + 1 + 1) 


console.log(`The sum is  ${1 + 1}`) //another template literal example

let myBaseNum = 100
console.log(++myBaseNum)
console.log(--myBaseNum)


let isEven; //boolean value

let myEvenNum = 2 
isEven = 2 % myEvenNum == 0
console.log(isEven);

isEven = 5 % myEvenNum == 0
console.log(isEven);




/// If Statements

if (5 < 500){
    console.log("This comparison is true");   
}

else {
    console.log("This comparison is false");
    
}


// let password = "test"
// let input = prompt("Enter password") //propmt gets user input and saves it to input variable

// let isPassCorrect = input == password
// console.log("Is the password correct?:" + isPassCorrect);


// if (isPassCorrect) {
//     alert("Password is correct")
// } 

// else {
//     alert("Password is incorrect")
// }

// let fTemp = 213
// let celsiusTemp;
// celsiusTemp = (fTemp - 32) / (1.8) //convert fahrenheit to celsius
// console.log(celsiusTemp);


// let isFrozen = celsiusTemp <= 0
// let isBoiling = celsiusTemp >= 100

// console.log("Is water at " + fTemp + "F Frozen?: " + isFrozen );
// console.log("Is water at " + fTemp + "F Boiling?: " + isBoiling );

// if (isFrozen) {
//     alert("Water is freezing at " + fTemp + "F and " + celsiusTemp + "C" )
// } 

// else {
//     alert("Water is NOT freezing at " + fTemp + "F and " + celsiusTemp + "C" )
// }

// if (isBoiling) {
//     alert("Water is boiling at " + fTemp + "F and " + celsiusTemp + "C" )
// } 

// else {
//     alert("Water is NOT boiling at " + fTemp + "F and " + celsiusTemp + "C" )
// }

function clickme() {
    alert("The button was clicked")
}