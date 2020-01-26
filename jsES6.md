# ES6 in a Nutshell:

## `let`:
- **`let`** replaces the bad old `var` and help avoid its shortcomings. 
- While `var` allows for defining a variable multiple times, `let` allows it only once which makes more sense. In the following code, the second statement results in an error, because we can't define a variable twice:
```javascript
if (true){
let a = 11;
let a = 99;
```
- `let` also enables block scoping. Variables defined inside a block (enclosed by curly braces and is part of an if, for, try, etc. statement) are not visible outside that block. the following code results in an error because the variable is not visible outside the `try {}` block:
```javascript
try {
	let a = 11;
} catch {}
console.log(a);
```
- Let also doesn't allow hoisting (using a variable before declaring it).

## const:
- **`const`** is used to define a constant. It is equivalent to `final` in Java and `#define` in C.
- Like `let`, it has block scoping.
- When declared, a constanst must also be initialized at the same time. 
- `const` can be confusing because of the difference between **reference** types  and **value types**. When numbers, strings and other so-called _primitive_ variables are copied, it's their values that get copied not their references (locations in memory). For reference types (arrays and objects), their references get copied, so if you change a variable pointing to a reference type, that reference type changes. When declaring an object or an array as a constant, you can modify its content and the values it holds as much as you want. However, you can't change the memory location it references as the following example shows:
```javascript
const a = {};
a.b = 33; // Correct!
delete a.b; // Correct!
a = {} // Error!

const b = {};
a = b; // error;
``` 

## Arrow Functions:
- Arrow functions allow us to write clean anonymous functions. These appear very similar to Java's lambda expressions.
```javascript
let fun = function(){
	console.log('dada');
}
// The following function is the same as the one above
fun = () => console.log('dada')
```
- **`this` in an arrow function ALWAYS REFERS TO THE CONTEXT WHERE IT WAS DEFINED** unlike `this` in a good old way function defined using the `function` keyword where `this` binds to the context that calls it. The following example illustrates this point:
```javascript
let fun1: function(){return this};
let fun2: () => {return this};

const obj2 = {
	f1: obj1.fun1,
	f2: obj1.fun2
}

f1(); // returns obj2
f2(); // returns Window
``` 

## Default Parameter Values:
- You can provide functions with default values for all or some parameters. When calling such functions, providing such parameters is optional.
```javascript
function greet(a='hello', b='world'){
	console.log(`${a} ${b}`);
}

greet();
```

## Object Literal Shorthand:
- You can create an object from variables defined already outside this to-be-created object as in:
```javascript
let name = "Jonjon";
let job = "nothinger";
let hobby = "dancing";

const nobody = {name, job, hobby}; 
/*
nobody is equivalent to:
* {name: "Jonjon",
* job: "nothinger",
* hobby: "dancing"}
*/
```

## Array Destructuring:
- I generally don't see the point of so-called destructuring, especially in the case of arrays. Object destructuring saves some keystrokes, but array destructuring is a gimmick serving only to add more fluff and more stuff to learn for JavaScript learners. 
- Anyways, the following example shows how you can extract a few elements at the beginning of an array and also extract the rest of the array that doesn't include those elements you extracted from the beginning of the array:
```javascript
const arr = [1,2,3,4];
const [a, b] = arr; // 1 and 2 are assigned to a, and b. respectively
const [z, ... rest] // assigns 1 to z and [2,3,4] to rest.
const [...v] = a; // basically copies v into a.
```

## Object Destructuring:
- Object destructuring is obviously much more useful and makes more sense. It allows for probably a better extraction of values from an object:
```javascript
const obj {
	name: "Salambo",
	type: "novel",
	quantity: 33
}

const { name } = obj; // same as 'const name = obj.name;''
const {name: objName } = obj; // same as const objName = obj.name;
const {...obj1} = obj // is like copying obj
```

## The Spread and Rest Operators:
- These two operators are identical in format, but have two different opposite functionalities.
- The spread operator **`...something`** packs variable-length arguments into an array.
- The spread operator **`...something`** splits an array and allows for slicing chunks of it. It's best used in the context of destructuring as shown earlier.

## Template literals:
- This is a form of going back to the good old C formatting with `printf`. It is self-explanatory:
```javascript
let a = "hello";
let b = "world";
console.log(`${a} ${b}!`);
```

## Classes:
- Check this section covering [ES6 classes](jsObj.md#es6-classes).

## Imports and Exports:
- These are intended for the Node environment and they offer an elegant and more familiar replacement of the more cumbersome constructs like `require` and `module.exports`. They are not yet supported in the current stable versions of Node, not in Node 10 at least. I need Babel to handle this situation. Anyways, an export works as follows:
```javascript
export greeting = "Hello, World!";
export printName = function(name){
	console.log(name);
}
```
- Imports work as follows (Notice the use of object destructuring):
```javascript
import fs from 'fs'; // This command imports the whole fs module
import { greeting, printName} = someModule; // imports a variable and function from the someModule module.
```

## Future:
- ES6 and its use are evolving beasts and this document might change following such evolution. I focused on the features I thought were most important. Might come back!
