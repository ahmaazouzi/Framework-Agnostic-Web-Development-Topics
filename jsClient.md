Credits go to [MDN client-side APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs).

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

# Fetching Data from the Server:
# Third Party APIs
# Client-side Storage.
