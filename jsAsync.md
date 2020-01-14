Credits go to [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous).

The asynchronous nature of Javascript is a source of immense power . This module covers asynchronous Javascript and how it can be used effectively.

# General Asynchronous Programming Concepts:
- Concepts first. Before diving into asynchronous Javascript, let's first try to understand the general Concepts relating to asynchronocity.

## Asynchronicity and Blocking Code:
- In a synchronous uni-processor, uni-threaded system, processes execute sequentially one a time. If process **A** has to wait for an HTTP response, it has to wait until the response is returned. Process **B** must also stay idle and wait. This is such a meaningless wait of time. Why can't process **B** do its work, while process **A** is waiting. This code that has to wait and doesn't release control to other functions is called **blocking code**. One way to remedy this blocking problem is **asynchronous programming** where process **B** can start executing while process **A** is waiting.
- There are realistic situations even in the client side JavaScript where it might be desirable to be asynchronous. Some parts of the document might use a large amount of resources might such as the canvas rerendering. This might block for a second or two resulting in a clunky user experience.
- JavaScript is traditionally a single-threaded language, meaning it has only one thread running at it has only one thread of execution that should be shared by all running processes. Lately, however, even JavaScript developed a form of multithreading in the form of **Web workers**, which I won't discuss here.

## Asynchronous Code:
- Web workers have their limitations. They can't access the DOM and update the UI. They are mostly used to do calculations. 
- Another problem with web workers is that even if the existence of multiple threads results in non-blocking code, the code is essentially synchronous. If process **C** depends on the results of process **A** and process **B** which run on multiple threads, there would be problems if the results of both threads are not available for use by process **C**. If **C** tries to run when one of its inputs is not available, this would produce an error.
- Javascript has functionaly such as **Promises** that allows you start running a function that might take a long time (while, for example doing and I/O operation), and then wait until this function returns results before running another function that uses these results.

# Introduction to Asynchronous Javascript:
- This is an overview of the different asynchronous techniques JavaScript uses to address the shortcomings of an otherwise synchronous world.

## Asynchronous Javascript:
- Asynchronous code is used frequently in operations that fetch resources from a network or a database. You don't know how long it would take for such a resource to be available for use. A process following the resource fetching function would result in an error if the fetching takes too long or fails to return that resource. You need to make the code wait until said resource is available. Asynchronicity is performed using two different styles, the good old **callback functions** and the newer **promises**.

## Async Callbacks:
- "Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback function to let you know the work is done, or to let you know that something of interest has happened".
- An example of a callback function is the event handler you pass into `addEventListener()` as in:
```javascript
btn.addEventListener('click', () => {
  alert('You clicked me!');
```
- Here we are passing a reference to a function, which can be either a anonymous function or a function named somewhere else. The callback is not invoked immediately. When `addEventListener()` or any other function containing a callback is done doing its thing, it then calls back the callback function. An async callback ensures that 

# Cooperative Asynchronicity, Timeouts and Intervals:
- This section deals with "running code asynchronously after a set time period has elapsed, or at a regular interval". These are:
<dl>
	<dt>`setTimeout()`</dt>
	<dd>Executes code after a specified period of time has passed</dd>
	<dt>`setInterval()`</dt>
	<dd>Execute code repeatedly in equal time intervals</dd>
	<dt>`requestAnimationFrame()`</dt>
	<dd>A modern version of `setTimeout()`. Allows animation to be run at a specified framerate.</dd>
</dl>

## `setTimeout`:
- This function takes 3 parameters:
	1. An anonymous function or a reference to a function defined elsewhere.
	2. A number representing the minimum milliseconds after which the function can run. If you give it zero or no argument, the function runs immediately. We say minimum because, it's not guaranteed that resources are immediately available for such a function to be executed.
	3. zero or more parameters to be passed to the function.
