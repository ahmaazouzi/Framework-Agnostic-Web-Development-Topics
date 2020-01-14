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
	<dt>setTimeout();</dt>
	<dd>Executes code after a specified period of time has passed</dd>
	<dt>setInterval();</dt>
	<dd>Execute code repeatedly in equal time intervals</dd>
	<dt>requestAnimationFrame()</dt>
	<dd>A modern version of `setTimeout()`. Allows animation to be run at a specified framerate.</dd>
</dl>

## `setTimeout`:
- This function takes 3 parameters:
	1. An anonymous function or a reference to a function defined elsewhere.
	2. A number representing the minimum milliseconds after which the function can run. If you give it zero or no argument, the function runs immediately. We say minimum because  

# Graceful Async with Promises:
# `async` and `await` Asynch Mechanisms:
# Choosing the right approach: