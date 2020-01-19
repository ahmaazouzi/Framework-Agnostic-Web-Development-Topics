Credits go to [MDN client-side APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs) and Wikipedia's [article](https://en.wikipedia.org/wiki/Ajax_%28programming%29) on Ajax.

# Table of Content:
- [Introduction to Web APIs](#introduction-to-web-apis)
	* [What is an API?](#what-is-an-api)
	* [What Can APIs Do?](#what-can-apis-do)
	* [How Do APIs Work?](#how-do-apis-work)
- [Manipulating Documents](#manipulating-documents)
	* [The Important Parts of a Web Browser](#the-important-parts-of-a-web-browser)
	* [The Document Object Model](#the-document-object-model)
	* [Basic DOM Manipulation](#basic-dom-manipulation)
		+ [Selecting Elements to Be Manipulated](#selecting-elements-to-be-manipulated)
		+ [Creating and Placing New Nodes](#creating-and-placing-new-nodes)
		+ [Moving and Removing Elements](#moving-and-removing-elements)
		+ [Manipulating Styles](#manipulating-styles)
	* [Getting Useful Information from the Window Object](#getting-useful-information-from-the-window-object)
	* [A Dynamic Shopping List](#a-dynamic-shopping-list)
- [Fetching Data from the Server](#fetching-data-from-the-server)
	* [What Is the Problem?](#what-is-the-problem)
	* [A Basic Ajax Request](#a-basic-ajax-request)
		+ [XMLHttpRequest](#xmlhttprequest)
		+ [Fetch](#fetch)
- [Client-side Storage.](#client-side-storage)
	* [What Is Client-side Storage?](#what-is-client-side-storage)
		+ [Cookies](#cookies)
		+ [Web Storage and IndexedDB](#web-storage-and-indexeddb)
		+ [Cache API](#cache-api)
	* [Storing Simple Data with Web Storage](#storing-simple-data-with-web-storage)
		+ [Basic Syntax](#basic-syntax)
		+ [Separate Storage for Each Domain](#separate-storage-for-each-domain)

# Introduction to Web APIs:
- This section is a high-level overview of APIs, how they work, how to use them and how they are structured. It also treats the different kinds of APIs.

## What is an API?
- **Application programming interfaces** are constructs available for programming languages that abstract complex code and make programming easier and convenient. It acts like a a socket. You just plug the thing in and you get electricity. No need to deal directly with the fascinating, complex and lethal world of electricity.
- Client-side JavaScript has many APIs. They are not part of the core JavaScript language but are built on top of it, adding much more power and great functionality to it. Client-side JavaScript APIs are generally divided into categories:
	+ **Browser APIs** are simply built into the browser and allow you interact with and manipulate the data in the browser and the system where the browser lives. These use complex lower level code written in C or Rust.
	+ **Third-party APIs** are not built into the browser and are generally pulled from somewhere in the web. Examples include the Github and Twitter APIs.
- What are the different components of the client-side JavaScript ecosystem and how do APIs fit into it. It largely consists of:
	+ **JavaScript** the language itself.
	+ **Browser APIs**.
	+ **Third-party APIs**.
	+ **JavaScript libraries** which are JavaScript files containing custom funtions that add to the functionality of your code. These include React, jQuery, etc.
	+ **JavaScript frameworks** such as Angular and Ember are packages of JavaScript along with HTML and CSS. They are like libraries but are characterized bu **inversion of control**. In libraries, the developer is in control and calls code from the library. The frameworks, on the other hand, are in control and they do call the developer's code.

## What Can APIs Do?
- Common browser APIs include:
	+ **APIs for manipulating documents**, chief among which is the **document object model (DOM)**. It is used for manipulating CSS and HTML.
	+ **APIs for fetching data from the server.** These update small subsections of the document without a whole browser refresh making a site feel more responsive. These are termed **Ajax** and include the important **`XMLHttpRequest`** and the **Fetch API**.
	+ **APIs for drawing  and manipulating graphics** include **Canvas** and **WebGL**
	+ **Audio and Video APIs** are used for manipulating audio and video.
	+ **Device APIs** allow for retrieving manipulating hardware data. These include the **Notifications** and **Vibration** APIs.
	+ **Client-side Storage APIs** allow you to store data in the client resulting in maintaining state between page loads and even working offline. These include simple name/value storage as in the case of the **Web Storage API** or more complex tabular data storage as in the case of the **IndexedDB API**.
- Common Third-party APIs include the **Twitter API**, **Google Map API**, **Youtube API**, etc.

## How Do APIs Work?
- Common features of JavaScript APIs are
+ **APIs are based objects** with members storing the API objects data and methods for interacting with the API and manipulating its data.
+ **They have recognizable entry points** such as the **Document** object, denoted with the keyword `document` which is the entry point to the DOM. Another entry point to the DOM is an instance of an HTML object. think for example of `p.textContent`.
+ **They use events to handle change in state**
+ **They might have additional security mechanisms.** Some APIs only work through HTTPS because they might include sensitive data such as the **Push API** and **Service Workers**. Some APIs ask for user permission such as the **Notifications API**.

# Manipulating Documents:
- The **DOM (Document Object Model)** is a set of APIs for controlling HTML and styling information that makes heavy use of the **Document** object. 

## The Important Parts of a Web Browser:
- Browsers are complicated mechanisms with many moving parts. Many such parts can't be directly manipulated using JavaScript, for security reasons and other reasons.
- Web APIs, however, give us access to a lot of functionality while abstracting away much of the internal complexity of a browser.
- A browser has 3 parts that are directly involved in viewing web pages:
	+ The **window** is basically a tab where the page is loaded. The JavaScript object **`Window`** is used to manipulate the window. Examples of things you can do with this object include getting the window's size with `Window.innerWidth` and `Window.innerHeight`, manipulating the document loaded into the window, storing client-side data in local storage, attaching an event handler to the current window, etc.
	+ The **navigator** represents the state and identity of the browser and is represented in JavaScript by the **`Navigator`** object. You can use it to retrieve thing such as the user's preferred language and streams from a webcam. 
	+ The **document** is the actual page loaded into the window (in JS it is **`Document`**). It allows you to manipulate the HTML and CSS in the page. You can create, add, remove elements. You can manipulate their content and styling, etc. 
- This article is focused mainly on manipulating the document.

## The Document Object Model:
- When a document is loaded in a tab, it is represented by a DOM. It is a "tree structure" that allows for easy access and manipulation of the HTML structure using a programming language.
- To get a  better idea of how the DOM works let's visualize it.
```xml
<!DOCTYPE html>
<html>
<head>
	<title>DOM</title>
</head>
<body>
	<main>
		<h1>
			DOM is the real deal
		</h1>
		<p>
			The DOM is everything <a href="#">Yes Yes Yes</a>
		</p>
	</main>
</body>
</html>
```
- Passing the code above through Ian Hickson's [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/), yields the following nice break up of the DOM tree:
<div style="text-align: center">
	<img src="practice/domStructure.png" alt="DOM Tree" width="440" height="350" />
</div>
- We can see that each **element** or bit of **text** has its own entry in the tree. Each one of these is called a **node**. Node can be described in terms of their type and their position in the tree in relation to other nodes:
	+ **Element node** is an element as it exists in the DOM.
	+ **Root node** the top node of the tree, which is the `HTML` node in HTML. XML and SVG have their own root nodes.
	+ **Child node** is a direct descendant of another node.
	+ **Descendant node** A node anywhere inside a node.
	+ **Parent node** Any node that has another node inside it.
	+ **Sibling nodes** are nodes that sit on the same level inside the DOM tree.
	+ **Text node** is a node containing a text string.

## Basic DOM Manipulation:
- We have seen DOM manipulation methods all over the place. 

### Selecting Elements to Be Manipulated:
- To manipulate an element, you need to first select it and store a reference to it inside a variable as in the following example:
```javascript
let link = document.document.querySelector('a');
```
- Once stored in a variable, you can start manipulating it using the methods and properties available to it. These methods are defined in interfaces like `HTMLAnchorElement` for the `<a>` element. Thid interface inherits the `HTMLElement` interface which also inherits from the `Node` interface which represents any kind of Node in the DOM. You can readily see these properties and methods suggested by developer console in Firefox or Chrome. Our link element, for example, has such properties as `href` and `textContent`. 
- **`Document.querySelector()`** is the recommended modern way of selecting elements since it is based on CSS selectors. This method only matches the first matching element. To select all elements, you need **`Document.querySelectorAll()`**. This method matches every element of the given type and stores it in a list called **NodeList**. 
- There are other ways to select elements. These are older and would work in old browsers, but they are out of fashion. They include:
	+ **`Document.getElementById()`** selects an element by its id. It returns an element with the given id.
	+ **`Document.getElementsByTagName()`** selects an element by its tag name. It returns an array of the selected elements. 

### Creating and Placing New Nodes:
- The following code is a typical scenario where a node is created and placed in a specified location in the document:
```javascript
const section1 = document.querySelector('#section1');
const p = document.createElement('p');
p.textContent = "This is my first node";
section1.appendChild(p);
```
- You can also create a text node with **`Document.createTextNode()`** as in:
```javascript
const text = document.createTextNode('I\'m a text node');
```
- There are other methods to select elements based on their relative position or relation in a DOM tree to other specified elements.

### Moving and Removing Elements:
- **`Node.appendChild()` DOES LITERALLY MOVES AN ELEMENT FROM PART OF THE TREE TO ANOTHER**. If you select some element and append it to another element, the element is moved fromt its original location and not just copied.
- To copy an element, you can use **`Node.cloneNode()`** to make the copy and then append it where you want as in:
```javascript
const copyLink = link.cloneNode(true);
p.appendChild(copyLink)
```
- Instead of moving an element around, the `cloneNode()` method makes a copy which can then be appended where need be.
- Removing a node is straightforward. It can be removed using a reference to its parent and itself as the following snippet shows:
```javascript
section1.removeChild(p);
```
- It can also be done using a reference to the element to be removed as in:
```javascript
p.remove();
```
- This last method is not available in older browsers. If you don't know the parent node of the element you want to remove, you can use the **`parentNode`** property as follows:
```javascript
p.parentNode.removeChild(p);
```

### Manipulating Styles:
- There are multiple ways styling can be manipulated.
- The **`Document.stylesheets`** returns an array of **`CSSStyleSheet`** objects. You can access these objects and change them as you wish, but this is an outdated and hard way to manipulate styles.
- The cooler and more standard way of styling these days is done withe the **`HTMLElement.style`** property which can be used to manipulate the styling of an element directly as in:
```javascript
p.style.color = 'red';
p.style.backgroundColor = 'yellow';
```
- Notice that while CSS properties have have a dash in the middle as in `background-color`, JavaScript style properties are camelcased (`backgroundColor`).
- Another, I would say ingenious method to change styling is through the use of **`Element.setAttribute()`** which sets an attribute to an element. This method usage is not restricted to styling but is general. It takes a parameters, one for the attribute and the second one for desired value to be set to the element. Let's say you have a predefined class `focused` you want to add to some element. You can simply do with the following snippet:
```javascript
textInput.setAttribute('class', 'focused');
```

## Getting Useful Information from the Window Object:
- The following almost self-explanatory example shows how the `Window` object can be used to change the style of an element:
```javascript
window.onresize = function() {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  div.style.width = winWidth + 'px';
  div.style.height = winHeight + 'px';
}
```
- This is freaking cool.

## A Dynamic Shopping List:
- I will attempt making this shopping list on my own and compare my results to the one given by MDN. 
- This was easy. It took just a few minutes. The result can be found my [codepen](https://codepen.io/ahmaazouzi/pen/XWJxJmm).
# Fetching Data from the Server:
- A common ask in modern websites is to retrieve relatively small chunks of data and update sections of a web page without requiring a whole page refresh. This feature has revolutionized the web in term of responsiveness. It is done mainly with the **XMLHttpRequest** and **Fetch** APIs.

## What Is the Problem?
- In the olden days, even updating a very small section of a page requires that you reload the whole page. This meant you had to wait for a second or more, which was and is still unacceptable.
- **Ajax** which stands for ***asynchronous JavaScript and XML*** is "s a set of web development techniques using many web technologies on the client side to create asynchronous web applications." Ajax came to solve this problem. Using Ajax, a web page now can request small chunks of data in the form of XML, JSON, HTML or plain text and use them to update portions of the display only when needed. This is done chiefly by **`XMLHttpRequest`** and the the newer **Fetch API**.
- Ajax uses a web API as a proxy that sits between the client and the internet and manages data flow in smarter ways, allowing for  partial display updates and partial data loading. This makes the web page much more responsive. Ajax APIs also allow storing data in the local machine and only reload the data when it changes.
<div style="text-align: center">
	<img src="practice/ajax.png" height="383" width="512">
</div>

## A Basic Ajax Request:
### XMLHttpRequest:
- The `XMLHttpRequest` constructor (also called **XHR**) is the good old way to do Ajax stuff.
- The following code is a portion of a larger code example provided by MDN, but using XHR is largely simple and the example here is self-explanatory:

```javascript
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text';

request.onload = function() {
  poemDisplay.textContent = request.response;
};
request.send();
```
- Basically, you'd:
	+ create an XHR object and store a reference to it in a variable.
	+ You open a request with the **`XMLHttpRequest.open()`** function which takes at least two parameters, one specifying the type of the request and the other the url pointing to the resource to be loaded.
	+ You define the the type of the response you want with the **`XMLHttpRequest.responseType`** property. This can be  `text`, `blob`, `json`, etc. 
	+ You define a function that perform an action when the data is loaded with the **`XMLHttpRequest.onload`**.
	+ Finally, you send the request with **`XMLHttpRequest.send()`**.

### Fetch:
- Using the **Fetch API** you can achieve the same results as you did with XHR in far fewer lines:
```javascript
fetch(url)
.then(response => response.text())
.then((text) => poemDisplay.textContent = text);
```
- We've covered this in the [Promises](jsAsync.md#promises-basic-syntax) section.
- The only thing that I still don't really understand is the `<Response>.text()` method reun on the returned object. I know its purpose is similar to specifying the type of the data, but I don't know how it works.

# Client-side Storage.
## What Is Client-side Storage?
- Client-side storage is somehow similar to server-side storage. It consists of JavaScript APIs that allows for storing data on the client and retrieving it when needed. Reasons for doing so include:
	+ Personalizing user experience.
	+ Persisting previous activity.
	+ Saving data and assists for for quicker loading.
	+ Saving documents for offline use.
- Client-side and server-side storage can cooperate to store things.
- There are limits on the size that storage client-side can take both per API and cumulatively.

### Cookies:
- Cookie are the OG way of storing data on the client. Cookies suffer from security, size limitations and other problems. They are almost obsolete. Their only virtue is that they are supported in ancient browsers.
- MDN claims that the reasons why cookies are still being used is legacy libraries that still use libraries and unupdated and old reference and training material that's not aware of the newer technologies for client storage.

### Web Storage and IndexedDB:
- The **Web Storage API** provides a simple syntax for storing and retrieving small and simple data items. Such data items are in the form of name/value pairs.
- **IndexedDB** is a complete database system on the client. It stores complex data such as customer records and even stuff like audio and video files.

### Cache API:
- This is the newest method of client-side storage. It stores responses to some requests and is ideal for storing website assets in the client for use when offline, it is used with **Service Worker API**. What's this, mate??!

## Storing Simple Data with Web Storage:
### Basic Syntax:
- Web Storage syntax is freaking easy. It consists of simple name/value pairs that are retrieved when needed.
- Web Storage data is contained within two object like structures:
	+ **`sessionStorage`** which persists data as long as the browser is open. Once closed, the data is lost.
	+ **`localStorage`** which stores data even after the browser is closed. It's there forever, and it's generally more useful.
- **`Storage.setItem()`** allows you to store data in the client. It takes a name parameter and a value parameter. The name should be a string. It won't work if it's not a string in the current version of Firefox.
```javascript
localStorage.setItem('name','Merneptah');
```
- **`Storage.getItem() `** takes the name of the data item and returns its value. It's better to use it with a variable:
```javascript
let name1 = localStorage.getItem('name');
name1 // returns "Merneptah"
```
- **`Storage.removeItem() `** takes the name of the item and removes it from storage:
```javascript
localStorage.removeItem('name');
let name1 = localStorage.getItem('name');
name1 // Value now is null
```

### Separate Storage for Each Domain:
- Each domain has its own separate data store. This is an obvious constrain for obvious security reasons.

***I am tired and not enjoying this indexedDB thing***

