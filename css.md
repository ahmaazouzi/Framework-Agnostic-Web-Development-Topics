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
- The following is a summary table of selectors:

| Selector | Example
| --- | --- |
| Type selector | `p { ... }`
| Universal selector | `* { ... }`
| Class selector | `.box { ... }`
| Id selector  | `#unique { ... }`
| Attribute selector | `a[title] { ... }`
| Pseudo-classes selector | `p:first-child { ... }`
| Pseudo-element selector | `p::first-line { ... }`
| Descendant combinator | `article p { ... }`
| Child combinator | `article > p { ... }`
| adjacent sibling combinator | `h1 + p { ... }`
| general sibling | `h1 ~ p`

### More on Pseudos:
- **Pseudo-classes** select elements based on their state. They are the first of their kind, or being hovered over. Some pseudo-classes target a part of your document like first or last line of a paragraph and act if you added a new class to style that portion. These include pseudo-classes like `:last-child` and `:only-child`. Other pseudo-classes react to the user's interaction with the document. They act as if a class were added to the document when the user interacts with it. These include `:hover` and `:focus`.
- **Pseudo-elements** act a little similar to pseudo-classes, but they act as if a whole new element were added to the document rather than applying a new class to an existing element. An interesting example of pseudo-elements is the `::first-line`. It's aware of the viewport while a span element can't style it differently and keep that across different screen widths.
- **Pseudo-elements and pseudo-classes can be combined** to do some crazy stuff like making the first line of the first paragraph of an article bold as in:
```css
article p:first-child::first-line { 
  font-size: 120%; 
  font-weight: bold; 
}
```
- There are two special pseudo-classes that act as if they insert new content into a document. These are **`::before`** and **`::after`**. They are used with the content property to insert content into a document before or after the content of the element they target. Basically, `::before` and `::after` have a spatial rather than temporal meaning.

### A Combinators Primer:
- **Descendant selectors** select elements that descend from other elements. They don't have to be direct children and the selection goes all the way to the bottom of the descent line.
- **Child combinators** select only elements that are direct children.
- **adjacent sibling** select something if it is right next to another element at the same level of the hierarchy. If you insert an element between the two elements in `h1 + p`, the selection is lost.
- **General sibling** select siblings of an element even if they are not directly adjacent.

## The Box Model:
- Everything in CSS has a box around it. Aligning items together depends on understanding the box model and how it works. 

### Block and Inline Boxes:
- CSS has two types of boxes, **block boxes** and **inline boxes**.
- A **block box** has the following characteristics:
	+ The box will extend in the inline direction to fill up 100% of its container.
	+ It breaks onto a new line.
	+ `width` and `height` properties are respected.
	+ Padding, margin and border causes other elements to be pushed away from the box.
- Elements like headers (e.g. `<h1>`) and `<p>` are block elements by default, unless you change that.
- An **inline box** has the following traits:
	+ The box will not break into a new line.
	+ `width` and `height` properties will npt apply.
	+ Padding, margins and border apply but don't cause other inline boxes to move away from the box.
- Examples of inline elements include `<a>`, `<span>`, `<em>` and`<strong>`.
- The `display` property defines the box type of an element withe values `inline` and `block`.

