Credits go to [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).

# Events:
- "Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired."

## Table of Contents:
* [Intro](#intro)
	+ [An Event Example](#an-event-example)
	+ [Node.js Use of Events](#nodejs-use-of-events)
* [Ways of Using Web Events](#ways-of-using-web-events)
	+ [Event Handler Properties](#event-handler-properties)
	+ [Inline Event Handlers Are Bad](#inline-event-handlers-are-bad)
	+ [`addEventListener()` and `removeEventListener()`](#addeventlistener()-and-removeeventlistener())
	+ [Which Event Listening Mechanism Method to Use?](#which-event-listening-mechanism-method-to-use)
* [Event Object](#event-object)
* [Preventing Default Behavior](#preventing-default-behavior)
* [Event Bubbling and Capture](#event-bubbling-and-capture)
	+ [Bubbling and Capturing Defined](#bubbling-and-capturing-defined)
	+ [The `stopPropagation()` Function](#the-stoppropagation()-function)
	+ [Event Delegation](#event-delegation)

## Intro:
-  The system fires a signal when an event occurs. The system also allows an action to occur automatically when an event takes place. E.g. When a pilot receives a signal that the runway is clear, the pilot starts taking off.
- In the Web, an event is fired inside the window and is attached to a specific item that is inside the window. The item the event is attached to can be a single element, a group of elements, the whole html document in the current window or even the whole window itself.
- Types of events include:
	+ A click or hover over an element.
	+ Pressing a keyboard key.
	+ Resizing or closing the browser window.
	+ A form being submitted.
	+ An error occurring.
	+ A video being Played.
- Events have **event handlers** which are the functions defined to run when events take place.
- When a function is defined to run as a response to an event, we say the functions is **registered as an event handler**.
- People mix **event listeners** and event handlers. These are not really the same. Listeners listen for events to occur, while event handlers run in response events.
- Events are not part of core JavaScript. They are part of browser APIs.

### An Event Example:

```html
<div>
	<h1>0</h1>
	<button>Increment</button>

	<script type="text/javascript">
		const btn = document.querySelector('button');
		let counter = document.querySelector('h1');
		btn.onlick = ()=>{
				counter.textContent++;
			}
	</script>
</div>
 ``` 
 - In the code above:
 	+ **`onclick`** is the **event handler**. It's value is set to a function that increments the value of `counter`.
 	+ The event is a **`click`**

### Node.js Use of Events:
- Node makes excellent use of events. It relies on listeners to listen to events and emitters to emit events periodically. It is a little different from client side javascript, though. It registers event listeners with **`on()`** and registers event listeners and unregisters after they run once with **`once`**.

## Ways of Using Web Events:
- There are multiple ways an event listener can be added to a webpage.

### Event Handler Properties:
-  Event handler properties include: `onclick`, `onfocus`, `onblur`, `onkeydown`, `ondblclick`, `onkeyup`, `onmouseover`, `onmouseout`, etc. 
- Some event handler properties are generic and can be used on any element type while others are specific like `onplay` which is specific to certain elements like `video`.

### Inline Event Handlers Are Bad:
- In the beginning there were **event handler HTML attributes** (also called **inline event handlers**). The values of these attributes can be simple invocations of functions defined in a `<script>` or an external JavaScript file. 
- The values of event handler HTML attributes can also be full JavaScript code.
- These are bad bad and should avoided at all cost. Imagine having a page with a 100 buttons that perform the same action and respond to the same event. Adding the same attribute to every button is bad, but non-inline JavaScript makes this a breeze as in the following:
```javascript
const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
  button.onclick = bgChange;
});
```

### `addEventListener()` and `removeEventListener()`:
- These are newer additions to the DOM specifications are similar to event handler properties, but they are more powerful and have more functionality.
- **`addEventListener()`** works as follow:
```javascript
btn.addEventListener('click', () => {
	btn.style.color = 'red';
})
```
- Adding an event listener has a counter function that removes a listener, namely `removeEventListener()`. It might not be very useful in a small application, but in a complex application, it can be used to clean unused event handlers for efficiency. It also allows you to change event handlers on a button, making it possible to apply multiple actions to one button.
- `addEventListener()` also allows you to add multiple event handler to the same listener, something which can't be done in older event handler properties. In the following code, the second event handler overwrites the first one:
```javascript
myElement.onclick = functionA;
myElement.onclick = functionB;
```
- In the following code, both event handlers are registered and two different functions run when the event is fired:
```javascript
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
```

### Which Event Listening Mechanism Method to Use?
- Inline event handler attributes must be avoided at all costs.
- Event handler properties have better support in older browsers.
- `addEventListener()` is more powerful, but can get complex and has less support. The big advantage is the ability add and remove listeners and to attach multiple listeners to an element.

## Event Object:
- Some event handlers take a parameter that is usually named `e`, `event`, `evt`. This is the **event object**. The event object gets passed to the event handler automatically. The event object has many useful features and information.
- The important **`target`** "is always a reference to the element that the event has just occurred upon." The `target` property allows you to easily set the same event handler on multiple elements without using some twisted difficult method. 

## Preventing Default Behavior:
- Events have default behavior that you can override. Once such default behavior is when a web form is submitted, the data gets submitted to a server page to be processed and the browser is redirected to a success page. By preventing this default behavior, you can prevent the submission of the data and instead print an error message and prompt the user for a resubmission until the data is correct.
- Preventing default behavior can be done with the `preventDefault()` method as in:
```javascript
form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}
```

## Event Bubbling and Capture:
- **Event bubbling** and **event capture** are "two mechanisms that describe what happens when two handlers of the same event type are activated on one element." Really?
- A problem arises when an event happens in nested elements. When an event is attached to an outer element, it can be triggered not only in that element, but also in elements nested within it. It kinda `cascades` down and gets inherited by the element's children. This can be really annoying as the child elements have to respond to the same event differently from those of their parents.

### Bubbling and Capturing Defined:
- When an event is fired on a nested element, modern browsers run two different phases, the **capturing phase** and the **bubbling phase**.
	+ If the event is a click, in the **bubbling phase** the browser checks the outer-most element to see if it has a click event handler registered on it; it then runs it and then move to its child and runs it until it reached the target element.
	+ In the **capturing phase**, it does the reverse. The clicked element is checked for an onlcik event registered on it and it runs it and does the same thing for its parents until it reaches the `<html>` element.

### The `stopPropagation()` Function:
- The `Event` object's function `stopPropagation()` has the magic power of stopping an event from bubbling up. Just pass the `Event` object to the event handler and call the function and all everything goes well as in:
```javascript
btn.onclick = (e) => {
	e.stopPropagation();
	if (document.body.style.backgroundColor === 'white')
		document.body.style.backgroundColor = 'black';
	else
		document.body.style.backgroundColor = 'white';
}
```
= Why is there is whole mess of bubbling and capturing. In the first days of browsers, Netscape used event capturing while IE used bubbling. To standardize things, W3C included both behaviors.

### Event Delegation:
- Event Bubbling made **event delegation** possible. "If you want some code to run when you click on any one of a large number of child elements, you can set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually." If you want, for example, a message to pop up when a list item is clicked, instead of setting an event listener on every one individual `<li>`, you would just set that listener on the parent `<ul>`. This is both convenient, maintainable and probably more efficient.
