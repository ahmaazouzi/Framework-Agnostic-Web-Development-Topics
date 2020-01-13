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
- Another problem with web workers is that even if 




# Introduction to Asynchronous Javascript:
# Cooperative Asynchronicity, Timeouts and Intervals:
# Graceful Async with Promises:
# `async` and `await` Asynch Mechanisms:
# Choosing the right approach: