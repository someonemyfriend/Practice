//01--------------------------------------------------------------

// function arr(one, two) {

//     let isequal = false;

//     if(one.length == two.length) {
//         isequal = true;
//         for(let i = 0; i <= one.length - 1; i++) {
//             console.log(one[i]);
//             console.log(two[i]);
//             if(one[i].length == two[i].length) {

//                 for(let j = 0; j <= one[i].length - 1; j++ ) {
//                     console.log("let see one - " + one[i][j]);
//                     console.log("let see two - " + two[i][j]);
    
//                     if(one[i][j] != two[i][j]) {
//                         isequal = false;
//                         break;
//                     }
//                 }
//             } else {
//                 isequal = false;
//             }

            
//         }
//     }
//     console.log(isequal);
// }

// arr([  [1,3],[2,1,3]  ],      [[1,3], [2,1]]);

//02--------------------------------------------------------------

// function arr(one, two) {
//    let addArray = [];
    
//     for(let i = 0; i <= one.length - 1; i++) {
        
//         addArray[i] = [];
//         for(let j = 0; j <= one[i].length - 1; j++ ) {
           
//             let sum = one[i][j] + two[i][j];
//             addArray[i][j] = sum;
            
//         }
//     } 
      
// console.log(JSON.stringify(addArray));
// }

// arr([  [1,2],[3,4]  ],     [  [2,2],[2,2]  ]);

//03--------------------------------------------------------------

// function arr(one, two) {
//     let addArray = [];
     
//      for(let i = 0; i <= one.length - 1; i++) {
//          // console.log(one[i]);
//          // console.log(two[i]);
//          addArray[i] = [];

//          let cutArray = one[i].split(' ');
//          let cutArrayTwo = two[i].split(' ');
//           for(let j = 0; j <= cutArray.length - 1; j++ ) {
             
            
//              if(cutArray[j] == cutArrayTwo[j]) {
//                 addArray[i][j] = cutArray[j];
                 
//              } else {
//                 addArray[i][j] = "*";
//              }             
//           }
//      } 
       
//  console.log(JSON.stringify(addArray));
//  }
 
//  arr( ["a b c d", "a b c d", "a b c d"], ["k b c k", "a b g d", "a k c d"] );


//00--------------------------------------------------------------

let phoneBook = {}; // associative array

//todo: put names and numbers inside

phoneBook.Vasi = '+359 852 741';
phoneBook.Niki = '+359 236 741';
phoneBook.Vladi = '+359 852 741';
phoneBook.Plami = '+359 236 741';
phoneBook.Gorg = '+359 852 741';
// phoneBook.Vladi-i-Plami = '+359 236 741'; // it works with limitles characters [_,A-Z,0-9]

// console.log(phoneBook);

// console.log(Object.keys(phoneBook)); // this is how we get kyes from OBJECT
// console.log(Object.values(phoneBook)); // this is how we get kyes from OBJECT
// console.log(Object.entries(phoneBook)); // this is how we get kyes from OBJECT

let saveKeys = Object.keys(phoneBook);
//console.log(saveKeys);

// for(let i = 0; i < saveKeys.length; i++) {
//  let k = saveKeys[i]

//     console.log(phoneBook[k]);
// }

//-------------------------------------------------------------

let phoneBookArr = [];


phoneBookArr['Vasi'] = '02 051 147';
phoneBookArr['00-Nasi-&'] = '02 456456 147';
phoneBookArr['Vasi'] = '02 051 147';
phoneBookArr['123-456-789-789'] = '02 051 147';

console.log(phoneBookArr);