### Inner and Outer Display Types:	
- **Outer** display types are those define whether an element in block or inline. That's what we've just seen.
- **Inner** display types define how elements inside a box are arranged. Elements are laid out in normal flow by default which depends on weather its a block box or inline box.
- To change the inner display type, you use the `flex` value for the `display` property.
 When you set this value, the outer display become a block box, and its inner display becomes flex; all the direct children of the box are arranged in a flex manner (we'll see what a flex is later).
 - Block and inline are the still the default of how the web works and flexbox and the grid specifications were added later and might be described as incidental.

### What is the CSS Box Model?
- The box model applies fully to the block box type but only applies partially to the inline box. The model defines how the parts of a box work together to create a box, margin, border, padding and content.
- A css box is made of the following nested boxes from innermost to outermost:
	+ **Content box** where your content goes and can be resized with the `height` and `width` properties.
	+ **Padding box** is white space surrounding the content but is below the border.
	+ **Border box** wraps the content and its padding.
	+ **Margin box** is the layer that wraps everything inside the box. It acts as a buffer or barrier between the element and other elements.
- In a **standard CSS box**, the `width` and `height` properties apply to the content box. Any padding or border is added on top of that content to get the total size of the box. Margins are not counted as part of the box size even though they take up space from the total page size.
- CSS also has an **alternative CSS box** model, where the width and height of a box are the total area of the visible box. The browser use the standard css box by default. 
- To turn the alternative model on for an element, you can set the `box-sizing: border-box` property on it. If you want all the elements to have the alternative box sizing you set it to the `<html>` element and make everything inherit from it as in:
```css
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

### Margins, Padding and Borders:
- Shorthand properties have been seen so far for padding, margins and borders. There are longhands alternative that allow for more granular control over box styling.

#### Margins:
- They are invisible space around a box. They push other element away from an element. They can also be negative, in which case they cause elements to overlap. In both the cases of standard and alternative box models, margins are added after the box area is calculated.
- Margins are usually all controlled once with the `margin` property. They can also be controlled piecemeal with `margin-top`, `margin-right`, `margin-bottom` and `margin-left`.
- You can also use the following super-handy shortcut. Just remember that that these start on top and move clockwise:
```css
margin: 2px 50px -100px 0px;
```
- **Margin collapsing** refers to the fact that the margins of two boxes become one when they touch that they touch. basically if an element **A** has a bottom margin of 100px and an element **B**under it has a 50px top margin, the distance separating their borders is only 100px. The margins collapsed. It only happens to top and bottom margins and happens mainly to adjacent siblings. There are some complex rules on when it happens and we will not discuss such rules here but it is good to be aware that margin collapsing exists.

#### Borders:
- If using the standard box model, the border size is added to the box size. If alternative, the border size is taken away from the content box.
- Just like margins, borders can be controlled with four properties for top, right, left ..etc. Borders do also have a large number of properties, most important of which are `border-width`, `border-style`, `border-color`. Setting each one of these for each side of a box results in 12 properties. You can also use the super-handy `border` shorthand which does a lot in a single line (order of values doesn't matter):
```css
border: red solid 13px;
```

#### Padding:
- Padding is the area sitting between the content and the border. You can't have negative values for padding. Any background applied to the an element will appear behind the padding. Padding pushes content away from the border.

### The Box Model and Inline Boxes:
- All the properties listed in the previous section apply to the block box but only some of them apply to inline boxes:
	+ Width and height are ignored in in inline elements.
	+ Padding and border only push the line to the left and right from the element while they overlap with the top and bottom. The margin only pushes the line away in a horizontal direction and is ignored in a vertical direction, I think.

### Using Display: `inline-block`:
- This is a middle ground between the block and inline display. You can use it when you don't want to line to break onto a new line, but still respect the height and width properties and push other elements away both horizontally and vertically.
- This is mainly used to give some inline elements a greater hit area, mainly anchor elements. `inline-block` allows the use of padding around the link. Navigation bars make frequent use of such a feature. 

## Backgrounds:
### `background-color`:
- this property allows you set background color of an element. The color goes under the content and the padding of an element. 

### background images:
-  Adding a background image is done with the following syntax;
```css
body {
	background-image: url("star.png");
}
```
- By default, when the image is too large for an element, only a part of it becomes a background and it doesn't scale down. If it is too small, it gets tiled to fill up the box.
- If you specify a background color to a background image, the image appears on top of the color.
- **Controlling the `background-repeat`** property is done through setting its to value to one of 4 options: `no-repeat`, `x-repeat`, `y-repeat` and `repeat`. Value names are self explanatory.
- The **`background-size`** property allows you to resize an image to fit inside a box. With the `contain` values, the image will be completely contained inside the background while cover will cover the background completely from side to side. Part of the image might end up outside the background if the image and background don't have the same aspect ratio.
- The background image can also be resized using units like pixels or `em` as in `background-size: 100px 2em`.
- **`background-position`** allows you to position the background inside the box. This positioning is based on a coordinate system where the top left corner of the box is (0,0). The positioning can be done with the following syntax:
```css
.box {
	background-position: top center; 
}
```
- You can also use units to position the image. If you just specify one of the two dimensions, the other is assumed to be the center. If you leave the property altogether or don't specify values, you get the default position which is the top left corner of the box.
- You can also mix keywords such as top and bottom with percentages and pixels. You can also have four values where you specify two distances from two edges as in `background-position: top 10x right 30px;`.

### Gradient Backgrounds:
- When used as a background, a gradient acts like an image. MDN suggests using css gradient generators such as this [one](https://cssgradient.io/).

## Overflowing Content:
- Overflow issues arize when there is too much content to fit into a box.
- CSS tries to avoid **data loss**, that's why it makes data overflow out of boxes where height and width that are too small were specified. This problem can be managed with the **`overflow`** property.

### The `overflow` Property:
- The overflow property gives you total control on overflow through the following values:
	+ **`visible`** is the default.
	+ **`hidden`** hides any excess text outside the box.
	+ **`scroll`** hides excess text but allows you to scroll on any direction to see hidden content. Shows scroll bars on both sides of a box even if no content is overflowing.
	+ **`auto`** doesn't show scrollbars untill there is too much content that overflows.
- `overflow-x` and `overflows-y` do the same thing but only one one direction. They, too, show scrollbars in certain situation but only in one direction.

## Values and Units:
- CSS values are also called data types.

### Numbers, lengths, and percentages:
- Numeric data types in CSS include:
	- **`<integer>`** is a whole number.
	- **`<number>`** is a decimal number.
	- **`<dimension>`** is a `<number>` with a unit attached to it such 5px, 4em, 44s. It is an umbrella term that includes `<length>`, `<angle>`, `<time>` and `<resolution>`.
	- **`<percentage>`** is a fraction of some other values (such as the width of a parent element).

#### Length Values:
- They are divided into two types:
	+ **Absolute values** which are supposed to be the same everywhere. They are largely used for printing. The most common one in css is `px`.
	+ **Relative values** are relative to something else like a parent element or the viewport. These are more useful as they help scale things relative to other things. The following table was ripped wholesale from [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) and it shows such units:

| Unit | Relative to
| --- | ---	|
| em |	Font size of the parent element.
| ex |	x-height of the element's font.
| ch |	The advance measure (width) of the glyph "0" of the element's font.
| rem |	Font size of the root element.
| lh |	Line height of the element.
| vw |	1% of the viewport's width.
| vh |1% of the viewport's height.
| vmin |1% of the viewport's smaller dimension.
| vmax | 1% of the viewport's larger dimension.

- **`em`** and **`rem`** are essential units for length and very frequently used for both text and boxes. 
- With `em` each successive level of nesting gets progressively larger.
- With `rem` each successive level of nesting does NOT get progressively larger.
- If you change the style of the top element, everything under it changes following it.

#### Percentages:
- These act like lengths. They are always set relative to another value. If you set the value of a font-size or a width, it will be the percentage of the font-size or width of the parent,
- Percentages act like `em`'s in that each successive level of nesting gets progressively larger or smaller. 
- While many values accept either lengths or percentages, some only accept lengths.

#### Numbers:
- Some values accept numbers only with no units added to them. A prime example is the **`opacity`**property which accepts a number between 0 (fully transparent) and 1 (totally opaque).

### Color Primer:
- There are many ways to specify color in CSS and they all work the same whether they get attached to backgrounds, text fonts or whatever.
- The modern color system is 24 bit allowing the display of 16.7 million colors. It is a combination of three red, green and blue channels, each channel with 256 values resulting in (256<sup>3</sup> = 16,777,216).

#### Hexadecimal RGB:
- These are made of hash symbols each followed with 6 hex numbers. Each pair of the these hexes represents one of the three color channels (red, blue or green). They are not easy to understand but they are terse and easy to type and copy.

#### RGB and RGBA:
- An **RGB** Value is a function which takes three parameters which represent the three colors. Each one of the parameter is a decimal integer between 0 and 255 (MDN claims this is easier to understand). 
- **RGBA** scheme is similar but has the added alpha channel which control the opacity of the color. It has a value between 0 (full transparency) and 1 (full opacity).
- The difference between the `opacity` property and the alpha channel is that the letter makes only the color transparent while opacity makes the whole element transparent.

#### HSL and HSLA:
- `hsl()` and `hsla()` are less supported by designers love them. HSL accepts these values:
	+ **Hue** represents the color itself and takes a value between 0 and 360 degrees in the color wheel.
	+ **Saturation** The sturation and greyness of a color. A value between 0% (fully grey/ total absence of color) and 100% (fully saturated) 
	+ **Lightness** refers to how much light there is in a color. 0% is total absence of light while 100% is completely white.
- A in HSLA obviously stands for the alpha channel for controlling the color's opacity.
- It is preferred that an entire project sticks to a single color scheme.

### Strings and Identifiers:
- **Identifiers** refer to values not enclosed in quote marks such as `black`, `top`. They are keywords that CSS understands.
- **Strings** are used for values CSS doesn't understands such as generated content with the `content` property with the pseudo-elements, for example or the parameter of the url() function with the background-image.

## Element Sizing:
### Intrinsic Size of Things:
- Intrinsic size refers to the size of an element before any CSS is applied to it. An example is an image size as it is defined it its image file. 
- An empty div stretches horizontally across a page but it has not size in the block direction. When you add content to a div, its height grows. Its size is defined by its content. This is also considered as intrinsic size, even though it is defined by a non-intrinsic factor (the content).

### Setting a Specific Size:
- When you give a div or any other element a specific width and  height, you are giving it an extrinsic size. When setting an extrinsic size for an element, some of the natural behavior of the element is eliminated. A div, for example, ceases to dynamically resizes with more or less content, and you get the overflow thing. That's why one should be careful about resizing.

### Using Percentages:
- A percentage controls the size of a block in relation to the containing box. If not percentage is give, the inner div will take 100% of the size of the containing element.
- Setting the padding and margin size using a percentage yiesld a weird behavior that should be remembered. These percentage values follow the width of the element. If the element is a rectangle, all the padding and margins on top and bottom equal those on the left and right.

### Minimum and Maximum Sizes:
- When you have a box that might have a variable amount of content, you might find it useful to set a minimum and/or maximum size. A div for example, will always have such and such minimum size, but it will stretch to accommodate more content if needed.
- A useful application of `max-size` is to scale down large images. This is a technique used to make images responsive.

### Viewport Units:
- `vw` and `vh` are used to size an element relative to the viewport (the area of a page displayed on the browser). 1vh is 1% of the viewport height and 1vw is 1% of its width.
- Viewport units are very useful as when you want a hero section in your page.

## Styling Tables:
- Styling a table presents special challenges to designers.

### Spacing and Layout:
- **`table-layout`** should usually be set to `fixed`. This will spare you the unpredictable results produced by the automatic resizing tables undergo based on the content they have. Along with Sizing column headings through the the selector `thead th:nth-child(n)`, you create fixed column widths that cater to your needs. Sizing the column heads sizes the whole columns. A fixed layout is especially useful when dealing with dynamic tables where data is inserted and deleted live. 
- Setting the table's **`width`** to 100% of its containing element makes it responsive enough.
- **`border-collapse`** fixes the weird looking default double table cell borders.
- Just add some padding to your table cells by setting them to `td`, `th`.

### Zebra Scripting:
- An extremely useful technique that makes tables both visually appealing and tremendously accessible and usable is zebra scripting which allows alternating styles between columns or rows. This is not specific to tables, but is especially useful in tables. It is mainly based on the `:nth-child()` pseudo-selector and works nicely with the `odd` and `even` values. The following example should be self explanatory:
```css
tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}
```

## Debugging CSS:
- Inspect in Chrome and its equivalent in Mozilla are amazing tools that can help you debug your css effectively.

### Debugging through Dev Tools:
- The following is a list of tips on CSS debugging through the use of browser dev tools:
	+ The **Elements** view shows you the rendered DOM which has undergone changes and corrections done by the browser. It is similar to the HTML source but not exactly. To see the HTML source, you use the **Sources** view. **DON'T CONFUSE THE TWO**.
	+ Shorthand properties can be expanded by clicking the triangle next to a shorthand in the styles pan.
	+ properties can also be toggled to do A/B testing.
	+ You can add new properties.
	+ You can change properties.
	+ Make use of the layout section and the colored box model it shows.

### Specificity Issues:
- One of the main culprits in CSS headaches is specificity. Failing to change or apply a style to an element is more often than not caused by specificity factor. A selector with higher specificity is causing you the headache.
- Dev tools are great at pinpointing such problems. When you inspect an element, you'd see if a class is applied to the element. It will also show you the element selector crossed out. 

### Suggested CSS Debugging Workflow:
- **Use a rubber duck** when you find yourself in existential crisis caused by CSS.
-  Invalid code results in some very subtle errors that are very hard to debug. **Run your code through a CSS and an HTML validator**. The [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) Service and [Markup Validation Service](https://validator.w3.org/) do a great job at this.
- **Check browser support** for properties you want to use.
- **Is something overriding you CSS?** This the specificity thing mentioned earlier.
- **Make a reduced test case of the problem**. "A reduced test case is a code example that demonstrates the problem in the simplest possible way, with unrelated surrounding content and styling removed". Isolating a specific problem can help you find exactly where the issue is.

## Organizing CSS:
- As CSS files and projects get bigger, they become a maintainability nightmare. This section shows you how to organize large CSS projects and keep them maintainable.

### Tips to Keep CSS Tidy:
#### Stick to a Style Guide:
- if you work as a part of a team, use their style guide. If you make your own, stick to it and be consistent, or better yet, use [the MDN style guide.](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS)

#### Stay Consistent:
- Make sure you stay consistent even if you are not using a pre-defined style guide. Consistency should be maintained in all sorts of ways, including naming cnventions for classes, color models, or formatting (tabs vs. spaces) .. etc.

#### Format Readable CSS:
- Avoid cramming multiple rules in one line. 

#### Comment Generously:
- In addition, to their explanatory role, comments can also be used to separate the file's logical sections that can be easily scammed through as in:
```css
/* ==== General styles */

