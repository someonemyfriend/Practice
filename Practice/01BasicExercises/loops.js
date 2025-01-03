// 01. ---------------------------------------

// function printNum() {
//     for (let i = 1; i<= 100; i++) {
//         console.log(i);
//     }
// }

// printNum();

// 02. ---------------------------------------

// function reverseOrder(num) {
//     for (let i = num; i >= 0; i--) {
//         console.log(i);
//     }
// }

// reverseOrder(5);

// 03. ---------------------------------------

// function from1toNthrough2(num) {
//     for (let i = 1; i <= num; i += 2) {
//         console.log(i);
//     }
// }

// from1toNthrough2(10);

// 04. ---------------------------------------

// function from1toNthroughM(n, m) {
//     for (let i = 1; i <= n; i += m) {
//         console.log(i);
//     }
// }

// from1toNthroughM(8, 2);

// 05. ---------------------------------------

// function letter(word) {
//     for (let i = 0; i < word.length; i++) {
//         console.log(word[i]);
//     }
// }

// letter("hello");

// 06. ---------------------------------------

// function letter(word) {
//     let sum = 0;

//     for (let i = 0; i < word.length; i++) {
        
//         if(word[i] === "a") {
//             sum += 1;
//         }
//         if(word[i] === "e") {
//             sum += 2;
//         }
//         if(word[i] === "i") {
//             sum += 3;
//         }
//         if(word[i] === "o") {
//             sum += 4;
//         }
//         if(word[i] === "u") {
//             sum += 5;
//         }

//     }
//     console.log(sum);
// }

// letter("hi");


// 07. ---------------------------------------

//  function clock() {
//     for (let i = 0; i <= 23 ; i++) {
//         for(let j = 0; j <= 59; j ++) {
//             console.log(i + ":" + j);
//         }
        
//     }
  
// }

// clock();
    
// 08. ---------------------------------------

//  function multiplicationTtable() {
//     for (let i = 1; i <= 10 ; i++) {
//         for(let j = 1; j <= 10; j ++) {
//             let multiplayer = i * j;
//             console.log(i + " * " + j + " = " + multiplayer);
//         }
        
//     }
  
// }

// multiplicationTtable();

// 09. ---------------------------------------

// function oddNumbers(numEven) {

//     let counter = 0;
//     let nextEvenNumber = 0;
//     let sum = 0;

//     while ( counter !=  numEven ) {
//         counter++;
//         console.log("counter " + counter);

//         nextEvenNumber = nextEvenNumber + 2;
//         console.log("nextEvenNumber " + nextEvenNumber);

//         sum = sum + nextEvenNumber;
//         console.log("result " + sum);

//     }
    
// }

// oddNumbers(3);

// function second(numOdd) {
// let count = 0;
// let sum = 0;
//     for(let i = 2; i<= (numOdd * 2); i+=2) {
        
        //neka promenlivata i e razvna na 2, zashtoto 2 e pyrvoto chetno s koeto iskame da pochnem
        //posle 2 e po malko ili ravno ot chisloto koeto poluchavame kato vhod i go umnojavame po 2 shoto ako ni iskat 3 chetni chisla => pone 6 pyti das e zavyrti, za da garantirame 3 chetni chisla v poredica 
        //posle kazvane na i da se uvelichi s dwe, za da skochem kym sledvashtoto chetno w poredicata. taka nqma nujda da proverqwame dali i e chetno ili nechetno, predi da go dobawim w sumata. kato i += 2 se sluchva v kraq na body-to на фор лооп
        
//         console.log("chetnete trqbva da sa " + i);
//         sum += i;
//         console.log("sum " + sum);       
//     }
// }
// second(3);

//10. -------------------------------------------

// Function to calculate the factorial of a positive integer
// function calculateFactorial(n) {
//     // Check if the input is a positive integer
//     if (isNaN(n) || n < 0) {
//         return "Please enter a valid positive integer.";
//     } else if (n === 0) {
//         // Factorial of 0 is 1
//         return "The factorial of 0 is 1.";
//     } else {
//         // Initialize factorial variable
//         let factorial = 1;

//         // Loop to calculate the factorial
//         for (let i = 1; i <= n; i++) {
//             factorial *= i; // Multiply each number up to n
//         }

//         // Return the result
//         return `The factorial of ${n} is ${factorial}.`;
//     }
// }

