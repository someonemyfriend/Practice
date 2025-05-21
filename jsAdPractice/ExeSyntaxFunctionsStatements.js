//=====================================================
//  01.

function fruit(str, grams, price){

    let gramToKilo = (grams * 0.001).toFixed(2);
    let calcPrice = (gramToKilo * price).toFixed(2);
    console.log(`I need $` + `${calcPrice} to buy ${gramToKilo} kilograms ${str}.`);
}

fruit('apple', 1563, 2.35);