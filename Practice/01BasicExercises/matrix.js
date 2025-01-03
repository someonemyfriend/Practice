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

function arr(one, two) {
    let addArray = [];
     
     for(let i = 0; i <= one.length - 1; i++) {
         // console.log(one[i]);
         // console.log(two[i]);
         addArray[i] = [];

         let cutArray = one[i].split(' ');
         let cutArrayTwo = two[i].split(' ');
          for(let j = 0; j <= cutArray.length - 1; j++ ) {
             
            
             if(cutArray[j] == cutArrayTwo[j]) {
                addArray[i][j] = cutArray[j];
                 
             } else {
                addArray[i][j] = "*";
             }             
          }
     } 
       
 console.log(JSON.stringify(addArray));
 }
 
 arr( ["a b c d", "a b c d", "a b c d"], ["k b c k", "a b g d", "a k c d"] );
