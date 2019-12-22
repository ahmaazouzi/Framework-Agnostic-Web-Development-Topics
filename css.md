Content mostly comes from [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) by Mozilla Contributors  which is licensed under CC-BY-SA 2.5.

# CSS Basics:
- This will not be an exhaustive treatment of CSS. I will only focus on weird, interesting or challenging parts.

## What is CSS?
- CSS is for style.
- CSS is a rule-based language. It helps you define rules specifying groups of styles to elements or groups of elements. The following code shows a CSS rule:
```css
h1 {
	color: red;
	font-size: 5em;
}
```
- The rule above has the following parts:
	+ A ***selector*** is the element to be styled. In this case it is the `<h1>`.
	+ The curly braces ***`{ }`*** one or more declarations. In this example two declarations are enclosed inside the curly braces.
	+ A ***declaration*** takes the form of a ***property*** and ***value*** pair. Each property defines a property of the element (such as its size or color) and a value to be given to that value.
- CSS is also vast, so it's broken into modules. 
- **Element selectors** target and style HTML elements. To target all paragraphs in a document, you do it with the `p` selector, for example.
- Multiple selectors can be targeted at once using commas as in:
```css
p, h1 {
	font-size: 2em;
}
```
- HTML has default styling that it applies to elements. With CSS you can change this default behavior. An example of such a change can be applied to list items in a list as in the following example with the the bullets would be removed from list items or in anchors where underlining gets removed as in the following example:
```css
li {
	list-style: amharic-abegede;
}

a {
	text-decoration: none;
}
```
- A **class** is an attribute that can be added to any element and its value can be can be targeted using a class selector in CSS. The class selector is preceded by a dot as in:
```css
.special {
	color: blue;
}
```
- Any element that has a class attribute whose value is `special` will have the color blue.
- A class selector can target certain elements, so that only the given elements with that class will be targeted. This is done as follows:
```css
li.special {
	color: red;
}
```
- If you want to give the same styling to another particular element, you'd add it to the list of elements with the class appended to them as in:
```css
li.special, h1.special {
	color: red;
}
```
- Obviously, the general class `special` will still apply to other elements, meaning that their color stays blue.
- It is not recommended to tie classes to specific elements.

### Styling Things Based on their Location in a Document:
```css
li em {
  color: rebeccapurple;
}
```
- In the example above, a **descendant combinator** which is a space between two selectors,  allows us to target all elements of type `<em>` that are nested inside elements of type `li`.
- Another cool example of location based selector targeting is the so-called **adjacent sibling combinator**. This one targets an element that directly follows another type of element. In the following example, we are targeting only paragraphs that come exactly after elements of type `<h1>`:
```css
h1 + p {
	color: red;
}
```

### Styling Based on State:
- Some elements have different states based on different criteria. An anchor link `<a>` for example has different states based on user interaction. Visited, unvisited, hovered over... etc. are some of these states, and they can be accessed with the element name and its state separated with a column as in: 
```css
a:link {
  color: blue;
}

a:visited {
  color: red;
}

a:hover {
	color: red;
}
```

### Combining selectors and combinators:
- Nesting selectors and using multiple combinators together with other selectors can get confusing, but the rules are consistent. The following examples are explained in the associated comments:
```css
/* Apply style to em that is inside a span that is inside a paragraph*/
p span em { ... }
/* Select em elements which are inside paragraphs and which immediately follow h1 elements. */
h1 + p em { ... }

/* select elements of class special that are inside paragraphs which immediately follow h1 elements. */
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

# CSS Building Blocks:
## Styling Tables:
## Styling Forms and Advanced Styling from HTML forms section:
# Styling Text:
# CSS Layout: