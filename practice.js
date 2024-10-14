// let arr = [2,3,4,5]
// arr.splice(0,1)
// arr.unshift(8)
// console.log(arr);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     "a": 4, // duplicate key 'a', will overwrite the earlier 'a'
//     b: 7   // duplicate key 'b', will overwrite the earlier 'b'
// }

// console.log(obj);

//  object keys must be unique. If an object has duplicate keys, the last value assigned to the key will overwrite any previous values.

//  console.log(!"hello");
// the logical NOT operator (!) is used to invert the truthiness of a value. When applied to a value, it first converts the value to a boolean (either true or false) based on its truthiness, and then inverts that boolean.

/* In JavaScript, any non-empty string (like "hello") is considered truthy. This means it is treated as true in a boolean context. */

// console.log(+false);

// the + operator is used to convert a value to a number. When you apply the unary plus operator (+) to a boolean value, it converts true to 1 and false to 0.Since false is equivalent to 0 when converted to a number, the expression +false evaluates to 0.


// console.log("" == false);
// // output TRUE
// console.log("" === false);
// output FALSE 

// console.log(NaN == NaN);

// console.log(NaN === NaN);
/* NaN (which stands for "Not-A-Number") is a special value that is used to represent invalid or unrepresentable numbers. One unique characteristic of NaN is that it is not equal to itself. This is why both == and === return false when comparing NaN with NaN.*/ 

// console.log(typeof typeof 1000);
/* The typeof operator always returns a string indicating the type of the operand.
 -If you use typeof on the result of another typeof, the final result will always be "string" because typeof always returns a string.
*/

// let arr = [1,2,3,4,5]
// arr[10] = 100;
// console.log(arr);


/*function func() {


   xyz = 100;
//   the code is not in strict mode ("use strict"; is missing), JavaScript automatically creates a global variable named xyz when it encounters the assignment xyz = 100. This means that xyz is now available globally.
   console.log(xyz);
     
}

console.log(func());*/


// console.log(func()) first calls the func function, which logs the value 100 (from console.log(xyz) inside the function) and then returns undefined (since there’s no return statement in the function).

// console.log(func()) will then log the result of the function call, which is undefined.


// var xyz = 1 + abc;

// // When you try to add 1 + abc, abc is undefined. In JavaScript, adding a number to undefined results in NaN (Not-a-Number)
// var abc = 100;

// console.log(xyz);

/*  At this point, abc has been declared but not initialized (it's undefined).
When you try to add 1 + abc, abc is undefined. In JavaScript, adding a number to undefined results in NaN (Not-a-Number).
So, xyz is assigned the value NaN.
 */




/*Delete property:
The delete operator in JavaScript is primarily used to remove properties from objects. It can also be used with arrays, as arrays are a special type of object in JavaScript. 
*/

/*
const data = {
    name: "John",
    age: 30,
    city: "New York"
}

const abc = [1,2,3,4 ]
console.log(delete data);// This is because data is a constant variable, and you cannot delete a variable itself with delete. You can only delete its properties like this "delete object.property;"  . Therefore, the delete operation returns false indicating failure
console.log(delete abc);

*/



