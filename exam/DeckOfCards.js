// function solve(arr) {

// let deck = arr[0].split(', ');
 
// for(let i=2; i < arr.length; i++) {
//  //console.log(arr[i]);
//  let firstLine = arr[i].split(', ');
//  let seeComand = firstLine[0];
//  if(seeComand == "Add") {
//     if(deck.includes(firstLine[1])){
//         console.log('Card is already in the deck');
//     } else {
//         deck.push(firstLine[1]);
//         console.log('Card successfully added');
//     }
//  } else if(seeComand == "Remove") {
//     const index = deck.indexOf(firstLine[1]);
//     if(deck.includes(firstLine[1])){
//         deck.splice(index, 1);
//         console.log('Card successfully removed');
//     } else {
//         console.log('Card not found');
//     }
//  } else if(seeComand == "Remove At") {
//     let givenIndex = firstLine[1];
//     if(givenIndex >= 0 && givenIndex <= deck.length-1){
//         deck.splice(givenIndex, 1);
//         console.log('Card successfully removed');
//     } else {
//         console.log("Index out of range");
//     }
//  } else if(seeComand == "Insert") {
//     let givenIndex = firstLine[1];
//     if(givenIndex >= 0 && givenIndex <= deck.length-1) {
//         if(deck.includes(firstLine[2])) {
//             console.log("Card is already added");
//         } else {
//             deck.splice(givenIndex, 0, firstLine[2]);
//             console.log("Card successfully added");
//         }
//     } else{
//         console.log("Index out of range");
//     }
//  }
// }

// // console.log(deck);
// console.log(deck.join(', '));
// }

// solve([
//     'Ace of Diamonds, Queen of Hearts, King of Clubs',
//     '3',
//     'Add, King of Diamonds',
//     'Insert, 2, Jack of Spades',
//     'Remove, Ace of Diamonds'
//   ]);




// function solve(arr) {
//     let arrOfNum = arr[0].split(' ');

//     for(let i = 1; i<arr.length-1; i++){
//         let line = arr[i].split(' ');
//         if(line[0] == "Add"){
//             arrOfNum.push(line[1]);
//         } else if(line[0] == "Remove") {
//             const index = arrOfNum.indexOf(line[1]);
//             arrOfNum.splice(index, 1);
//         } else if(line[0] == "Collapse") {
//             let seeNum = Number(line[1]);
//             let newArr = arrOfNum.filter((element) => Number(element) > seeNum);
//             arrOfNum = newArr;
//         } else if(line[0] == "Replace") {
//             let firstNum = line[1];
//             let secondNum = line[2];
//             let index = arrOfNum.indexOf(firstNum);
//             arrOfNum.splice(index, 1, secondNum);
//         }
        
//     }
    
//     console.log(arrOfNum.join(' '));
// }
    
// solve(["1 4 5 19",
//         "Add 1",
//         "Remove 4",
//         "Finish"]);

// solve(["1 20 -1 10",
//     "Collapse 8",
//     "Finish"]);



// solve(["5 9 70 -56 9 9",
//     "Replace 9 10",
//     "Remove 9",
//     "Finish"]);




function solve(arr) {
    let count = 0;
    let secondCount = 0;
    let sumOfEarn = 0;
    let sumOfExpenses = 0;
    for(let i = 1; i<arr.length; i = i + 3) {
        count++;
        secondCount++;
        let nameOfCity = arr[i];
        let earned = Number(arr[i + 1]);
        let expenses = Number(arr[i + 2]);
        if(count == 3 ) {
            count = 0;
            expenses = expenses + (expenses * 0.5);
        }
        if(secondCount == 5 ) {
            secondCount = 0;
            earned = earned - (earned * 0.1);
        }
        sumOfEarn += earned;
        sumOfExpenses += expenses;

        let countMoney = (earned - expenses).toFixed(2);
        console.log(`In ${nameOfCity} Burger Bus earned ${countMoney} leva.`);
    }

    let totalProfit = (sumOfEarn - sumOfExpenses).toFixed(2);
    console.log(`Burger Bus total profit: ${totalProfit} leva.`);
}

// solve(["3",
//     "Sofia",
//     "895.67",
//     "213.50",
//     "Plovdiv",
//     "2563.20",
//     "890.26",
//     "Burgas",
//     "2360.55",
//     "600.00"]);

    solve(["5",
        "Lille",
        "2226.00",
        "1200.60",
        "Rennes",
        "6320.60",
        "5460.20",
        "Reims",
        "600.20",
        "452.32",
        "Bordeaux",
        "6925.30",
        "2650.40",
        "Montpellier",
        "680.50",
        "290.20"]);








