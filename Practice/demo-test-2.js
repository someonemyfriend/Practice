// 06.----------------

// function solve(arr) {

//     let locations = Number(arr[0]);
//     let mainIndex = 1;
//     for(let i = 0; i < locations; i++) {
//         let average = Number(arr[mainIndex]);
        
//         mainIndex++;
//         let days = Number(arr[mainIndex]);
//         mainIndex++;
//         let sumAll = 0;
//         for(let d = 0; d < days; d++) {
//             sumAll += Number(arr[mainIndex]);
//             mainIndex++;
//         }
//         let calcAverage = (sumAll / days).toFixed(2);
//         if(average <= calcAverage) {
//             console.log(`Good job! Average gold per day: ${calcAverage}.`);
//         } else {
//             let seeWhatYouNeed = (average - calcAverage).toFixed(2);
//             console.log(`You need ${seeWhatYouNeed} gold.`);
//         }
      

//     }

// }

// solve([2,    10, 3, 10, 10, 11,     20, 2, 20, 10]);


// 05.----------------

// function food(arr) {

//     let takenFood = Number(arr[0]);
//     let calcGrama = takenFood * 1000;

//     let sumFood = 0;
//     for(let i = 1; i < arr.length - 1; i++) {
//         sumFood += Number(arr[i]);
//     }

//     if(sumFood <= calcGrama){
//         let see = calcGrama - sumFood;
//         console.log(`Food is enough! Leftovers: ${see} grams.`);
//     } else {
//         let seeAgain = -1 * (calcGrama - sumFood);
//         console.log(`Food is not enough. You need ${seeAgain} grams more.`);
//     }
// }
// food(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);

// 04.----------------

// function see(n, m, s) {
//     let seeAll = "";
//     for(let i = m; i >= n; i--) {
       
//         if(i % 2 == 0 && i % 3 == 0) {
//             if( i == s) {
//                 break;
//             } else {
//                 seeAll += " " + i;
//             }
            
//         }
//     }
//     console.log(seeAll);
    
// }
// see(1, 36, 12);


// 03.--------------------------

// function shop(city, product, quantity) {
//         if(product == "flags") {
//             if(city == "Argentina") {
//                 let sum = quantity * 3.25;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Brazil") {
//                 let sum = quantity * 4.20;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Croatia") {
//                 let sum = quantity * 2.75;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Denmark") {
//                 let sum = quantity * 3.10;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             } else {
//                 console.log("Invalid country!");
//             }
//         } else if(product == "caps") {
//             if(city == "Argentina") {
//                 let sum = quantity * 7.20;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Brazil") {
//                 let sum = quantity * 8.50;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Croatia") {
//                 let sum = quantity * 6.90;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Denmark") {
//                 let sum = quantity * 6.50;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             } else {
//                 console.log("Invalid country!");
//             }
//         } else if(product == "posters") {
//             if(city == "Argentina") {
//                 let sum = quantity * 5.10;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Brazil") {
//                 let sum = quantity * 5.35;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Croatia") {
//                 let sum = quantity * 4.95;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Denmark") {
//                 let sum = quantity * 4.80;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             } else {
//                 console.log("Invalid country!");
//             }
//         } else if(product == "stickers") {
//             if(city == "Argentina") {
//                 let sum = quantity * 1.25;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Brazil") {
//                 let sum = quantity * 1.20;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Croatia") {
//                 let sum = quantity * 1.10;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             }else if(city == "Denmark") {
//                 let sum = quantity * 0.90;
//                 console.log(`Pepi bought ${quantity} ${product} of ${city} for ${sum.toFixed(2)} lv.`);
//             } else {
//                 console.log("Invalid country!");
//             }
//         } else {
//             console.log("Invalid stock!");
//         }
//     }
    
    // shop("Brazil", "stickers", 5);


// 02.--------------------------

// function seeAll(name, budjet, bira, chips) {
//     let priceBira = 1.20 * bira;
//     let priceChipsForOne = priceBira * 0.45;
//     let priceChips = Math.ceil(priceChipsForOne * chips);
//     let sumAll = priceBira + priceChips;
//     if(sumAll <= budjet){
//         let calsSum = budjet - sumAll;
//         console.log(`${name} bought a snack and has ${calsSum.toFixed(2)} leva left.`);
//     } else {
//         let calcSum = sumAll - budjet;
//         console.log(`${name} needs ${calcSum.toFixed(2)} more leva!`);
//     }
// }

// seeAll("George", 10, 2, 3);

// 01.--------------------------

function solve(videoCard, prehodnik, electricityForDay, profitCardByDay) {

    let sumCards = videoCard * 13;
    let sumPrehodnici = prehodnik * 13;
    let calsAllMoney = sumCards + sumPrehodnici + 1000;
    let profitByCard = profitCardByDay - electricityForDay;
    let profitForDaycard = 13 * profitByCard;
    let daysReturn = Math.ceil(calsAllMoney / profitForDaycard);
    console.log(calsAllMoney);
    console.log(daysReturn);
}
solve(700, 15, 0.20, 2);



