...

/* ==== Typography */

...

/* ==== Header and Main Navigtion */

...

```
- You can add an identifiable symbol to quickly find a section through the find function in an editor. The example above uses `====`.
- You can link a tutorial that helped you solve a problem.
- You can explain the reason why you made a certain decision that might sound weird.

#### Divide a Stylesheet ingo Logical Sections:
- This will make searching a property or a selector easy. 
You would section your stylesheet into the following sections:
	+ General styling should be on the top of your document. It is concerned with the styling of such elements as the body, the different header levels (h1, h1 .. etc.), ul, li, table .. etc. Here you are setting default styles for element types.
	+ A sitewide typography section.
	+ A gneral utility section for doing all kinds of things such as unbulleting lists. These utilities can be applied where needed and might not necessarily be the default style for all general types.
	+ A section for sitewide elements such as basic page layout, nav bars, the footer, the header ... etc.
	+ CSS for specific stuff like individual pages or components. 

#### Avoid Overly-specific Selectors:
- The following code has an extremely specific selector:
```css
article.main p.box {
  border: 1px solid #ccc;
}
```
- The problem here is that you will repeat a lot of styling when your selectors are too specific.
- A box class selector would've done the same job as above without risking too much meaningless repetitions.
- Keep specific selectors to a minimum. These should be the exception, while general resusable selectors should be the norm.
- You might have a store page or any other specific purpose page with its own special CSS. This CSS sheet can only be linked where needed and should not be loaded all the time when not needed.
- Breaking a large sheet into smaller ones also minimizes source control conflicts, as there will be less situations where two people work on the same stylesheet at once.

#### Break Large Stylesheets into Multiple Smaller Ones:
- You can break it into a stylesheet that has all the global rules and other stylesheets that have the different groups of particular stylings.
- Multiple stylesheets can be linked from one page and the cascade rules hold where files linked last override earlier ones when applicable.

### Other Tools for Organizing CSS:
#### CSS Methodologies:
- These are structured CSS coding guides that are used for writing and organizing CSS. These methodologies might be verbose, but they have more structure.
- **OOCSS (Object Oriented CSS)** is the more common one of these methodologies. OOCSS is based on separating CSS into reusable object which can be applied to any elements. A typical example is the media object. It is a fixed image or video on one side with flexible text on the other side. The text can be a description, comments .. etc. Nicole Sullivan is a key figure in the *OOCSS movement*. OOCSS is similar to composition is OO programming. Instead of creating to different style classes for two different components, you'd create two granular but still generic classes and then apply both of them to an element as in `class="class1 class2"`. 
- **BEM** stands for block element model. It is recognizable by its extensive use of many dashes. It has strict naming conventions and maybe similar to OOCSS . MDN doesn't say much about this.
- There are other systems that I don't give a pixel about at the moment. 

#### Build Systems for CSS:
- CSS **pre-processors** and **post-processors** have become a thing and it is important to be aware of their existence. Pre-processors take files and turn them into stylesheets, while post-processors take finished stylesheets and change them (mostly to make them load faster).
- An important pre-processor nowadays is Sass. This beast allows you to define variables which can be changed only once if need be, instead of tracking it all over the project. It looks like CSS has a new feature (custom properties) which makes this feature of Sass obsolete. Sass does also allow you to break your CSS into very small files, even down to a component. This would be easier for maintainability. Sass can compile these small files into one large file or a few large stylesheets.
- MDN suggests using CodePen to try Sass out.
- Post-Processors like [cssnano](https://cssnano.co/) are mainly used for optimizing/minifying CSS. They remove comments, excess white space and unnecessary definitions. They also compress identifiers, resulting in much smaller file sizes good for bandwidth usage and network traffic.

# Styling Text:
### How is Text Styled?
- Text is placed inside the content area of a CSS box. It effectively acts like an inline element, even when it is inside a block element. 
- Styling text falls into two categories:
	+ **Font styles** affect the text itself, its size, color, font, boldness, whether its italic or not, etc. 
	+ **Text layout styles** affect things such as spacing between letters and lines, text alignment within the content box, etc.
- All text inside an element is styled uniformly, unless it is wrapped inside an element or use a text-specific pseudo-element.

### Fonts:
#### Color:
- The `color` property is used to color content, which is mostly text. It doesn't change text color only, but also all text decoration, be it underline or overline. 

#### Font Families:
- The `font-family` property allows you to specify a font or a list of fonts to display your content. The fonts you specify will only be displayed if they are available in the machine where the browser sits, otherwise it will to a browser's default font.
- **Web safe fonts** are ones that are guaranteed to be found in most machines running the top most popular operating systems. These include the monospace *Courier New*, the sans-serif *Ariel, Trebuchet MS, Verdana* and the serif *Georgia* and *Times New Roman.*
- [**Web fonts**](#web-fonts) are fonts downloaded with the webpage. 
- There are five CSS **generic fonts** that can be considered as worst scenarios to fall back to when no appropriate fonts are found. These are `serif`, `sans-serif`, `monospace`, `cursive` and  `fantasy`. The first 3 are widely available but the last too should be used with great care as they are unpredictable.
- To minimize the likelihood of a fonts fail, you should provide a font stack to your `font-family` property. It's a list of fonts with the most generic one or the most widely available one at the end. The browser will look for the fonts it has, if not found, it looks for the next one and so on as the following example shows:
```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```
- If a font is composed of multiple words, put it inside quotes.

#### Font Size:
- Most units, seen in the previous section, can be used to size text, but the most effective units for texts are:
	+ **`px`** is the absolute pixel size. It's the same across displays.
	+ **`em`** "1 em is equal to the font size set on the parent element of the current element". This can be tricky if there are a lot of nested elements.
	+ **`rem`** This is similar to `em` but elements are sized in relation to the root element `<html>`. The size doesn't change with how many levels of nesting an element has. These are less tricky than `em`s but have limited support in older browsers.
- The default root size in standard browsers is 16px. Elements like paragraphs inherit that exact size, `16px` or `1em` by default, while `<h1>` elements are `2em` or `32px` by default.
- With multiple levels of nesting, things can get messy quickly. It's better to stick tpo `rem`s as much as possible, or at least avoid styling container elements.
- We have two important tips for keeping font sizes manageable:
	+ Change the root element size from 16px to 10px, so that the font sizes for inherited elements can be easily calculated.
	+ You can and should put font-size rulesets in a designated area, it would be easy to find them and compare them against each other.

#### Font Style, Font Weight, Text Transform, and Text Decoration:
- CSS has these three properties to alter the visual emphasis of text:
 + **`font-style`** is used to turn italics on and off. It can have one of three values: `normal`, *`italic`* or *`oblique`* (this one is similar to italics).
 + **`font-weight`** takes many values but the main ones are normal and **bold**. You can also use the value range 100-900 which provides plenty of granularity.
 + **`text-transform`** transforms text case and has the values: none, uppercase, lowercase, capitalize and full width (this one transform texts to something similar to monospace).
 + **`text-decoration`** sets decorations like underline. It is mainly used to remove underlines on links. Values are: none, underline, overline, and line-through.

#### Text Shadows:
- These are done with the `text-shadow` property and can be done as follows:
```css
text-shadow: 4px 4px 5px red;