// Example of invoking the function
// let number = parseInt();
// let result = calculateFactorial(3);
// console.log(result);

//11. -------------------------------------------

// function reversal(num) {
//     let lastDigit = num % 10;
    
//     let text1 = num.toString();

//     console.log(typeof text1);
//     let text2 = '' + num;
//     console.log(text2);

//     let text3 = new String(num);
//     console.log(text3);
    
//     // console.log(text3.reverse);
//     let result = '';

//     for( let i = text3.length - 1; i >= 0; i--) {
//        // console.log(text3.charAt(i));
//         result += text3.charAt(i);
       
//     }
//     console.log(result);
// }

// reversal(10203);

//12. -------------------------------------------


// function fibunaci(num) {
//     // Create a new array of size 'n'
//     let series = new Array(num);

//     // Fills all places in array with 0
//     series.fill(0);

//     // Seed value for 1st element
//     series[0] = 0;

//     // Seed value for 2nd element
//     series[1] = 1;

//     let sum = 0;
//     for (let i = 2; i < num; i++) {
//         // Apply basic Fibonacci formulae
//         series[i] = series[i - 1] + series[i - 2];
//         sum += series[i];
//     }

//     // Print the series
//     console.log(series);
//     console.log(sum);
// }

// fibunaci(3);


//13. -------------------------------------------

// function solve(word) {
 
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

// console.log(solve("madam"));

//14. -------------------------------------------

// function armstrong(number) {
//     let stepen = Math.floor(Math.log10(Math.abs(number))) + 1;
//     let sum = 0;
//     let oldNumber = number;
//     while( number !== 0) {
//         let lastNumber = number % 10;
//         sum += Math.pow(lastNumber, stepen);
//         //console.log(lastNumber);
//         number = Math.floor(number / 10);
//     }

//     return sum == oldNumber;
// }

// console.log(armstrong(153));

//15. -------------------------------------------

// function collatz(number) {

//     let result = number;
//     while(number !== 1 ){
//         if(number % 2 == 0){
//             number= number / 2;
            
//         } else {
//             number = (number * 3) + 1;
//         }
//         //console.log(number);
//         result += ' ' + number; 
//     }
//     return result;
// }

// console.log(collatz(6));


//16. -------------------------------------------

// function rectangle(rows, columns) {

//     for (let i = 1; i<= rows; i++) {
//         // console.log('*');
//        if(i==1 || i == rows) {
//             let row = '';
//             for(let j = 0; j < columns; j++) {
//                 row += '*';
//             }
//             console.log(row);
//        } else {
//         let row = '*';
//             for(let j = 0; j < columns - 2; j++) {
//                 row += ' ';
//             }
//             row += "*";
//             console.log(row);
//        }

//     }
// }

// rectangle(3, 4);


//17. -------------------------------------------

// function building(floors, rooms) {


//     for(let i = floors; i>=1; i--){
//        // console.log("*");
//        if(i === floors) {
//         let row = "";
//         for(let o = 0; o<rooms; o++) {
//             row += "L"+ i + o + " ";
//         }
//         console.log(row);
//        } else {

//             if( i % 2 == 0 ) {
//                // console.log("ofisi");
//                 let row = "";
//                 for(let o = 0; o<rooms; o++) {
//                     row += "O"+ i + o + " ";
//                 }
//                 console.log(row);
//             } else{
//                 //console.log("apartamenti");
//                 let row = "";
//                 for(let o = 0; o<rooms; o++) {
//                     row += "A"+ i + o + " ";
//                 }
//                 console.log(row);
//             }

//                 // let row = "";
//                 // for(let j = 0; j<rooms; j++){
//                 //     row += '*';
//                 // }
//                 // console.log(row);
//         }
//     }
// }



// building(6, 4);

//------------------------------------------------------------------

// function building(floors, rooms) {


//     for(let i = floors; i>=1; i--){
//        if(i === floors) {
//         drawFloor("L", rooms, i);
//        } else {

//             if( i % 2 == 0 ) {
//                 drawFloor("O", rooms, i);
//             } else{
//                 drawFloor("A", rooms, i);
//             }
//         }
//     }
// }

