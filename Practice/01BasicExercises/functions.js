// 01.-----------------------------------------------------------------------------

// function smallestOfThreeNumbers(num1, num2, num3) {

//     if(num1 < num2 && num1 < num3) {
//         console.log(num1);
//     }  else if(num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else if(num3 < num1 && num3 < num2) {
//         console.log(num3);
//     }

// }

// smallestOfThreeNumbers(2, 5, 3);

// 02.-----------------------------------------------------------------------------

// function sum(a, b) {
//     let sum = a + b;
//     return sum;
// }

// function substract(a, b, c) {
//     let sum1 = sum(a, b);
//     let substract = sum1 - c;
//     return substract;
// }

// console.log(substract(42, 58, 100));

// 03.-----------------------------------------------------------------------------

// function characters(ascii1, ascii2) {

//     let begining = ascii1.charCodeAt(0);
//     let end = ascii2.charCodeAt(0);

//     if(begining > end) {
//         begining = ascii2.charCodeAt(0);
//         end = ascii1.charCodeAt(0);
//     } 
   

//     let line = '';
//     for(let i = begining + 1; i < end; i++) {
       
//         let see = String.fromCharCode(i);
//         line += see + " "; 
//     }
//     console.log(line);

// }

// characters('#', ':');

// 04.-----------------------------------------------------------------------------

// function addAndEvenSum(int) {
//     let oddNumber = 0;
//     let evenNumber = 0;
//     while(int !== 0) {
//         let lastNumber = int % 10;
//         int = Math.floor(int / 10);
//         if(lastNumber % 2 == 0) {
//             evenNumber += lastNumber;
//         } else {
//             oddNumber += lastNumber;
//         }
//     }
//     console.log('Odd sum = ' + oddNumber + ', Even sum = ' + evenNumber);
// }
// addAndEvenSum(3495892137259234);

// 05.-----------------------------------------------------------------------------

// function  palindrome(arr) {
    
//     for(let i = 0; i < arr.length; i++) {
//         let number = arr[i].toString();
//        // console.log(typeof number);
//        if(isPalindrome(number)){
//         console.log(true);
//        } else {
//         console.log(false);
//        }
        

//     }

// }

// function isPalindrome(word) {
 
//     let front = 0;
//     let back = word.length - 1;

//     for( let i = 0; i<= (word.length / 2); i++){
//         if(word.charAt(front) !== word.charAt(back)) {
//             return false;
//         }
//         front++;
//         back--;
        
//     }

//     return true;
// }

// palindrome([123, 323, 421, 121]); 

// 06.-----------------------------------------------------------------------------


// function checkPass(pass) {

//     if(pass.length < 6 || pass.length > 10) {
//         console.log(false);
//     }
    
//     let az09 = /^[a-zA-Z0-9]+$/.test(pass);

//     if(az09 == false) {
//         console.log(false);
//     }

//     let count = 0;
//     for(let i = 0; i <= pass.length - 1; i++){
        
//         if(/^[0-9]+$/.test(pass.charAt(i))) {
//             count++;
//         }
//     }
//     if(count < 2) {
//         console.log(false);
//     }

// }

// checkPass('12aaaaa');

//todo write this function with array and return array with all errors-texts


// 07.-----------------------------------------------------------------------------

// function shortestAndLongest(str) {
//     let shortest = null;
//     let longest = '';

//     const words = str. split(/\W/).filter(o=>o.length>0);
//     // console.log(words);
//     for(let i = 0; i < words.length; i++) {
//         // console.log(words[i] + words[i].length);

//         if(words[i].length > longest.length){
//           longest = words[i]; 

//         }
        
//         if(shortest == null || words[i].length < shortest.length) {
//             shortest = words[i]; 
//         }

//     }
//     console.log(shortest);
//     console.log(longest);

// }

// shortestAndLongest('Lorem Ipsum is dummy text of the typesetting industry.');

// 08.-----------------------------------------------------------------------------

// function perfectNumber(num) {

//     let halfOfNum = Math.floor(num/2);
//     let perfectNumbers = [];
//     let sum = 0;
//     for(let i = 1; i<=halfOfNum; i++) {
//         if(num % i == 0) {
//             perfectNumbers.push(i);
//             sum += i
//         }
//     }
//     console.log(sum + '  ' + perfectNumbers);
// }

// perfectNumber(6);


// 09.-----------------------------------------------------------------------------

// function progressBar(num) {

//     let realNum = num / 10;
//     let line = "[";
//     for(let i = 1; i <= 10; i++ ) {
//         if(i <= realNum) {
//             line += '%';
//         } else {
//             line += '.'
//         }
//     }
// console.log(line + "]");
// }
// progressBar(100);

// 10.-----------------------------------------------------------------------------


function factorial(num1, num2) {

    let fack1 = fact(num1);
    let fack2 =fact(num2);

    let divide = fack1 / fack2;

    console.log(divide.toFixed(2));
} 

factorial(6, 2);

function fact(oneNumber) {
    let multiply = 1;
    for(let i = 1; i <= oneNumber; i++) {
        multiply *= i;
    }
    return multiply;
}