/* The following applies multiple text shadows: */
text-shadow: 1px 1px 1px red,
             2px 2px 1px red;
```

### Text Layout:
#### Text Alignment:
- `text-align` controls text alignment withing the content box and has the following four values: `left`, `right`, `center` and `justify`. `justify` spreads text out, varying the gaps between words so that all lines are of the same width. This can result in bad text especially when there are many long words. It's better to use this style with the `hyphens` to break long words at the edge of the line. The `hyphens` property specifies the behavior of hyphens at line breaks. They can be controlled manually, automatically or omitted altogether with the values: `auto`, `manual` and `none`.

#### Line Height:
- `line-height` is for line height :smiley:. This can take any CSS unit, but unitless values are preferred. They act as multipliers (they are multiplied by text size). Preferred values range between 1.5 and 2.

#### Letter and Word Spacing:
- `letter-spacing` and `word-spacing` are not used very frequently, however, they can be useful when using dense fonts. Their values can be used with any type of units. Example:
```css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

### Font Shorthand:
- The shorthand property `font` is a terse way to define most of what you really need conerning text styling. Its values are stacked in the following order: `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`, `line-height`, and `font-family`. 
- `font-style` and `font-size` are the two required properties and a forward slash should be used to separate `font-size` and `line-height`.
- Example:
```css
font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
```

