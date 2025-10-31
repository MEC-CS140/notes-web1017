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

// let isEven; //boolean value

// let myEvenNum = 2 
// isEven = 2 % myEvenNum == 0
// console.log(isEven);

// isEven = 5 % myEvenNum == 0
// console.log(isEven);

// let isOdd = 5 % myEvenNum > 0
// console.log(isOdd);


// let islarger = 10 == 10
// console.log(islarger);

// console.log(10 % 2);
// console.log(11 % 2);

// console.log(10 % 2 == 0); //even
// console.log(11 % 2 == 0); //odd



// let str1 = "Hello" 
// let str2 = " World"
// console.log(str1);
// console.log(str2);
// console.log("Hello" + " World")
// console.log(str1 + " " + str2)
// console.log(str1 + str2);



// console.log("Hello" + " " + "World"); //another way to do this

let helloStr = "Hello "
let worldStr = "World"
let bigStr = "Big "

console.log(helloStr + worldStr);
console.log(helloStr + bigStr + worldStr);

//Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// console.log(`${helloStr} ${bigStr} ${worldStr}`)
// console.log(`Hello ${bigStr} World`)

// console.log(helloStr + 1);

// console.log("1" + 1);

// let mySum = 1 + 1
// console.log("The sum is " + mySum) 
// console.log("The sum is " + 1 + 1) 


// console.log(`The sum is  ${1 + 1}`) //another template literal example

let myBaseNum = 100
console.log(++myBaseNum)
// console.log(++myBaseNum)
// console.log(++myBaseNum)
// console.log(++myBaseNum)
// console.log(++myBaseNum)
// console.log(++myBaseNum)

console.log(--myBaseNum)

console.log(myBaseNum)

// console.log(--myBaseNum)
// console.log(--myBaseNum)
// console.log(--myBaseNum)
// console.log(--myBaseNum)
// console.log(--myBaseNum)
// console.log(--myBaseNum)


/// If Statements

if (5 < 500){
    console.log("This comparison is true");   
}

else {
    console.log("This comparison is false");
    
}

myEvenNum = 2
console.log(11 % myEvenNum);
console.log(11 % myEvenNum == 0);

isEven = 11 % myEvenNum == 0 //saving the boolean to a varible

if (isEven) {
    console.log("The number is even");
}

else {
    console.log("The number is odd");
}



// let password = "test"
// let input = prompt("Enter password") //prompt gets user input and saves it to input variable
// console.log(input);


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

let clicknumber = 0

function clickme(){
    alert("Hi!!")
}

function increase() {
    ++clicknumber
    alert(clicknumber)
}

function decrease(){
    --clicknumber
    alert(clicknumber)
}

function checkEvenOrOdd()
{

    if(clicknumber % 2 == 0){

        alert(clicknumber + " is EVEN")
    }
    else{
        
        alert(clicknumber + " is ODD")

    }


}