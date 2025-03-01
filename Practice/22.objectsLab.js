// 01.-------------------------------------------
// function solve(firstName, lastName, age) {
//     let person = {};
//     person.firstName = firstName;
//     person.lastName = lastName;
//     person.age = age;

//     return person;
// }

// console.log(solve('Peter', 'Pan', 20));

// 02.-------------------------------------------

function solve(obj) {

    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }

}

console.log(solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria", 
    postCode: "1000"
}));


// 01.-------------------------------------------
// 01.-------------------------------------------
// 01.-------------------------------------------