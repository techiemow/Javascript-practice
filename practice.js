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


console.log("" == false);
// output TRUE
console.log("" === false);
// output FALSE 

console.log(NaN == NaN);

console.log(NaN === NaN);
/* NaN (which stands for "Not-A-Number") is a special value that is used to represent invalid or unrepresentable numbers. One unique characteristic of NaN is that it is not equal to itself. This is why both == and === return false when comparing NaN with NaN.*/ 

console.log(typeof typeof 1000);
/* The typeof operator always returns a string indicating the type of the operand.
 -If you use typeof on the result of another typeof, the final result will always be "string" because typeof always returns a string.
*/

let arr = [1,2,3,4,5]
arr[10] = 100;
console.log(arr);


function func() {


   xyz = 100;
//   the code is not in strict mode ("use strict"; is missing), JavaScript automatically creates a global variable named xyz when it encounters the assignment xyz = 100. This means that xyz is now available globally.
   console.log(xyz);
     
}

console.log(func());


// console.log(func()) first calls the func function, which logs the value 100 (from console.log(xyz) inside the function) and then returns undefined (since there’s no return statement in the function).

// console.log(func()) will then log the result of the function call, which is undefined.


 var xyz = 1 + abc;

// // When you try to add 1 + abc, abc is undefined. In JavaScript, adding a number to undefined results in NaN (Not-a-Number)
 var abc = 100;

 console.log(xyz);

/*  At this point, abc has been declared but not initialized (it's undefined).
When you try to add 1 + abc, abc is undefined. In JavaScript, adding a number to undefined results in NaN (Not-a-Number).
So, xyz is assigned the value NaN.
 */




/*Delete property:
The delete operator in JavaScript is primarily used to remove properties from objects. It can also be used with arrays, as arrays are a special type of object in JavaScript. 
*/


const data = {
    name: "John",
    age: 30,
    city: "New York"
}


console.log(delete data);// This is because data is a constant variable, and you cannot delete a variable itself with delete. You can only delete its properties like this "delete object.property;"  . Therefore, the delete operation returns false indicating failure
console.log(delete abc);


// let abc = [1,2,3,4 ]
// const [x,y] = abc
// console.log("x", x , "y",y  );

let a = [];
let b = [];
console.log(a == b );
console.log(a === b);
// here it checks the references of each array a,b not the values therefore false for both the cases


// correct way to check the array is this 
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // Check length
    return arr1.every((value, index) => value === arr2[index]); // Check each element
}

console.log(arraysEqual(a, b)); // true, both are empty arrays


//REACT 
/*
-In a React application, the index.js file serves as the entry point for the application
- The index.js file is where the React application starts executing. It initializes the React app and renders the root component into the DOM.
- It usually contains the code that renders the main application component (often named App or similar) into a specific DOM element, typically within an HTML file.
-You can import global styles, context providers, or any necessary libraries that you want to apply across your entire application.

*/


//Babel
// Babel is a popular JavaScript compiler and toolchain that is primarily used to convert modern JavaScript (ES6+) code into a version that is compatible with older browsers


//Dependencies vs devDependencies
/*
 -  Dependencies are packages required for your application to run in production. These are the libraries or frameworks that your application needs to function correctly.


  -        Example: Common dependencies might include:

        React (react, react-dom) for building user interfaces.
        Express (express) for server-side development.
        Lodash (lodash) for utility functions. 



 - DevDependencies are packages that are only necessary during development and testing. They are not required in the production environment.
 
 -Example: Common devDependencies might include:

Testing frameworks (like Jest or Mocha).
Build tools (like Webpack or Babel).
Linters (like ESLint).
Type checkers (like TypeScript).
*/

/*
//WAYS TO OPTIMIZE REACT AAPLICATION

- Code Splitting
Dynamic Imports: Use React.lazy() and Suspense to load components only when they are needed, reducing the initial bundle size.
- Memoization
React.memo: Wrap functional components with React.memo to prevent unnecessary re-renders when props haven’t changed.
- Optimize Component Rendering
Avoid Inline Functions: Define functions outside of render methods to prevent new instances from being created on every render.

Pure Components: Use PureComponent for class components, which implements a shallow prop and state comparison for you.
*/

//Usememo vs UseCallback
/*
useMemo:

Used to memoize a computed value. It returns a memoized value that only changes when one of the dependencies has changed.
Useful for optimizing expensive calculations or values derived from props/state.



useCallback:

Used to memoize a function. It returns a memoized version of the callback function that only changes when one of the dependencies has changed.
Useful for preventing unnecessary re-renders of child components that rely on reference equality to prevent renders.

example:
import React, { useState, useMemo, useCallback } from 'react';

function ExampleComponent({ items }) {
  const [count, setCount] = useState(0);

  // Using useMemo to calculate total price
  const total = useMemo(() => {
    console.log('Calculating total...');
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  // Using useCallback to memoize the handleClick function
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Total: {total}</h1>
      <button onClick={handleClick}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
}






 */

//

/*
1. package.json
Purpose
Project Metadata: Contains information about the project, such as its name, version, description, author, license, and more.
Dependency Management: Lists the packages required for the project, categorized into dependencies and devDependencies.
Scripts: Defines scripts that can be run using npm commands, such as npm start, npm test, etc.
Key Sections
Name and Version: Identifies the project.
Scripts: Contains custom commands. For example:
"scripts": {
  "start": "node index.js",
  "test": "jest"
}

Dependencies: Specifies packages needed for the project.
json
"dependencies": {
  "react": "^18.0.0",
  "express": "^4.17.1"
}

devDependencies: Specifies packages needed only for development.
json

"devDependencies": {
  "webpack": "^5.0.0",
  "jest": "^27.0.0"
}
Use Cases
Dependency Installation: Running npm install reads this file to install the listed dependencies.
Project Configuration: Allows configuration of various aspects of the project and its dependencies.
Sharing: Facilitates sharing your project with others, ensuring they have the same setup by including the package.json file.





2. package-lock.json
Purpose
Dependency Tree Locking: Locks the exact versions of dependencies and their sub-dependencies. This ensures that the project will have the same dependencies installed in every environment.
Performance: Speeds up installation time by providing a complete snapshot of the dependency tree.
Key Features
Exact Versions: Lists the exact version of every package installed, including dependencies and sub-dependencies.
Integrity: Contains checksums to verify the integrity of the packages.
Dependency Resolution: Provides a complete picture of how packages are installed, including their hierarchy.
Use Cases
Consistent Environments: When working in teams or deploying applications, having a package-lock.json ensures that everyone has the same version of every dependency, preventing "it works on my machine" problems.
Faster Installations: Since package-lock.json includes the resolved versions of all packages, npm can install them more quickly.
*/




// function cba(){
//   console.log("Mowriyaa");
  
//   return 8
// }

// console.log(cba() , zyx());


// function zyx(){
//   return 8
// }


// function sum (a) {
//   return function (b){
//     return a + b;
//   }
  
// }
// console.log(sum(5)(10)); // Outputs 15 (direct usage: sum(5) returns a function that adds 10)

// function fch ( h,f) {
     
//     if (h<f){
//         console.log("f is greater");
        
//     } else {
//       console.log("h is greater");
//     }
     
//     return;
//     console.log(h + f);
     
// }

// console.log(fch(8,6));
// console.log(fch(4,6));





const one  = false || {} || null;
const two  = null || false || "";
const three  = {} || 0 || true;

console.log(one,two,three);


