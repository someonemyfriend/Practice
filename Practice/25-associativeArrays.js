//01--------------------------
 var Obj = {

 };

 Obj['Niki'] = '089563214';
 Obj['Vasi'] = '089563564';
 Obj['Vasi'] = '08956';

 //console.log(Object.keys(Obj));
 //console.log(Object.values(Obj));
//  console.log(Object.entries(Obj));

 let seeall = Object.entries(Obj);

 for(let i = 0; i < seeall.length; i++ ) {
    // console.log(seeall[i]);

    // console.log(seeall[i][0]);
    // console.log(seeall[i][1]);

 }


 //02------------------

let arr = [];

arr['Eli'] = '089547123';
arr['Gabi'] = '089547456';

//console.log(Object.keys(arr));
//console.log(Object.values(arr));
//console.log(Object.entries(arr));

let seeallArr = Object.entries(arr);

for(let i = 0; i < seeallArr.length; i++ ) {
  //  console.log(seeallArr[i]);

   // console.log(seeallArr[i][0]);
   // console.log(seeallArr[i][1]);

 }

 //03------------------

 const map1 = new Map();

 map1.set('Rosi', '02563987');
 map1.set('Ico', '04563987');
 map1.set('Gogo', '05563987');

// console.log(map1);
 //console.log(Object.entries(map1));

//--

for (const [key, value] of map1) {
   // console.log(`01neshtosi${key} -> ${value}`);
  }
  // 0 = zero
  // 1 = one
  
  for (const key of map1.keys()) {
   // console.log('02neshtosi' + key);
  }
  // 0
  // 1
  
  for (const value of map1.values()) {
   // console.log('03neshtosi' + value);
  }
  // zero
  // one
  
  for (const [key, value] of map1.entries()) {
    //console.log(`04neshtosi ${key} = ${value}`);
  }
  // 0 = zero
  // 1 = one

 // console.log(map1.has('Gogo'));

  if (map1.has('Gogo')) {
   //console.log('hasgogo' + map1.get('Gogo'));
  } 

  //task - 01 -----------------------
  
function phonebook(arr) {

    let Object2 = {};
    for(let i = 0; i < arr.length; i++) {
        let anyting = arr[i].split(' ');
        let first = anyting[0];
        let second = anyting[1];

        Object2[first] = second;
    }
    let seeallArr = Object.entries(Object2);

    for(let i = 0; i < seeallArr.length; i++ ) { 
        // console.log(`${seeallArr[i][0]} -> ${seeallArr[i][1]}`);
    }

}

phonebook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);



  //task - 02 -----------------------

  function meeting(arr) {

    let Object3 = {};
    for(let i = 0; i < arr.length; i++ ) {
        let anyting = arr[i].split(' ');
        let first = anyting[0];
        let second = anyting[1];

        if(!Object3[first]) {
            Object3[first] = second;
            // console.log(`Scheduled for ${first}`);
        } else {
            // console.log(`Conflict on ${first}!`)
        }
    }

    let seeallArr = Object.entries(Object3);

    for(let i = 0; i < seeallArr.length; i++ ) { 
        // console.log(`${seeallArr[i][0]} -> ${seeallArr[i][1]}`);
    }


  }

  meeting(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);


  //task - 03 -----------------------

function addressBook (arr) {
    let Object4 = {};
    for(let i = 0; i < arr.length; i++ ) {
        let anyting = arr[i].split(':');
        let first = anyting[0];
        let second = anyting[1];
        Object4[first] = second;
    }

    // let seeallArr = Object.entries(Object4);

    let seeallArr = Object.entries(Object4).sort((a, b) => a[0].localeCompare(b[0]));

    for(let i = 0; i < seeallArr.length; i++ ) { 
        // console.log(`${seeallArr[i][0]} -> ${seeallArr[i][1]}`);
    }

}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);

  //task - 04 -----------------------

function solve(arr) {
    let map = new Map();

    for (let string of arr) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        
        if(!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currentQuantity = map.get(product);
           // console.log(currentQuantity);
            let newQuantity = currentQuantity + quantity;
            map.set(product, newQuantity);
        }
    }
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}


solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);




