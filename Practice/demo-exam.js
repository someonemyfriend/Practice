// 01.--------------------------------------------------
// function ekskurzia(humans, nights, cards, museum) {

//     let countNights = nights * 20;
//     let countTransport = cards * 1.60;
//     let countMuseum = museum * 6;

//     let countForOnePerson = countNights + countTransport + countMuseum;
//     let countForAll = countForOnePerson * humans;

//     let countProcent = countForAll + (countForAll * 25 / 100);
//     console.log(countProcent.toFixed(2));
// }

// ekskurzia(131, 9, 33, 46);

// 02.--------------------------------------------------

// function football(priceTshirt, money) {
//     let priceShorti = priceTshirt * 0.75;
//     let priceSocks = priceShorti * 0.20;
//     let priceNaButonki = (priceTshirt + priceShorti) * 2;
//     let sum = priceTshirt + priceShorti + priceSocks + priceNaButonki;
//     let countWithDiscount = sum - (sum * 0.15);

//     if(countWithDiscount >= money) {
//         console.log("Yes, he will earn the world-cup replica ball!");
//         console.log(`His sum is ${countWithDiscount.toFixed(2)} lv.`);
//     } else {
//         let countDiff = money - countWithDiscount;
//         console.log("No, he will not earn the world-cup replica ball.");
//         console.log(`He needs ${countDiff.toFixed(2)} lv. more.`);
//     }
// }

// football(59.99, 500);

// 03.--------------------------------------------------

// function final(danser, points, season, place) {
//     if(place == "Bulgaria") {
//         let winMoney = danser * points;
    
//         let countProcent = winMoney;
//         let discountSeason = 0;
//         if (season == "summer") {
//             discountSeason = 0.05;
//         } else {
//             discountSeason = 0.08;
//         }
//         let countExpences = countProcent - (countProcent * discountSeason);
//         let countDonatin = countExpences * 0.75;
//         let countMoneyLeft = countExpences - countDonatin;
//         let moneyForDancer = countMoneyLeft / danser;
//         console.log(`Charity - ${countDonatin.toFixed(2)}`);
//         console.log(`Money per dancer - ${moneyForDancer.toFixed(2)}`);
//     } else if (place == "Abroad") {
//         let winMoney = danser * points;
//         let countProcent = winMoney + (winMoney * 0.50);
//         let discountSeason = 0;
//         if (season == "summer") {
//             discountSeason = 0.10;
//         } else {
//             discountSeason = 0.15;
//         }
//         let countExpences = countProcent - (countProcent * discountSeason);
//         let countDonatin = countExpences * 0.75;
//         let countMoneyLeft = countExpences - countDonatin;
//         let moneyForDancer = countMoneyLeft / danser;
//         console.log(`Charity - ${countDonatin.toFixed(2)}`);
//         console.log(`Money per dancer - ${moneyForDancer.toFixed(2)}`);
//     }
// }
// final(25, 98, "winter", "Bulgaria");

// 04.--------------------------------------------------

// function computer(arr) {
//     let countComp = Number(arr[0]);
//     let sumAll = 0;
//     let sumRaiting = 0;
//     for(let i = 1; i < arr.length; i++) {
//         let num = Number(arr[i]);
        
//         let seeLastDigit =Math. trunc(num / 10);
//         let seeOstatyk = num % 10;
//         sumRaiting += seeOstatyk;
//         let calcPrecent = 0;

//          if(seeOstatyk == 2) {
//             calcPrecent = seeLastDigit * 0;
//          } else if(seeOstatyk == 3) {
//             calcPrecent = seeLastDigit * 0.5;
//          } else if(seeOstatyk == 4) {
//             calcPrecent = seeLastDigit * 0.7;
//          } else if(seeOstatyk == 5) {
//             calcPrecent = seeLastDigit * 0.85;
//          } else if(seeOstatyk == 6) {
//             calcPrecent = seeLastDigit * 1;
//          }

//          sumAll += calcPrecent;
//     }
//     let seeRaiting = (sumRaiting)/countComp;
//     console.log(sumAll.toFixed(2));
//     console.log(seeRaiting.toFixed(2));
// }
// computer(["3", "103", "103", "103"]) ;

// 05.--------------------------------------------------

// function football(arr) {
//     let best = 0;
//     let bestName = "";
//  for(let i = 0; i <= arr.length - 2; i = i + 2) {
//      let name = arr[i];
//     //  console.log(name);
//      let score = Number(arr[i + 1]);
//     //  console.log("score " + score);
//      if(score > best) {
//         best = score;
//         // console.log("yes");
//         bestName = name;
//      }

//  }
//  if(best >= 3) {
//      console.log(`${bestName} is the best player!`);
//     console.log(`He has scored ${best} goals and made a hat-trick !!!`);
//  } else {
//     console.log(`${bestName} is the best player!`);
//     console.log(`He has scored ${best} goals.`);
// }
// }

// football((["Silva", "5", "Harry Kane", "10"]) );

function six(n){
    found = false;
    for(let a = 1; a<=9; a++){
        if (found == true){
            break;
        }

        for(let b = 9; b>=a; b--){
            if (found == true){
                break;
            }

            for(let c = 0; c <= 9; c++){
                if (found == true){
                    break;
                }

                for(let d = 9; d >= c; d--){
                    if (found == true){
                        break;
                    }
                    // if(a == 1 && b == 9 && c == 1 && d == 8){

                        // console.log(`${a}${b}${c}${d}`);
                        // console.log(`yes yes`);
                    let prozv = a * b * c * d;
                    let sum = a + b + c + d;
                    // console.log(prozv);
                    // console.log(sum);
                    // console.log(prozv / sum);
                    // console.log( n % 3 == 0);
                    if (prozv == sum && n % 10 == 5){
                        console.log(`${a}${b}${c}${d}`);
                        found = true;
        
                    }else 
                    if(Math.trunc(prozv / sum) == 3 && n % 3 == 0){
                        console.log(`${d}${c}${b}${a}`);
                        found = true;
                    }
                }

                // }
            }
        }            
    }
    if(found == false){
                        
        console.log("Nothing found");
    }
}

six(123);














































// 01.--------------------------------------------------