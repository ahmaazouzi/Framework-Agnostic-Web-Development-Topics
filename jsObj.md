All credits go to [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects).

# Object Basics:
## Basics of Basics:
- An object is a collection of related data and functionality. The data is broken into variables which are called **properties** when they are part of an object. The functionality is carried out by functions. Functions inside an object are called **methods**.
- The following code represents a basic object:
```javascript
const dog = {
	name: 'Buddy',
	breed: {generic: 'Saluki',
			specific: 'Egyptian'},
	age: 3,
	gender: 'male',
	preferredFood: ['bones', 'mashed potato', 'snake soup'],
	bio: function() {
		console.log(this);
		let food = this.preferredFood;
		console.log("How How! I am " + this.name + ", a " + this.breed.generic + ", specifically an " + this['breed']['specific'] + '. I am ' + this.age + ' years old and love ' + food.slice(0, food.length - 2) + " and "  + food[food.length - 1] + ".");
	}
}
```
- Note the use of `const`. A const object is different from const (primitives). You can change the members of constant object. You just can't replace it with another object. You can add new members but ***I THINK*** you can't remove already created one.
- Each property (also called a **member**) is a pair of a name and a value. The value can be anything from a number, string, function, an other object, an array, etc. 
- The example above, where objects are defined as name-value pairs enclosed in curly brackets are **object literals**. There are other ways objects can be created. 
- Objects can be handy in, for example, transferring related data through a network or even among functions in the same program. It's more compact than sending such data individually. It is also easier to access such data by name than when such data is stored in an array.

## Dot vs. Bracket Notation:
- You can access object values with the **dot notation**. Append a dot followed by a member name to the object name and voilà, you've got a value.
- A second way to access object member values is done with the **bracket notation**, which is similar to accessing values inside an array. Both notation support accessing values inside nested objects as in:
```javascript
dog.breed.generic;
dog['breed']['generic'];
```
- Just make sure that names in bracket notation are strings and not just names as in the dot value. This might be a little tricky. You can define names as strings with spaces in the name. In this case, values can only be accessed through bracket notation, but generally speaking the dot notation is used more frequently and it's a bad practice to define a name with white space inside it.

## Setting Object Members:
- By setting object values, you can modify the values of existing members and you can add new members as in:
```javascript
dog['name'] = 'Max';
dog.speed = 10;
```
- You can even change the member's name dynamically with the bracket's notation, but I don't see the point of this.

# Object-oriented Javascript:
- OOP in Javascript is the same as in other languages, but JavaScript has its own quirks and own special way of implementing OOP. I will focus on what is specific to JavaScript.

## Constructors and Object Instances:
- You can use a function to create and return an object of some kind. You can create different instances of an object based on the parameters you supply it with and other factors:
```javascript
let dogMaker = (breed, name) => {
	const obj = {};
	obj.name = name;
	obj.breed = breed;
	obj.greeting = function(){
		console.log("How, how, how!!! I am a " + this.breed + "! My name is " + this.name + '.');
	}
	return obj;
} 

const saluki = dogMaker('saluki', 'Jack');
saluki.greeting();
```
- the code above is a little complicated clunky. You can use the a **constructor function** as in the following example:
```javascript
function Dog(breed, name){
	this.breed = breed;
	this.name = name;
	this.greeting = function(){
		console.log('How, how, how! I am a ' + this.breed + ", and my name is " + this.name + ".");
	};
}

let chihuahua = new Dog('chihuahua', 'Mama');
chihuahua.greeting();
```
- Although this function doesn't explicitly create and return an object, it does the same thing as the previous `dogMaker` function. 
- The trick here is the **`new`** keyword.
- Make sure to always capitalize the constructor function's name to indicate that it is used to create objects. 
- A big big drawback of constructor functions is that every time an object is created, its methods are defined again and again. For, example the greeting function is defined for each one of its objects. This unnecessary repetition is bad for performance.
- Note that no matter how you create an object is created, whether as an object literal or with a constructor function, the resulting object is the same. You can access its members with the usual dot or bracket notations.

## The `Object()` Constructor:
- You can create an empty object with the **`Object()`** constructor as in:
```javascript
let person1 = new Object();
```
- You can then set properties to the created object.
- You can also supply a literal object to the `Object()` constructor as in:
```javascript
let d = new Object({
	name: 'ahmed',
	hobby: 'sleeping'
	);
}
```
- I don't see the point behind this unnecessary verbosity.

## The `create()` Method:
- The `Object.create()` method allows you to create a new object based on an existing object. It's like making a copy of an existing object. It works as follows:
```javascript
let saluki = Object.create(chihuahua);
```
- There will be more about this method in later sections.

# Object Prototypes:
# Inheritance in Javascript:
# JSON Data:
# Object Building Practice: