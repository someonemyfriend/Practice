// 01 ---------------------------------------

// function solve(arr) {

//     let first = arr[0];
//     let last = arr[arr.length - 1];
//     let sum = first + last;
//     return sum;
// }

// console.log(solve([11, 58, 69]));

// 02 ---------------------------------------

// function dayOfWeek(num) {
//     let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//     if(num >= 1 &&  num <= 7) {
//         let index = num - 1;
//         let theDay = days[index];
//         console.log(theDay)
//     } else {
//         console.log('Invalid day!');
//     }

// }

// dayOfWeek(0);

// 03 ---------------------------------------

// function reverse(n, arr) {

//     let arrNew = [];
//     for(let i = 0; i<n; i++) {
//         arrNew.push(arr[i]);
        
//     }
//     return arrNew.reverse().join(' ');
    
// }

// console.log(reverse(3, [10, 20, 30, 40, 50]));

// 04 ---------------------------------------

function reversed(arr) {
    for(let i = 0; i < arr.length / 2; i++) {
        let currentElement = arr[i];
        let lastElementIndex = arr.length - 1 - i;
        let lastElement = arr[lastElementIndex];
        // console.log(currentElement);
        // console.log(lastElement);

        arr[i] = lastElement;
        arr[lastElementIndex] = currentElement;

    }
    console.log(arr.join(' '));
}

reversed(['a', 'b', 'c', 'd', 'e']);

// 05 ---------------------------------------



// 06 ---------------------------------------
// 07 ---------------------------------------
// 08 ---------------------------------------