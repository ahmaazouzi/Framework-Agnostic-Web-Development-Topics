Credits go to [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).

# Events:
- "Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired."

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







