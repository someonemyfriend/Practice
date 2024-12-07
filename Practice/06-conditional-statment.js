// 01.--------------------------------------------------

// function seconds(timeFirst, timeSecond, timeThird) {
//     let totalTime = timeFirst + timeSecond + timeThird;
    
//     let minutes = Math.floor(totalTime / 60);
//     let seconds = totalTime % 60;
//     if(seconds < 10) {
//         console.log(`${minutes}:0${seconds}`);
//     } else {
//         console.log(`${minutes}:${seconds}`);
//     }
// }

// seconds(35, 45, 44);

// 02.--------------------------------------------------

// function bonusPoints(score) {
//     let bonus = 0.0;
//     if (score <= 100) {
//         bonus = 5;
//     } else if (score > 100 && score <= 1000) {
//         bonus = score * 20 / 100;
//     } else {
//         bonus = score * 10 / 100;
//     }

//     if (score % 2 == 0) {
//         bonus += 1;
//     } 
//     if (score % 10 == 5) {
//         bonus += 2;
//     }
//     console.log(bonus);
//     console.log(score + bonus);
// }

// bonusPoints(2703);

// 03.--------------------------------------------------

// function plus(hours, minutes) {

//     let minutesPlus = minutes + 15;
//     let seehoursInMinutes =  Math.trunc(minutesPlus / 60);
//     let allHours = hours + seehoursInMinutes;

//     if(minutesPlus >= 60) {
//         minutesPlus = minutesPlus - 60; 
//     }
    
//     if(allHours == 24) {
//         allHours = 0;
//     }

//     if(minutesPlus < 10) {
//         console.log(`${allHours}:0${minutesPlus}`);
//     } else {
//         console.log(`${allHours}:${minutesPlus}`);
//     }
// }

// plus(0, 45);

// 04.--------------------------------------------------

// function toys(ekskurzia, puzzle, dolls, bearsToys, minionToys, kamionche ) {
//     let sum = puzzle * 2.60 + dolls * 3 + bearsToys * 4.10 + minionToys * 8.20 + kamionche * 2;
//     let count = puzzle + dolls + bearsToys + minionToys + kamionche;
//     let discount = 0;
//     if(count >= 50) {
//         discount = sum * 25 / 100;
//     }
//     let krainaCena = sum - discount;
//     let naem = krainaCena * 10 / 100;
//     let pechalba = krainaCena - naem;
//     if(pechalba >= ekskurzia) {
//         let kolkoOstavat = (pechalba - ekskurzia).toFixed(2);
//         console.log(`Yes! ${kolkoOstavat} lv left.`);
//     } else {
//         let kolkonedostigat = (ekskurzia - pechalba).toFixed(2);
//         console.log(`Not enough money! ${kolkonedostigat} lv needed.`);
//     }
// }

// toys(320, 8, 2, 5, 5, 1);

// 05.--------------------------------------------------

// function film(biodjet, statisti, obleklo) {
//     let dekor = biodjet * 10 / 100;
//     let countObleklo = statisti * obleklo;

//     let krainaCenaNaObleklo = countObleklo;
//     if(statisti > 150) {
//         let discount = countObleklo * 10 / 100;
//         krainaCenaNaObleklo = countObleklo - discount;
//     }

//     let allSum = dekor + krainaCenaNaObleklo;
//     let isAction = biodjet - allSum;

//     if(isAction >= 0) {
//         isAction = isAction.toFixed(2);
//         console.log(`Action!`);
//         console.log(`Wingard starts filming with ${isAction} leva left.`);
//     } else {
//         isAction = (isAction * (-1)).toFixed(2);
//         console.log(`Not enough money!`);
//         console.log(`Wingard needs ${isAction} leva more.`);
//     }

// }

// film(15437.62, 186, 57.99);

// 06.--------------------------------------------------

// function timeForRecord(recordInSeconds, razstoqnieMetri, timeInSeconds) {
//     let allSeconds = razstoqnieMetri * timeInSeconds;
//     //console.log(allSeconds);
//     let addBonusTime = Math.floor(razstoqnieMetri / 15);
//     //console.log(addBonusTime);

//     let realBonus = addBonusTime * 12.5;
//     //console.log(realBonus);
//     let allTime = realBonus + allSeconds;
//     if (recordInSeconds <= allTime) {
//         let secondsToMakeRecord = allTime - recordInSeconds;
//         console.log(`No, he failed! He was ${(secondsToMakeRecord).toFixed(2)} seconds slower.`);
//     } else {
//         console.log(`Yes, he succeeded! The new world record is ${(allTime).toFixed(2)} seconds.`);
//     }
// }

// timeForRecord(55555.67, 3017, 5.03);

// 07.--------------------------------------------------

// function money(budget, videoCards, CPU, Ram) {
//     let priceForVideoCard = videoCards * 250;

//     let priceONECPU = priceForVideoCard * 35 / 100;
    
//     let countAllCPU = CPU * priceONECPU;
    
//     let priceForOneRam = priceForVideoCard * 10 / 100;

//     let sumAllRAM = Ram * priceForOneRam;

//     let allSum = priceForVideoCard + countAllCPU + sumAllRAM;
//     let discount = 0;
//     if(videoCards > CPU) {
//         discount = allSum * 15 / 100;
//     }
//     let result = allSum - discount;
    
//     if(budget >= result) {
//         let countDif = budget - result;
//         console.log(`You have ${countDif.toFixed(2)} leva left!`);
//     } else {
//         let countDif = result - budget;
//         console.log(`Not enough money! You need ${(countDif).toFixed(2)} leva more!`);
//     }

// }

// money(920.45, 3, 1, 1);

// 08.--------------------------------------------------

function lunch(name, epizod, breakTime) {

    let lunch = breakTime / 8;
    //console.log(timeForLunch);
    let rest = breakTime / 4;
    //console.log(timeForRest);
    let time = breakTime - lunch - rest;
    //console.log(restOfTime);
    if(time >= epizod) {
        let minutesLeft = time - epizod;
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(minutesLeft)} minutes free time.`);
    } else {
        let minutesNeed = (epizod - time);
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(minutesNeed)} more minutes.`);
    }
}

lunch("Game of Thrones", 48, 60);



function lunchBreak([arg1, arg2, arg3]) {
    let name = arg1
    let episode = Number(arg2);
    let breakTime = Number(arg3);
  
    let lunch = breakTime / 8;
    let rest = breakTime / 4;
    let time = breakTime - lunch - rest;
    if(time >= episode) {
      console.log(`You have enough time to watch ${name} and left with ${Math.ceil(time - episode)} minutes free time.`);
    } else {
      console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episode - time)} more minutes.`);
    }
  }