- `setTimeout` can take the function parameter as an anonymous function, a named function and a function reference as the following example shows.:
```javascript
// anonymous function
let guaranting = setTimeout(() => console.log("Hello, Antarctica!"), 2000);

// named function
let guaranting = setTimeout(function helloAntarctica() => console.log("Hello, Antarctica!"), 2000);

// function reference
function helloAntarctica(){
	console.log("Hello, Antarctica!");
}
let guaranting = setTimeout(helloAntarctica, 2000)
```
-`setTimeout` returns a value for referring to the timeout later such as during **clearing a timeout**.
- Be careful about the parameters of a function reference passed to `setTimeout`. These can be passed to `setTimeout` as additional parameters as in:
```javascript
function helloSomewhere(somwhere){
	console.log(`Hello, ${somwhere}!`);
}
setTimeout(helloSomewhere, 2000, "AFRICA");
```
- A time out can also be cleared before the specified period has elapsed with the `clearTimeout(timeoutRef)` which takes the identifier returned `setTimeout` as a parameter.

## `setInterval`:
- This function is similar to `setTimeout` except that it would run the same action repeatedly after a set period of time has elapsed. This is great for animations and such.
- The following example demonstrates a digital clock:
```javascript
function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
```
- `setInterval` does also return an identifier that can be used to clear the interval.
- The interval will keep running forever, unless an error occurs. You can stop the interval, however, in the same way you could clear the timeout as the following example shows:
```javascript
const myInterval = setInterval(myFunction, 2000);
clearInterval(myInterval);
```

## Recursive `setTimeout` and how It Relates to `setInterval`:
- You can call `setTimeout` Recursively to achieve the same effect as you did with `setInterval`
```javascript
let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);
```
- There is subtle but potentially crucial difference between the two. The recursive `setTimeout` guarantees the specified time period between the end of one run of the code and the beginning of the next one. A 100 milliseconds will pass between the time the first run finishes executing and the next one starting to execute. `setInterval` includes the time it takes an action to run in the interval, so if it takes that action a 70 milliseconds to finish running, the interval will only be 30 milliseconds (given the interval is 100 milliseconds as in the example). `setInterval` might lead up to errors if the code takes longer to run than the specified interval.
- If you think code might take longer to runthan the interval, just go for the recursive `setTimeout`. The intervals between actions will vary slightly, but this might save you some headaches. 
- **Immediate timeouts** refers to the fact that "using 0 as the value for setTimeout() schedules the execution of the specified callback function as soon as possible but only after the main code thread has been run." The _main code thread_? I thought we are working with a single thread. It looks like by merely placing some function inside `setTimeout`, it will run last even if there is no timeout. This is part of asynchronous weirdness that I don't find very easy to understand.

## `requestAnimationFrame()`:
- This is a modern form of `setInterval`. It executes efficiently before the browser repaints the display resulting in smooth animations. It is an optimized response to the shortcomings of `setInterval` which drops frame, runs at frame rates not optimized for device display, continues to run in inactive tabs or when animation is scrolled off the page.
-  Generally speaking, using this method follows this general pattern:
```javascript
function draw() {
   // Drawing code goes here
   requestAnimationFrame(draw);
}

draw();
```
- You define a function of how your animation is to be updated and call `requestAnimationFrame` at the end of this function. `requestAnimationFrame` calls this function recursively continuously before the next repaint of the display.
- **Frame rates** determine the smoothness of an animations. They are measured with **fps** (frames per second) and the higher the fps, the smoother the animations. In a 60Hz refresh rate screen, you have 16.7 millimeter to execute animation code. `requestAnimationFrame` tries to get close to the 60fps magic rate, but if the animation code is too complex.
- `requestAnimationFrame` doesn't require that you specify 

# Graceful Async with Promises:
- **Promises** allow you to defer the execution of some action until a previous action has finished running, or respond to its failure. This allows the execution of a chain of async operations correctly.

