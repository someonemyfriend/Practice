//=====================================================
//  01. Write a JS function that takes one string parameter 
// and prints on two lines the length of the parameter and then the unchanged parameter itself


// function solve(str){
//     console.log(str.length);
//     console.log(str);
// }

// solve('Hello, JavaScript!')

//======================================================
//  02. Write a JS function that takes three string arguments as an input. Calculate the sum 
// of the length of the strings and the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console in two lines.

// function solve(str, str2, str3){
//     let sumChart = str.length + str2.length + str3.length
//     console.log(sumChart);
//     let average = Math.floor(sumChart / 3);
//     console.log(average);
// }

// solve('chocolate', 'ice cream', 'cake');

//======================================================
//  03. Write a function that takes three number arguments as input and 
// finds the largest of them. Print the following text on the console: `The largest number is {number}.`.
//The input comes as three number arguments passed to your function.
//The output should be printed to the console.

// function solve(num1, num2, num3){
//     let result;

//     if(num1 > num2 && num1 > num3){
//         result = num1;
//     } else if (num2 > num1 && num2 > num3){
//         result = num2;
//     } else if (num3 > num1 && num3 > num2){
//         result = num3;
//     }

//     console.log(`The largest number is ${result}`)
// }

// solve(5, -3, 16);

//======================================================
//  04. Circle Area

// function solve(arg) {
//     let inputType = typeof(arg);
//     if(typeof arg === 'number'){
//         let area = (Math.PI * Math.pow(arg, 2)).toFixed(2);
//         console.log(area);
//     } else {
//         console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
//     }
// }

// solve(5);

//======================================================
//  05. Math Operations

// function solve(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case '+': result = num1 + num2; break;
//         case '-': result = num1 - num2; break;
//         case '/': result = num1 / num2; break;
//         case '*': result = num1 * num2; break;
//         case '%': result = num1 % num2; break;
//         case '**': result = num1 ** num2; break;
//     }
//     console.log(result);
// }
// solve(5, 6, '+');

//======================================================
//  06. Math Operations

// function solve(n, m){
//     let num1 = Number(n);
//     let num2 = Number(m);

//     let result = 0;
//     for (let i = num1; i <= num2; i++){
//         result += i;
//         //return result;
//     }
//     console.log(result);
// }

// solve('1', '5');

//======================================================
//  07. Day of week

// function solve(day){
     
//     switch (day) {
//         case 'Monday': console.log(1); break;
//         case 'Friday': console.log(5); break;
//         case 'Tuesday': console.log(2); break;
//         case 'Wednesday': console.log(3); break;
//         case 'Thursday': console.log(4); break;
//         case 'Saturday': console.log(6); break;
//         case 'Sunday': console.log(7); break;
//         default:
//     console.log("error");
//     }
// }

// solve('Monday');

//======================================================
//  08. Days in month

// function solve() {

// }
// solve(1, 2012);

// function daysInMonth (month, year) {
//     let daysInMonthAre = new Date(year, month, 0).getDate();
//     console.log(daysInMonthAre);
// }

// // July
// daysInMonth(7,2009); // 31
// // February
// daysInMonth(2,2009); // 28

//======================================================
//  09. Days in month

// function squareOfStars(num) {
    
//     for(let i = 0; i < num; i++){

//         let string = "";
//        // console.log('\n');
//        for(let j = 0; j < num; j++){
//             string += '* ';
//        }
//        console.log(`${string}`);
//     }
    
// }
// squareOfStars(5);




