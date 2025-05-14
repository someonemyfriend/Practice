//=====================================================
//  01. Write a JS function that takes one string parameter 
// and prints on two lines the length of the parameter and then the unchanged parameter itself


// function solve(str){
//     console.log(str.length);
//     console.log(str);
// }

// solve('Hello, JavaScript!')

//======================================================
//  02. Write a JS function that takes three string arguments as an input. Calculate the sum 
// of the length of the strings and the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console in two lines.

function solve(str, str2, str3){
    let sumChart = str.length + str2.length + str3.length
    console.log(sumChart);
    let average = Math.floor(sumChart / 3);
    console.log(average);
}

solve('chocolate', 'ice cream', 'cake');