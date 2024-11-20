// function* infiniteSequence() {
//     let i = 0;
//     while (true) {
//         yield i++;
//     }
// }

// const sequence = infiniteSequence();
// console.log(sequence.next().value); // 0
// console.log(sequence.next().value); // 1
// console.log(sequence.next().value); // 2
// // ...and so on


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve,ms));
//     }
//     async function asyncFunction() {
//     console.log('Start');
//     await delay(1000);
//     console.log('End');
//     }

// asyncFunction();

// class Animal {
//     constructor(name) {
//     this.name = name;
//     }
//     speak() {
//     console.log(`${this.name} makes a sound.`);
//     }
//     }
//     class Dog extends Animal {
//     speak() {
//     console.log(`${this.name} barks.`);
//     }
//     }
//     const dog = new Dog('Buddy');
//     dog.speak();


let arr = [2,3,4,5]
let arra1 = arr.slice(-2, -1)

console.log(arra1);


// const data = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }


// console.log(delete data);


// let str = 'H2O';
// console.log(str[1].sub()); // Outputs: H<sub>2</sub>O
