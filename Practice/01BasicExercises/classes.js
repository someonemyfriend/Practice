// class sladkoDog {
//     constructor(name, ushi, color, age) {
//         this.name = name;
//         this.ushi = ushi;
//         this.color = color;
//         this.age = age;
//     }

//     speak(angryPerson) {
        
//         if(angryPerson === undefined) {
//             console.log(`${this.name}: Woof, woof!`);
//         } else {
//             console.log(`${this.name}: Woof, woof, ${angryPerson}!`);
//         }
//     }
// }
// let dog = new sladkoDog("Niki");
// console.log(typeof dog);
// dog.speak("Nikitu");

// ----------------------

// 01.------------------------------------------------------
// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     meow() {
//         console.log(`${this.name}, age ${this.age} says meow`);
//     }
// }

// function catsMeow(arr) {   
//     for(let i = 0; i < arr.length; i++) {
//         let seeSplit = arr[i].split(" ");
//         let nameCat = seeSplit[0];
//         let ageCat = Number(seeSplit[1]);
//         let cat = new Cat(nameCat, ageCat);
//         cat.meow();
//     }
// }
// catsMeow(['Mellon 2', 'Tom 3']);

// 02.------------------------------------------------------

// class Person {
//     constructor(firstName, lastName, age, email) {
//         this.setFirstName(firstName);
//         this._lastName = lastName;
//         this._age = age;
//         this._email = email;
//     }

//     getFirstName() {
//         return this._firstName;
//     }

//     setFirstName(newname) {
//         if(newName == null){
//             //
//         }
//          this._firstName = newname;
//     }

//     toString() {
//         let newString = `${this._firstName} ${this._lastName} (age: ${this._age}, email: ${this._email})`;
//         return newString; 
//     }
// }

// let person = new Person('Homer', 'Simpson', 42, 'homer@yahoo.com');
// console.log(person.toString());
// person.setFirstName("Bart");
// console.log(person.toString());

// 03.------------------------------------------------------

// class Circle {
//     constructor(r) {
//         this.radius = r;
//     }

//     get area() {
//         return Math.PI * (this.radius ** 2);
//     }
     
//     get diameter() {
//         return 2 * this.radius;
//     }

//     set diameter(d) {
//         this.radius = d / 2;
//     }
// }


// const circle = new Circle(10);
// // console.log(Circle.area);



// let c = new Circle(2);
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);
// c.diameter = 1.6;
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);

// 04.------------------------------------------------------
 
// class Points {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     static distance(p1, p2) {
//         let L = Math.abs(p1.x - p2.x);
//         let W = Math.abs(p1.y - p2.y);
//         let diagonal = Math.sqrt(L ** 2 + W ** 2);
//         return diagonal;    
//     }
// }

// let p1 = new Points(5, 5);
// let p2 = new Points(9, 8);
// console.log(Points.distance(p1, p2));

// 05.------------------------------------------------------

