// function drawFloor(nameOfTheFloor, rooms, i) {
//     let row = "";
//     for(let o = 0; o<rooms; o++) {
//         row += nameOfTheFloor + i + o + " ";
//     }
//     console.log(row);
// }

// building(6, 4);

//18. -------------------------------------------

// function magicNumber(startNum, endNum, magicNum) {
//     let counter = 0;
//     let found = false;
//     for(let i = startNum; i <= endNum; i++ ){
        
//         for(let j = startNum; j<= endNum; j++) { 
          
//             if(found === false) {

//                 counter++;
//                 let sum = i + j;
//                 if(sum === magicNum) {
//                     found = true;
//                     console.log("Combination " + counter + " - ( " + i + " + " + j + " = " + sum + ") " );
//                 }

//             }

//         }
    
//     }

//     if( found === false) {
//         console.log( counter + " combination" + " - neither equals " + magicNum);
//     }


// }

// magicNumber(1, 2, 3);

//19. -------------------------------------------------------------------------------------------------------------------------


// function equipment(amountOfMoney, students, priceOfLightsaber, priceOfRobes, priceOfBelt) {

//     let findProcent = students * 10 / 100;
//     console.log('findProcent ' + Math.ceil(findProcent));

//     let countOfSix = 0;
//     for (let i = 6; i <= students; i += 6) {
//         countOfSix++;
//     }

//     let sum = priceOfLightsaber * (students +  Math.ceil(findProcent)) + priceOfRobes * students + priceOfBelt * (students - countOfSix);

//     if(sum <= amountOfMoney) {
//         console.log(sum + ' ok');
//     } else {
//         console.log(sum + ' no');
//     }


// }

// equipment(100, 42, 12.0, 4.0, 3.0)


// - цялата сума на трена, с която може да похарчи нещата и има запетая след втория знак
// - колко студента има
// - цената за всеки меч, като трябва да е на 10% повече и да се увеличи на по-горното
// - робите
// - коланите   и всеки 6ти е безплатен

// Needed equipment for 2
// padawans:

// sabresPrice * (studentsCount + 10%) +
//  robesPrice * (studentsCount) + 
//  beltsPrice * (studentsCount - freeBelts)

// 1*(3) + 
// 2*(2) + 
// 3*(2) = 

// 13.00
// 13.00 <= 100 – the money will be enough.

//20. -------------------------------------------------------------------------------------------------------------------------

// console.log(1%3);

// console.log(3%3);

// console.log(6%3);

// console.log(6%2);
// console.log(5%3);


// function rage(lostGames, headset, mouse, keyboard, display) {
//     let sum = 0;
//     let counter = 0;
//     for(let i = 1; i <= lostGames; i++) {
//         if(i % 2 == 0) {
//             sum += headset;
//         }
//         if(i % 3 == 0) {
//             sum += mouse;
//         }
//         if(i % 2 == 0 && i % 3 == 0) {
//             sum += keyboard;
//             counter++;
//         }
//         if(counter == 2) {
//             sum += display;
//             counter = 0;
//         }

//     }
//     return sum.toFixed(2);
// }

// console.log("Rage expenses: " + rage(7, 2, 3, 4, 5) + " lv.");


//21. -------------------------------------------------------------------------------------------------------------------------

// function summOddNumbers(n){
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//     console.log(2 * i + 1);
//     sum += 2 * i + 1;
//     }
//     console.log(`Sum: ${sum}`);
// }

// summOddNumbers(5);

//22. -------------------------------------------------------------------------------------------------------------------------

// function ending(num) {

//     for(let i = 1; i <= 1000; i++){
//         let lastDigit = i % 10
//         if(lastDigit === 7) {
//             console.log(i);
//         }
//     }


// }

// ending();


//23. -------------------------------------------------------------------------------------------------------------------------

// function ending(num) {

//     for(let i = 1; i <= 1000; i++){
//         let lastDigit = i % 10
//         if(lastDigit === num) {
//             console.log(i);
//         }
//     }


// }

// ending(6);

//24. -------------------------------------------------------------------------------------------------------------------------

// function encoding(num) {

//     while(num !== 0) {

//         let lastDigit = num % 10;
//         num = Math.floor(num / 10);

//         if (lastDigit === 0) {
//             console.log('ZERO');
//         } else {
            

//             let asciNumber = lastDigit + 33;
    
