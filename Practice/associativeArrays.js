// SUF - Associative Arrays - JS Fundamentals - януари 2020
// https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fsoft%2Dtech%2FJan%2D2020%2FJavaScript%2F08%2E%2520JS%2DFundamentals%2DAssociative%2DArrays%2F08%2E%2520JS%2DFundamentals%2DAssociative%2DArrays%2DLab%2Edocx%3FaccessKey%3D470041005600680059004D00410030004C00580057003900380059007A00580076005A00690043003800710053004600750044003100450052002F005900720048004200700073004B00790058004500700048003100420045005A0057002B0055005300770049005A0043007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1
// https://softuni.bg/trainings/resources/video/47275/video-04-march-2020-ivaylo-papazov-js-fundamentals-january-2020/2602


// 01.-----------------------------------------------------------------------------
// function solve(input) {
//     let phonebook = {};

//     for (let i = 0; i < input.length; i++) {
//         let [name, number] = input[i].split(' ');
//             phonebook[name] = number;
//     }

//     Object.keys(phonebook)
//         .forEach(n => console.log(`${n} -> ${phonebook[n]}`))
// }

// solve(['Tim 085467932', 'Peter 087467936', 'Bill 083267938', 'John 08998934']);

// 02.-----------------------------------------------------------------------------
function solve(arr) {
    let map = new Map();

    for (let string of arr) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if(!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}

solve(['tomato 10', 'coffee 5', 'olives 100', 'coffee 40']);



















