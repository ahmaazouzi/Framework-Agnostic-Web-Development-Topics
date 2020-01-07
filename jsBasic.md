All credits go to [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript).

# General:
- Each tab is an isolated execution environment. and code in one tab cannot directly affect code in another tab. This largely a a security measure.
- Most modern js compilers use **just-in-time compiling** to improve performance. "JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible."
- Avoid inline JavaScript. It is bad!!! Instead, go for external JavaScript files where, for example you can select all buttons or all buttons of some class with one expression. Inline JavaScript pollutes the HTML and is hard to maintain.

## Script Loading Strategies:
- You might get errors based on where you call or define your JavaScript in your HTML. JavaScript might use parts of the DOM to do its job, but if that part of the DOM is not loaded yet (making it available for use by JavaScript), you'd get errors. Ways to get around this problem include:
	+ 