## Styling Lists:
- Lists are similar to the rest of HTML, but they have their own special styling best practices.

### List Spacing:
- Preserve **vertical rythm** which refers to making lists keep the same vertical spacing as surrounding elements such as paragraphs.
- Horizontal spacing should also be paid attention to.
- Make sure fonts are also similar to the rest of the page.
- `<dt>` elements in description lists should be made bold.
- Generally, try to keep things consistent. 

### List Specific Properties:
- Some properties are specific to lists. These include:
	+ `list-style-type` allows you to change the list bullets to squares or circles for uls, or numbers, roman numerals or letters for ols.
	+ `list-style-position` allows you to let the bullet appear inside the list item or outside it. The default is inside. An important list style type is `none` where you'd have no list styling. This is useful where lists are used to create such tools as todo lists or shopping carts.
	+ `list-style-image` allows you to substitute an image for the bullet. This gives you limited control over the size and position of the image. A background image is more useful and configurable as in:
```css
ul li {
  padding-left: 2rem;
  background-image: url(checkmark.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

### `list-style` Shorthand:
- This shorthand allows for terseness and the properties need not be in any particular order:
```css
ul {
  list-style: square url(example.png) inside;
}
```

### Controlling List Counting:
- HTML and CSS give you tools to control how the counting is done on ordered lits. You can start at a custom number rather than 1, you reverse the counting or have intervals other than 1. 
- The `start` atribute on an `<ol>` allows you start at any number as in `<ol start="55"> ...`.
- `reverse` reverses the counting as in `<ol start="55" reversed> ...`.
- The attribute `value` allows you to set list items using custom numbers as in:
```css
<ol>
  <li value="2">Sausage</li>
  <li value="4">Harissa</li>
  <li value="6">Potato</li>
  <li value="8">Cheese</li>
</ol>
```

## Styling Links:
- Links are fundamental and styling them and their different states effectively can result in great UX. 

### The Basics of Link Styling:
#### Link States:
- Links have states that differ based on user interaction. HTML provides different pseudo-classes that allow for the effective styling of links based on such states:
	+ **Link (unvisited)** is the default state the link is in when it is not in any other state. The pseudo class **`:link`** is meant for it.
	+ **Visited** is a link that has been already visited. The pseudo-class **`:visited`** is used to style it
	+ **Hover** its pseudo-class is **`:hover`**.
	+ **Focus** its pseudo-class is **`:focus`** and means the link is in focus, e.g. moved to with the TAB keyboard.
	+ **Active** its pseudo-class is **`:active`** and means the link is being activated (clicked on).

#### Default Styles:
- Generally speaking, unCSSed links are styled as follows:
	+ Links are underlined.
	+ Unvisited Links are blue.
	+ Visited links are purple.
	+ Hovering over a link turn the mouse cursor into a little hand.
	+ Focused links are surrounded by a line.
	+ Active links are red.
- These default styles didn't change much since the invention of the web in the 1990's. Users expect such styling and if you alter it, try not to stray away too much from it.
- When styling links, try to do the following:
	+ Underline links but not other elements. If you don't underlining, make sure you highlight links in some special way.
	+ Make them react when hovered or focused and make them react a little differently when activated.
- Custom styling links can be done with the `color`, `outline`, `cursor` and other properties. Try to avoid changing the cursor link behavior unless absolutely necessary.

#### Styling Links:
- When styling links, make sure to following this example:
```css
a {

}


a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}
```
- These styles build on each other, following the cascading constraints. If you don't follow this patterns, things won't work very properly. You can remember this order with the mnemonic **L**o**V**e **F**ears **HA**te.
- Generally speaking, you can:
	+ remove underlining, but return the underline (preferably using a border-bottom property as you can have more control over this one).
	+ Give links a different vibrant color.
	+ Allow for a background color of a link that appears when the link is hovered over, visited, focused or activated.
	+ On Activation, it is a clever act to invert color, and background color to signify that something is important is happening. 


## Web Fonts:
- Web fonts are a CSS feature that allows you to specify font files that get downloaded with your website, assuring your website is displayed the way you want. This is done with the `@font-face` selector as in the following example:
```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff");
}
```
- Then the specified font can be used as one of the values of font-family as in:
```css
html {
  font-family: "myFont", "Times New Roman", serif;
}
```
- Two problems plague web font use:
	1. Browsers support different web font formats, so you might need more formats. The major ones are WOFF/WOFF2 (web open font format version 1 and 2), abd EOT (embedded open type).
	2. Fonts are generally not free. You either have to pay to use them or go through some licensing aerobics.
- There are other steps involved in using web fonts. I don't need this at the moment. 

# CSS Layout:
#Custom Properties