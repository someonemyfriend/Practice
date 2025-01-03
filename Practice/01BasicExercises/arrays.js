// 01.-----------------------------------------------------------------------------

// function input(arr) {

// let firstIndexChar = arr[0];
// console.log(firstIndexChar);

// let last =arr[ arr.length - 1];
// console.log(last);

// let sum = +firstIndexChar + +last;
// console.log(sum);

// }

// input(['20', '30', '40']);

// 02.-----------------------------------------------------------------------------

// function dayOfWeek(num) {
//     let arr = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun' ];
//     if(num < 0 || num > arr.length) {
//         console.log('Invalid day!');
//     } else {
//         console.log(arr[num-1]);
//     }
// }
// dayOfWeek(9);

// 03.-----------------------------------------------------------------------------

// 3. Reverse an Array of Numbers

// Receive a number n and an array of elements, create a new array with n numbers,
// reverse it and print its elements on a single line, space separated.

// Examples

// Input                           Output
// 3, [10, 20, 30, 40, 50]         30 20 10
// 4, [-1, 20, 99, 5]              5 99 20 -1
// 2, [66, 43, 75, 89, 47]         43 66

//-----------------------------------------------------------------------------


// function reverse(num, arr){

//     let newArray = []; 
//     let indexCount = 0;
//     for(let i = num-1; i >= 0 ; i--) {
//        newArray[indexCount] = arr[i];
//        indexCount++;
//         // console.log(arr[i]);
//     }
//     console.log(newArray);
// }

// reverse(3, [10, 20, 30, 40, 50]);

// 04.-----------------------------------------------------------------------------

// function reverseString(arr) {

//     let backIndex = arr.length - 1;
//     for(let i = 0; i < arr.length / 2; i++) {
//       //  console.log(arr[i]);
//       //  console.log("this " + arr[backIndex]);
//       let temp = arr[i];
//       arr[i] = arr[backIndex]; 
//       arr[backIndex] = temp;
//       backIndex = backIndex - 1;

//     }
//     console.log(arr);
// }

// reverseString(['a', 'b', 'c', 'd', 'e']);

// 01.-----------------------------------------------------------------------------

// function sum(arr) {
//    let first = arr[0];
//    let last = arr[arr.length-1];
//    let sum = Number(first) + parseInt(last);
//    console.log(sum);
// }

// sum(["20", "30", "40"]);

// 02.-----------------------------------------------------------------------------

// function dayOfWeek(number) {
//   let week = ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
//   let seeTheDay = number - 1;

//   if (seeTheDay >= 0 && seeTheDay <=6){
//     return week[seeTheDay];
//   } else {
//     return "Invalid Day!"
//   }


// }

// console.log(dayOfWeek(8));

// 03.-----------------------------------------------------------------------------

// function reverseArr(num, arr) {
 
//   let newArr = [];

//   for(let i = 0; i < num; i++) {
//       newArr.push(arr[i]);
//   }

//   newArr.reverse();
//   console.log(newArr);

// }

// reverseArr(3, [10, 20, 30, 40, 50]);


// 03.-----------------------------------------------------------------------------


// function reverseArr(num, arr) {
 
//   let newArr = [];

//   for(let i = num-1; i >= 0; i--) {
//       newArr.push(arr[i]);
//   }


//   console.log(newArr);

// }

// reverseArr(3, [10, 20, 30, 40, 50]);

// 04.-----------------------------------------------------------------------------


// function swap(arr) {
  
//   for(let i = 0; i < arr.length / 2; i++ ) {
//     let last = arr.length - 1 - i;
//     let temp = arr[i];
//     arr[i] = arr[last];
//     arr[last] = temp;        
//   }
//   return arr;
// }

// console.log(swap(["33", "123", "0", "dd"]));

// 05.-----------------------------------------------------------------------------
// even = cheten

// function arr(arr) {

//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     let beNumber = Number(arr[i]);

//     if(beNumber % 2 == 0) {
//       sum += beNumber;
//     }

//   }
//   console.log(sum);

// }

// arr(["2", "4", "6", "8", "10"]);


// 06.-----------------------------------------------------------------------------

// function arr(arr) {

//   let even = 0;
//   let odd = 0;
//   for(let i = 0; i < arr.length; i++) {
//     let beNumber = Number(arr[i]);

//     if(beNumber % 2 == 0) {
//       even += beNumber;
//     }
//     else {
//       odd += beNumber;
//     }

//   }
//   let subtraction = even - odd;

//   return subtraction;

// }

// console.log(arr([3,5,7,9]));

// 07.-----------------------------------------------------------------------------


// function equal(arr1, arr2) {

// let isEqual = true;
// let sum = 0;
// let seeIndex = null;
// for(let i = 0; i < arr1.length; i++) {
//   if(arr1[i] == arr2[i]) {
//     sum += Number(arr1[i]);

    
//   } else {
//     isEqual = false;
//     seeIndex = i;
//   }
// }

// if(isEqual == true) {
//   console.log(sum);
// } else {
//   console.log(seeIndex);
// }
// }

// equal(["10", "20", "30"], ["10","20","30"]);

// 08.-----------------------------------------------------------------------------

// function condense(arr) {
//   let newArray = [];
//   // let n = 0;

//   while(arr.length > 1) {
      
//     for(let i = 0; i < arr.length-1; i++) {
      
//       // n += arr[i] + arr[i+1];
//       let newNumber = arr[i] + arr[i+1];
//       newArray.push(newNumber);
//     }
//     arr = newArray;
//     newArray = [];
//   }

// console.log(arr[0]);
// }

// condense([1]);

// 09.-----------------------------------------------------------------------------

// function printElement(arr, num) {

//   newArr = [];

//   for(let i = 0; i < arr.length; i = i+num ) {
//     newArr.push(arr[i]);
//   }
//   console.log(newArr);
// }

// printElement(['5','15','31','14','20'], 2);

// 10.-----------------------------------------------------------------------------

// function removeElement(arr) {
//   let newArray = [];
//   let count = 0;
//   for(let i = 0; i < arr.length; i++) {
//     count++;
//     if(arr[i] == "add") {
//       newArray.push(count);
//     }
//     else if(arr[i] == "remove") {
//       count--;
//       newArray.pop();
//     }
//   }
//   console.log(newArray);
// }
// removeElement(['add','add','remove', 'add', 'add']);

// 11.-----------------------------------------------------------------------------




















