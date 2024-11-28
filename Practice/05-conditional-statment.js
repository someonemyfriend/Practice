// 01.--------------------------------------------------

// function isExcellent(grade) {

//     if (grade >= 5.50) {
//         console.log('Excellent!')
//     }
// }

// isExcellent(5.49);

// 02.--------------------------------------------------

// function greaterNumber(numOne, numTwo) {
//     if (numOne > numTwo) {
//         console.log(numOne);
//     } else {
//         console.log(numTwo);
//     }
// }

// greaterNumber(-5, 5);

// 03.--------------------------------------------------

// function oddOrEven(number) {
//     if(number % 2 == 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// }

// oddOrEven(1024);

// 04.--------------------------------------------------

// function pass(wordPass) {
//     if("s3cr3t!P@ssw0rd" === wordPass) {
//         console.log("Welcome");
//     } else {
//         console.log("Wrong password!");
//     }
// }

// pass("s3cr3t!P@ssw0rd");

// 05.--------------------------------------------------

// function numberSee(number) {
//     if(number >= 100 && number <= 200) {
//         console.log("Between 100 and 200");
//     } 
//     else if (number <= 99) {
//         console.log("Less than 100");
//     }
//     else if (number >= 200) {
//         console.log("Greater than 200");
//     }
// }

// numberSee(220);

// 06.--------------------------------------------------

// function speed(speed) {
//     if(speed <= 10) {
//         console.log("slow");
//     } 
//     else if(speed > 10 && speed <=50) {
//         console.log("average");
//     }
//     else if(speed > 50 && speed <= 150) {
//         console.log("fast");
//     }
//     else if(speed > 150 && speed <= 1000) {
//         console.log("ultra fast");
//     } 
//     else if (speed > 1000) {
//         console.log("extremely fast");
//     }
// }

// speed(50.15);

// 07.--------------------------------------------------

function area(form, a, b) {
    if("square" == form) {
        let sum = (a * a).toFixed(3);
        console.log(sum);
    }
    else if("rectangle" == form) {
        let sum = (a * b).toFixed(3);
        console.log(sum);
    }
    else if("circle" == form) {
        let sum = (Math.PI * a * a).toFixed(3);
        console.log(sum);
    }
    else if("triangle" == form) {
        let sum = ((a * b) / 2).toFixed(3);
        console.log(sum);
    }
   
}

area("triangle", 4.5, 20);

































