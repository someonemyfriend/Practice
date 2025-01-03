// function hello() {
//     let num = 100;
//     //console.log("Hello, World!");
//     console.log(num);

//     let num2 = 3.15;
//     console.log(num2);
// }

// hello();

// **********************************************

// function printName(name){
//     console.log(name);
// }

// printName('Ivan');

// **********************************************

// function f(text, inte, realNum){
//     console.log(text);
//     console.log(inte);
//     console.log(realNum);
// };

// f("Ivan", 200, 3.14);

// **********************************************

// function f(city, degrees){
//     console.log("Today in " + city + " it is " + degrees + " degrees.");
// };

// f("Sofia", 29);

// **********************************************

// function f(num){
//     let sum = num * 0.621371;
//     console.log(sum);
// };

// f(10.5);

// **********************************************

// function f(numOne, numTwo){
//     let sum = numOne + numTwo;
//     console.log("Sum: " + sum);
    
//     let difference = Math.abs(numOne - numTwo);
//     console.log("Difference: " + difference);

//     let product = numOne * numTwo;
//     console.log("Product: " + product);

//     let average = (numOne + numTwo) / 2;
//     console.log("Average: " + average);
// };

// f(21, 1);

// **********************************************

// function f(a) {
//  let calculate = a * a;
//  console.log(calculate);
// }

// f(10);

// **********************************************

// function intMinutes(totalMinutes) {
//     let hours = Math.floor(totalMinutes / 60);
//     const min = totalMinutes % 60;
//     // console.log(hours + ":" + min);
//     if (hours < 10) {
//         if (min < 10) {
//             console.log("0" + hours + ":" + min + "0");
//         } else {
//             console.log("0" + hours + ":" + min);
//         }
//     } else {
//         if (min < 10) {
//             console.log(hours + ":" + min + "0");
//         } else {
//             console.log(hours + ":" + min);
//         }
//     }
// };

// intMinutes(35);

// **********************************************

// function paint(num) {

//     let red = num / 4;
//     console.log("Red: " + red);
//     console.log("Yellow: " + num);
//     let white = num + num;
//     console.log("White: " + white);

//     let total = red + num + white;
//     console.log("Total: " + total);

// }

// paint(42);

// **********************************************

// function euro(num) {
//     let result = num * 1.95583;
//     console.log(result.toFixed(2));
// }

// euro(0.51);


// **********************************************

// function speed(distanceInMeters, hours, minutes, seconds) {
    
//     let hoursToSeconds = hours * 3600;
//     let minutesToSeconds = minutes * 60;
//     let sumOfAllMinutes = hoursToSeconds + minutesToSeconds + seconds;

//     let speed = distanceInMeters / sumOfAllMinutes;

//     console.log(speed.toFixed(6));
// }

// speed(600, 7, 35, 55);


// **********************************************

// Example: Calculate 10% of 80.
// Let 10% of 80 = X
// 10/100 * 80 = X
// X = 8
//---------------------------------------------------------------
// function office(num) {

//     let secondOfficeDiscount = (20/100) * num;
//     let secondOffice = num - secondOfficeDiscount;
//     let sumOfFirstTwo = num + secondOffice;

//     let thirdDiscount = (15/100) * sumOfFirstTwo;
//     let third = sumOfFirstTwo + thirdDiscount;

//     let total = third + secondOffice + num;
//     console.log(total.toFixed(3));


// }

// office(455.30);


// **********************************************

function solve(num1, num2) {
    let bmi = (num1 / num2**2);
    console.log(bmi.toFixed(2));
}

solve(85, 1.80);


// **********************************************

// function solve(num1, num2) {
//     let daily = num1/7/num2;
//     console.log(daily.toFixed(2));
// };

// solve(3150, 10);


// **********************************************

// function solve(num1, num2) {
//     let total = (num1 * num2) + 10;
//     console.log(total.toFixed(2));
// }

// solve(150, 1.1);


// **********************************************

// function solve(num1, num2) {
//     let speed = num1 /num2;
//     console.log(speed.toFixed(2));
// };

// solve(200, 2);

// **********************************************

// function solve(num1, num2) {
//     let speed = num1 /num2;
//     console.log(speed.toFixed(2));
// };

// solve(500, 40);


// **********************************************

// function calculateCircumference(radius) {
//     let result =  2 * Math.PI * radius;
//     console.log(result.toFixed(2));
//   }

//   calculateCircumference(10);