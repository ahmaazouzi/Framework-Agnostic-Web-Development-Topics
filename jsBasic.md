All credits go to [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript).

# General:
- Each tab is an isolated execution environment. and code in one tab cannot directly affect code in another tab. This largely a a security measure.
- Most modern js compilers use **just-in-time compiling** to improve performance. "JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible."
- Avoid inline JavaScript. It is bad!!! Instead, go for external JavaScript files where, for example you can select all buttons or all buttons of some class with one expression. Inline JavaScript pollutes the HTML and is hard to maintain.

## Script Loading Strategies:
- You might get errors based on where you call or define your JavaScript in your HTML. JavaScript might use parts of the DOM to do its job, but if that part of the DOM is not loaded yet (making it available for use by JavaScript), you'd get errors. Ways to get around this problem include:
	+ Place your JavaScript ad the end of your html body, right before the `</body>` tag. This is old-fashioned and considered bad by some as the script is completely blocked until the HTML loads. This can be bad for performance when you have many large files of javascript.
	+ You can add the `"DOMContentLoaded"` event listener to the document. This instructs the code to not run until the document is fully loaded and the HTML is completely parsed. The following snippet shows you how it's done. 
```javascript
document.addEventListener("DOMContentLoaded", function() {
  // ... 
});
```
	+ `defer` is a more modern way of loading scripts. Both JavaScript and HTML load simultaneously. JavaScript, however, will run when the HTML is completely loaded. If you have multiple scripts, the will load and run in the order they appear in the document. It is used as follows:

```xml
<script src="script.js" defer></script>
```
	+ `async` is similar to `defer` in that it loads simultaneously with the HTML, but it will also run as soon as as it's loaded. So while the HTML is being parsed and loaded, there can be `async` JavaScript runnign at the same time. `async` also is not guaranteed to run in the order scripts appear in the document.

## `var` vs. `let` vs. `const`:
- `var` is extremely problematic. A variable can be initialized before being declared with the `var` keyword because of so-called **var hoisting**. `let` would give an error because of that.
- `var` also lets you redeclare a variable, something that `let` doesn't allow:
```javascript
var a = 44;
var a = l;
```
- stick to `let`.
- `const` is for constants.

## Invalid Names:
- Stick to **lower camel case**. It's ok to append numbers to the camelcase.
- Avoid starting a variable name with an underscore coz some JavaScript constructs use that.

## Useful String Methods:
```javascript
String.prototype.length;
String.prototype.indexOf('zilla');
String.prototype.slice(0,5);
String.prototype.toLowerCase();
String.prototype.toUpperCase();
String.prototype.replace('moz','illa');
```

## Array Methods:
```javascript
Array.prototype.shift() // pop at the beginning of the array
Array.prototype.unshift() // push at the beginning of the array
```

## Falsy:
- **`null`**
- **`undefined`**
- **`""`**
- **`0`**
- **`NaN`**

## `continue` and `break`:
- **`break`** allows you to break out of a loop, while **`continute`** allows you to skip an iteration while staying in the loop.

## Functions Attached to Events:
```javascript
someElement.onclick = someFunction;
someElement.onclick = someFunction();
```
- The difference between these two statements is the first one waits until the button is clicked, while the second one is called immediately after the page is loaded.




