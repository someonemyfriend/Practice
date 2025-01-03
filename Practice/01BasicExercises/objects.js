// let papagal = {
//     name: "Lea",
//     color: "yellow",
//     age: 4,
//     sing() {
//         return "KRQQQ KRQQQQ"
//     }
// }

// console.log(papagal.name);
// console.log(papagal.sing());


// 01.------------------------------------------------------

// function createPerson(firstName, lastName, age) {
//     let person = {
//         firstName:  firstName,
//         lastName: lastName,
//         age: age
//     }

//     return person;
// }

// let baiIvan = createPerson("Ivan", "Ivanov", 29);

// console.log(baiIvan.firstName);

// 02.------------------------------------------------------

// function town(obj) {

//     let keys = Object.keys(obj);
    
//     for(let i = 0; i < keys.length; i++) {
//         let key = keys[i];
//         let value = obj[key];
//         console.log(key + " -> " + value);
//     }
// }

// town({
//     name: "Sofia",
//     population: 1234567,
//     country: "Bulgaria",
//     postcode: "1000"
//     });

// 03.------------------------------------------------------

// function convertToObject(jsonstring) {

//     const obj = JSON.parse(jsonstring);
//     let keys = Object.keys(obj);

//     for(let i = 0; i<keys.length; i++) {
//         let key = keys[i];
//         let value = obj[key];
//         console.log(key + ": " + value);
//     }


// }

// convertToObject('{"name": "Ivan", "age": 40, "town":"Sofia"}');

// 04.--------------------------------------------------------------------------------------------------

// function createPerson(firstName, lastName, eyeColor) {
//     let person = {
//         firstName:  firstName,
//         lastName: lastName,
//         eyeColor: eyeColor
//     }

//     return JSON.stringify(person);
// }

// let baiIvan = createPerson("Ivan", "Ivanov", "blue");

// console.log(baiIvan);

// 05.--------------------------------------------------------------------------------------------------

// function phoneBook(arr) {

//     let phonebook= [];
//     for(let i = 0; i < arr.length; i++) {
//         let newArray = arr[i].split(' ');
//         //console.log(newArray);
//         let name = newArray[0];
//         let number = '';
//         for(let j = 1; j < newArray.length; j++) {
//             number += newArray[j];
//         }
//        phonebook[name] = number;
//     }
//     console.log(phonebook);
//     for (let key in phonebook) {
//         console.log(key + " -> " + phonebook[key]);
//     }

// }

// phoneBook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);

// 06.--------------------------------------------------------------------------------------------------

function addMovie(arr) {

    let movies = [];
    for(let i = 0; i < arr.length; i++) {
        let row = arr[i];
        if(row.includes("addMovie")) {
            let names = row.split("addMovie"); // [hj,j,j,j]
            let newObj = {name: names[1].trim()};
            movies.push(newObj);
        } else if (row.includes("directedBy")) {
            let director = row.split("directedBy");
                let namesMovie = director[0].trim();
                let nameDirector = director[1].trim();
                for(let j = 0; j < movies.length; j++) {
                    if(movies[j].name == namesMovie) {
                        movies[j].director = nameDirector;
                    }
                }
        } else if (row.includes("onDate")) {
           let dateRow = row.split("onDate");
           let namesMovie = dateRow[0].trim();
           let dateReal = dateRow[1].trim();
           for (let j = 0; j < movies.length; j++) {
                if(movies[j].name == namesMovie) {
                    movies[j].date = dateReal;
                }
           }
        }
    }
    let newArray = [];

    for(let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        if(movie.name !== undefined && movie.date !== undefined && movie.director !== undefined) {
            newArray.push(movie);
        }
    }
    console.log(JSON.stringify(newArray));

}

addMovie(

    [
        "addMovie The Avengers",
        "addMovie Spiderman",
        "The Avengers directedBy Pesho Peshov",
        "The Avengers onDate 30.07.2010",
        "Captain America onDate 30.07.2010",
        "Captain America directedBy Joe Russo",
        "The Avengers directedBy Anthony Russo",
    ]
);





