//             let line = '';
//             for(let i = 0; i < lastDigit; i++) {
//                 let asciChar = String.fromCharCode(asciNumber);
//                 line += asciChar;
//             }
//             console.log(line);
            
//         }

      
//     }
    
    
// }

// encoding(9347439);

//25. -------------------------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// 
// New start - the same exercises 
// 
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// 01. ---------------------------------------
// function numbersPrint() {

//     for(let i = 0; i <= 100; i++ ) {
//         console.log(i);
//     }
// }

// numbersPrint();


// 02. ---------------------------------------

// function reverse(num) {

//     for(let i = num; i >= 0 ; i--) {
//         console.log(i);
//     }
// }

// reverse(10);


// 03. ---------------------------------------

// function numbers1toN(num) {

//     for(let i = 1; i < num; i = i + 2) {
//         console.log(i);
//     }

// }
// numbers1toN(10);

// 04. ---------------------------------------

// function loopN(n, m) {

//     for(let i = 1; i <= n; i=i+m) {
//         console.log(i);
//     }
// }

// loopN(8, 3);

// 05. ---------------------------------------

// function lettersInAWord(string) {
//     for(let i = 0; i<string.length; i++) {
//         console.log(string[i]);
//     }
// }

// lettersInAWord("hello");

// 06. ---------------------------------------

// function sumOfVowels(string) {
//     let points = 0;
//     for(let i = 0; i < string.length; i++){
//         if(string[i] == "a") {
//             points += 1;
//         } 
//         else if (string[i] == "e") {
//             points += 2;
//         }
//         else if (string[i] == "i") {
//             points += 3;
//         }
//         else if (string[i] == "o") {
//             points += 3;
//         }
//         else if (string[i] == "u") {
//             points += 3;
//         }
//     }
//     console.log(points);

// }

// sumOfVowels("zzzz");

// 07. ---------------------------------------

// function clock() {

//     for(let i = 0; i <= 23;i++ ) {
//         for(let j = 0; j <= 59; j++) {
//             console.log(i + " : " + j);
//         }
//     }
// }
// clock();

// 08. ---------------------------------------

// function multiplicationTable() {
//     for(let i = 1; i <= 10; i++) {
//         for(let j = 1; j <= 10; j++) {
//             let result = i * j;
//             console.log( i + " * " + j + " = " + result );
//         }
//     }
// }

// multiplicationTable();

// 09. ---------------------------------------

// function sum(num) {

//     // let sum = 0;
//     // for(let i = 0; i <= num * 2; i=i+2) {
//     //     if( i % 2 == 0){
//     //         sum += i;
//     //     }

//     // }
//     // console.log(sum);

//     let sum = 0;
//     let nextEven = 0
//     for(let i = 0; i < num; i++) {
//         nextEven+=2;
//         sum+=nextEven;
//     }
//     console.log(sum);
// }

// sum(5);

// 10. ---------------------------------------

// function fack(num) {
//     let multyplyNum = 1;
//     for(let i = 1; i <= num; i++) {
//         multyplyNum *= i;
//     }
//     console.log(multyplyNum);
// }

// fack(5);

// 11. ---------------------------------------

// function reversal(num) {

//     let string = num.toString();
//     let newLine = "";
//     for(let i = string.length-1; i>=0; i--) {
//         console.log(string[i]);
//         newLine+=string[i];
//     }

//     console.log(newLine);
// }

// reversal(123);

// 12. ---------------------------------------

// function fibonaci(num) {

//     // how to create fibunaci
//     let n1 = 0;
//     let n2= 1;
//     let nextTerm = 0;
//     let sum = n2;

//     for(let i = 0; i < num-1; i++) {

//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//         sum += nextTerm;
//         console.log("nextTurm " + nextTerm);
//     }

//     console.log(sum);
// }



// fibonaci(5);

// 13. ---------------------------------------

// function palindrome(string) {
 
   
//     for(let i = 0; i < string.length / 2; i++){
//         let last = string.length - 1 - i;
//         if(string.charAt(i) != string.charAt(last)) {
//             return false;
//         }
           
//     }
//     return true;
// }

// console.log(palindrome("rabar"));

// 14. ---------------------------------------

function armstrong(num) {

    while(num > 0) {

        let last = num % 10;
        num = Math.trunc(num / 10);
        console.log(last);

    }


}

armstrong(153);