## What is a Promise?
- A **Promise** is a an object which represents a *promise* that a result will be returned in the future. There is no guarantee when a result will be available, but there is a guarantee that when a result is available or if the promise fails, you will get the result and keep using it or the failure is handled gracefully. 
- We are not interested in when the result will be returned, but are more interested in getting the result or its failure status all while that it doesn't block the execution of other code.

## The Trouble with Async Callbacks:
- Appreciating Promises can't be fully realized until one understands how callbacks made asynchronous code really hard to understand and resulted in other problems. 
- Let's examine an example where the same problem is tackled using callbacks and then promises to really understand the difference between the two. Let's say you want to order a pizza. Consuming will only happen after these 3 actions take place:
	1. You choose your toppings.
	2. You place an order for the pizza.
	3. You receive the pizza.
- Handling such a sequence of actions with callbacks will go as follows:
```javascript
chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```
- This code is hard to read and follow because of the multi-level nesting that can easily turn into a cryptic mess. This is a classic example of the so-called ***callback hell***. It also requires handling errors with `failureCallback` multiple times.
- 
```javascript
chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) {
  return collectOrder(order);
})
.then(function(pizza) {
  eatPizza(pizza);
})
.catch(failureCallback);
```
- Promises make things much easier to follow:
	* It is easy to read and follow and modify in the future.
	* It requires only one `catch` at the very end so that if any of the steps encounters an error, the whole promise fails. 
	* It is asynchronous, so you can do other things while waiting for the pizza.
	* Each operation is guaranteed to wait for the previous one to be completed before it starts.
- with CS6 arrow functions, these promises can be made even much neater:
```javascript
chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);
```
- This can be simplified to:
```javascript
chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);
```
- The last refactoring might not be easy to read and only works for simple functions. Anyways, I'll stick to previous one for now, and let this whole async callbacks and promises sink in my brain.
- Promises are similar to event listeners but with a few differences:
	+ A promise can only succeed or fail once, you can change it status from failing to succeeding or vice versa once the operation is over.
	+ "If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier."

## Promises Basic Syntax:
- The use of Promises is ubiquitous. Many APIs use them to perform complex tasks and you need to understand how they work. Let's look at some commonly used Promises and how to use them. Later on, we will write our own promises. 
- In this example we will use the **`fetch()`** to fetch an image from the web and then use **`blob`** to transform `fetch`'s raw content into a blob object and then display the blob object inside an `<img>` element:
```javascript
let promise = fetch('soc.jpg');
let promise2 = promise.then(response => {console.log("Successfully blobbed!!!"); response.blob()});
let promise3 = promise2.then(myBlob => {
	let objectURL = URL.createObjectURL(myBlob);
	let image = document.createElement('img');
	image.src = objectURL;
	document.body.appendChild(image);
})
```
- This is what we did:
	+ We called the `fetch()` method and passed it the URL of the image to be fetched. `fetch` returned a promise object which was stored in the `promise`variable. At this stage, the promise is in an intermediate state between success and failure. It is **pending** we say.
	+ When the `Response` object is returned by `fetch`, whenever that happens, we invoke **`then()`** which is a method of the Promise object. The callback method inside `then` is called the executor only runs when the promise call completes successfully and returns the `Response` object (it is **fulfilled**, technically speaking). The returned `Response` object is passed into `then()`. Just like an event listener, `.then()` only runs when an event takes place(the event here is the fulfillment of the promise, namely, the returning of the Response object).
	+ We then run the **`blob()`** method on the response. When the response is available we transform it into  a `Blob` object.
	+ We can create a chain where each `.then()` returns a new promise after the previous promise is fulfilled
	+ After obtaining the blob object, we create a URL that points to it, we create an URL that points to it and then create an image where the source is the blob's URL. We append that image element to our document and that's IT.
- This was a contrived example but it did the job in illustrating how to use simple promises. 

# `async` and `await` Asynch Mechanisms:
# Choosing the right approach:)