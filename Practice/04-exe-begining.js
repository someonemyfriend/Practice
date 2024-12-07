// 01.--------------------------------------------------

// function USDtoBGN(num) {

//     let sum = num * 1.79549;
//     console.log(sum);
// }

// USDtoBGN(22);

// 02.--------------------------------------------------

// function radiansToDegrees(radians) {
//     let degrees = radians * 180 / Math.PI;
//     console.log(degrees); 
// }

// radiansToDegrees(3.1416);

// 03.--------------------------------------------------

// function deposit(deposit, delay, lihva) {
//     let countLihva = (deposit * (lihva / 100)).toFixed(2);
  
//     let oneMonth = (countLihva)/12;
  
//     let sum = deposit + delay * oneMonth;
//     console.log(sum);
// }

// deposit(200, 3, 5.7);

// 04.--------------------------------------------------

// function literatura(pages, pagesForOneHour, days) {
//     let hoursOfReading = pages / pagesForOneHour;
//     let countForOneDay = hoursOfReading / days;
//     console.log(countForOneDay);
// }

// literatura(432, 15, 4)

// 05.--------------------------------------------------

// function supplies(pencils, markers, domestic, discount) {
//     let pricePencils = pencils * 5.80;
//     let priceMarkers = markers * 7.20;
//     let priceDomestics = domestic * 1.20;
//     let sumOfAll = pricePencils + priceMarkers + priceDomestics;
//     let countDiscount = discount / 100;
//     let priseWithDiscount = sumOfAll - (sumOfAll * countDiscount);
//     console.log(priseWithDiscount);
// }
// supplies(2, 3, 4, 25);

// 06.--------------------------------------------------

// function paintingWalls(nailon, boq, razreditel, hours) {
//  let priceNailon = (nailon + 2) * 1.50;
//  let pricePainting = (boq + (boq * 10 /100)) * 14.50;
//  let priceRazreditel = razreditel * 5.00;
//  let priceBags = 0.40;
//  let sum = priceNailon + pricePainting + priceRazreditel + priceBags;
//  let maistor = sum * 30 / 100;
//  let allSum = sum + (maistor * hours);
//  console.log(allSum);
// }

// paintingWalls(5, 10, 10, 1);

// 07.--------------------------------------------------

// function foodRestaurant(pileshko, fish, vegan) {
//     let pileshkoAll = pileshko * 10.35;
//     let fishAll = fish * 12.40;
//     let veganAll = vegan * 8.15;

//     let countFood = pileshkoAll + fishAll + veganAll;
//     let countDesert = countFood * 20 / 100;
   
//     let dostavka = 2.50;
//     let sum = countFood + countDesert + dostavka;
//     console.log(sum);
// }

// foodRestaurant(9, 2, 6);

// 08.--------------------------------------------------

// function basketball(yearPay) {

//     let kecove = yearPay - (yearPay * 40 / 100);
//     let ekip = kecove - (kecove * 20 / 100);
//     let ball = ekip / 4;
//     let accesoary = ball / 5;
//     let sum = kecove + ekip + ball + accesoary + yearPay;
//     console.log(sum);
// }

// basketball(550);

// 09.--------------------------------------------------

function akvarium(dyljina, shirochina, visochina, procent) {
    let obem = dyljina * shirochina * visochina;
    let obemvlitri = obem / 1000;
    let zaetoProstranstvo = procent / 100;
    let needOfLitres = obemvlitri * (1 - zaetoProstranstvo);
    console.log(needOfLitres);
}

akvarium(85, 75, 47, 17);








