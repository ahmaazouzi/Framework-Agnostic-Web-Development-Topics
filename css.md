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

## How CSS Is Structured:
### Applying CSS to HTML:
- There are 3 ways you can apply css to HTML:
	1. **External stylesheets** where an external stylesheet file is linked and can be applied to a whole website. Changes to this file would apply to the whole website. This is easiest to maintain and most efficient way to use css. A cs sheet can be linked with the link attribute which is inserted in a document's head as in : `<link rel="stylesheet" href="index.css">`.
	2. **Internal stylesheet** where a style element is inserted into a document's head. This element has an attribute type whose value is usually "text/css". This not as good as the previous way, but you might have to do it when, for example, using a CMS that doesn't allow you to change external stylesheet easily. This is hard to maintain as changes would appear in some places and not others.
	3. **Inline styling** where you embed styling into elements with the style attribute whose value is a declarations separated by semi-colons. This is extremely BAD and should be avoided at all costs.

### Selectors:
- Valid selectors include:
```css
h1 { ... }
a:link { ... }
.manythings { ... }
#onething { ... }
* { ... }
.box p { ... }
.box p:first-child { ... }
h1, h2, .intro { ... }
```
- If two selectors target the same element, the one defined last overrides the earlier one. CSS is said to **cascade**. In the following example, `<p>` will be colored blue:
```css
p {
	color: red;
}

p {
	color: blue;
}
```
- Cascading works when the two selectors are of the same time type. If they are different element types with different **specificities**, the elements with higher specificity override those with less specificity regardless of which ones appear first. Classes for example have a higher specificities than element selectors. The rules of cascading and specificity are discussed in more detail [here](#cascade-and-inheritance).

### CSS Functions:
- CSS also has **functions** that do calculations and nifty things. An example is the `calc()` function which would calculate different values based on needs as in `.box {width: calc(90% - 20px)}`. This function calculates the width of an element using 90 % of the parent element and subtract 20 pixels from that. Other

### @rules:
- Pronounced as "at-rules", `@rules` are special rules for how css should behave.
- `@import 'somestylesheet.css';`, for example, is used to import an additional stylesheet into the main stylesheet.
- Another improtant @rule is `@media` which allows you to use **media queries** (a topic for a later discussion). With media queries, you can apply CSS only when certain conditions are true.

### Shorthands:
- Some properties like font, border, background, padding, margin ..etc. allow for the use of shorthand properties. Instead of specifying several seprate properties, they can all be lumped together in one precise on as in the following two examples:
```css
padding: 10px 15px 15px 5px;
/* is is more into the brevity thing than */
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```
- If the shorthand involves the sides of an element, you'd move clockwise starting at the top as in the example above.
- The following example is more complicated:
```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```
is the terse version of:
```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-scroll: fixed;
```
- Learning these shorthands is a matter of practice.

### Comments and Whitespace:
- Comments are obviously useful. One recommandation MDN gives is separating the code into sections with comment lines as in :
```css
/* Basic elements Section--------------------------------------------*/
body { ... }
h1 { ... }
p { ... }
/* Classes -------------------------------------------------------------------*/
.box { ... }
.bags { ... }
.other { ... }

```
- White space is essential for code readability. It includes spaces, tabs and newlines. Be careful about white spaces in properties and their values. `margin: 0auto;` is not the same as `margin: 0 auto;`

## How CSS Works:
- This section investigates how CSS and HTML are parsed by the browser and how the latter acts when it encounters CSS it doesn't understand.

### How Does it Actually Work?
- Before a document is displayed by the browser, it is processed through multiple stages. The following is a rough list of happens to a document inside a browser:
	1. The browser loads the HTML document.
	2. It converts the HTML into a DOM (which is a representation of the document in memory).
	3. It then fetches the linked resources such as images, videos and CSS sheets. Javascript is handed later.
	4. CSS is parsed and sorted by the different selectors (elements, ids, classes) into buckets. It attaches different styles to different DOM nodes as required in a process called **render tree**.
	5. The display is show on the screen in the **painting** process.
- Every element, piece of text and attribute becomes a DOM node which is defined by its relationship to other nodes. It can be a parent, a child or a sibling of another node. Understanding the dom is a prerequisite 
- When the browser encounters a wrong property or value, it doesn't understand, it simply ignores the whole declaration and if a rogue selector is encountered, the whole rule is ignored and the rest of CSS gets parsed as normal. No error is produced. This is useful as features which are not supported by all browsers wouldn't have a negative effect and the the errors would stay localized.

# CSS Building Blocks:
- This module is focused on an in-depth dive into the theory and general rules of CSS. This is the meat of styling. Topics such as inheritance, cascading, selectors, the box model, overflowing, units and values, sizing items ..etc. are all discussed here in depth.

## Cascade and Inheritance:
- Spending time trying to understand these rules might sound like a cringy academic luxury, but it is crucial. I had first hand experience of *existential doubts about life* caused by such conflicts between cascade and specificity.

### Conflicting Rules:
- CSS problems usually arise because of clashes between multiple rules applied to a single element. Three fundamental concepts can help us clear the waters on such conflicts:
	+ **The cascade** refers to the fact that the order of CSS rules matters. If two styles are applied to the one element, the style defined last holds and overrides the one used earlier.
	+ **Specificity** applies when multiple rules have different selectors, but could apply to the same element. It is a score of how specific a selector is. An element selector is less specific because it selects all individual elements in a page. A class is less specific since it only selects elements that belong to a certain class. Specificity is stronger than cascade.
	+ **Inheritance** refers to the fact that some properties are inherited from parent elements unless specific values are applied to the children. Some properties are not inherited such as width and border (That would result in some interesting messes).

### Understanding Inheritance:
- Certain properties are inherited by default such as color. Others like margins, borders and padding don't. What gets inherited and what doesn't all come down to common sense.
- You can even **control how inheritance** works through the following property values:
<dl>
	<dt>`inherit`:</dt>
	<dd>Turns inheritance on. The default of every property is to be inherited from parent.</dd>
	<dt>`initial`:</dt>
	<dd>Sets the default browser styling</dd>
	<dt>`unset`:</dt>
	<dd>Resets property to its natural property. If naturally inherited, it acts as `inherit`, otherwise, it acts as `unset`.</dd>
</dl>
- The property `all` can reset the values of all the properties of a selector to one of these values (`inherit`, `unset` or `initial`). "It's a convenient way to undo changes made to styles so that you can get back to a known starting point before beginning new changes." See [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

### Understanding the Cascade:
- Three factors affect how the cascade behaves. They are in order of decreasing importance: **importance**, **specificity**, **source order**.
- **Source order**: What comes last wins. Elements that are closer to the element override old ones that were encountered earlier.
- **Specificity** beats source order. Even if a higher specificity rules comes after another one with lower specificity, it wins. For example, class selectors have higher specificity than element selectors.
	+ When a selector overrides another due to specificity, not the whole rule is overridden. Only the properties that are the same get overridden.
	+Specificity helps avoid repetition. You define a rule that applies to all instances of an element. For those you need specific rules, you define a class or classes for them.
	+ The browser calculates the specificity of selector through the use of a point system. Different points are awarded to a selector based on their type. These points are added to reach its final value. There are four different values for measuring specificity:
		- **Thousands**: used for any declaration that is defined in-line inside a style attribute. It simply gets a score of a 1000.
		- **Hundreds**: for each ID selector inside the overall selector.
		- **Tens**: for each class selector, attribute selector or a pseudo-class contained in the overall selector.
		- **Ones**: for each element or pseudo-element contained in the overall selector.
- **`!important`** is a keyword you can use to override all other factors and rules. The following example from MDN shows its syntax:
```css
.better {
    background-color: gray;
    border: none !important; /* It is appended to the property's value.*/
}
```
- `!important` overrides everything else and the only way to overrides it is to use it in a declaration with a higher specificity or including it in a declaration with the same specificity but later in a file.
- `!important` is bad and hacky. Avoid it like the plague!
- There are situation when using it is essential, such as when working with CMS where you can't overrides styles provided to you.

### The effect of CSS location:
- It is important to consider in what stylesheet a CSS declaration  is defined in.

## CSS Selectors:
- It's all about selectors, mate!

### What's a Selector?
- The first part of a CSS rule, a selector is a pattern of elements and other things that tell the browser which HTML elements to apply some styling to. Elements selected by a selector are the subject of a selector.


### Selector Lists:
- If you have more than one thing that use the same CSS, you can apply the same CSS with a shorthand list as in:
```css
h1, h3, .heading {
	color: red;
}
```
- For better readability, this can also be written as:
```css
h1,
h3,
.heading {
	color: red;
}
```
- Be careful about selector lists. If one selector is invalid, the whole rule is ignored for all the selectors present in the list.

### Types of Selectors:
- Selectors can be grouped together into types that share certain characteristics. These groupings are as follows:

#### Type, Class and ID Selectors:
- These include selectors that target elements as in `h1 { ... }`, selectors that target classes as in `.someClass { ... }`, and selectors that target ID's as in `#someID { ... }`.

#### attribute Selectors:
- These can be used to select elements based on the presence of certain attributes as in:
```css
a[title] { ... }
```
- They also allow you to select elements based on the presence of certain value properties as in:
```css
a[href="https://example.com"] { ... }
```

#### Pseudo-classes and Pseudo-elements:
- **Pseudo-classes** select certain states of an element, such as the `:hover` pseudo-class.
- **Pseudo-elements** select parts of elements rather than whole elements. The `::first-line` for example selects the first line a paragraph (as shown in the viewport) as in:
```css
p::first-line{
	color: red;
}
```

### Combinators:
-  Refers to combinations of selectors. The following targets all paragraphs that are direct children of the article element:
```css
article > p { ... }
```

### Summary Table:
- The following is a summary table of selectors with short explanations of how they work:
| Selector | Example | Explanation 
| --- | --- | --- |
| Type selector  | ` { ... }` |
| Universal selector | ` { ... }` |
| Class selector | ` { ... }` |
| Id selector  | ` { ... }` |
| Attribute selector  | ` { ... }` |
| Pseudo-classes selector  | ` { ... }` |
| Pseudo-element selector  | ` { ... }` |
| Descendant combinator | ` { ... }` |
| Child combinator | ` { ... }` |
| adjacent sibling combinator | ` { ... }` |
| general sibling | `k` |


## Styling Tables:
## Styling Forms and Advanced Styling from HTML forms section:
# Styling Text:
# CSS Layout: