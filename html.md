[Learning HTML: Guides and tutorials](https://developer.mozilla.org/en-US/docs/Learn/HTML) by Mozilla Contributors is licensed under CC-BY-SA 2.5.

# Introduction:
## Basics:
### Elements:
- `<h1>Hello World</h1>` is an **element** where the **content** `Hello World` is enclosed between an **opening tag** `<h1>` and a **closing tag** `</h1>`.
- Elements must be properly nested for consistent results. This is wrong: `<p><strong>WRONG</p></<strong>`.
- **Block vs. inline:** **Block** elements start a new line. They define paragraphs, diffs, lists, tables. Inline elements appear inside lines and only affect parts of blocks; think of a span or a heyperlink element. (Element categories in HTML5 go [beyond](https://html.spec.whatwg.org/multipage/indices.html#element-content-categories) this simple binary division.)
- An **empty elements** is made of a single tag such as `<img>` or `<br>` and is usually used to embed something in the html document.

### Attributes:
- An **attribute** offers additional information about an element as in `<a href="https://www.mozilla.org/"" target="_blank" title="Something">Something</a>` where `target="_blank"` represents an attribute. It tells the browser to open link in a new tab.
- **Boolean attributes** can be empty because they have only one value which is the same as the attribute name. The following 3 lines do the same exact action:
```XML
<input type="text" disabled="disabled">
<input type="text" disabled="">
<input type="text" disabled> <!-- This is more concise -->
```
- Always include attribute values inside quotes.
- Choosing **double quotes** over **single quotes** is a matter of style. However, double quotes might be preferable to avoid problems associated with apostrophes.
- Whitespace gets reduced to a single space.

### Entity References:
- To avoid having special HTML special characters interpreted as html code,we use entity references which are as follows:

| Literal Characters | Character Reference Equivalent 
| --- | --- |
| `<` | `&lt;`
| `>` | `&gt;`
| `"` | `&quot;`
| `'` | `&apos;`
| `&` | `&amp;`

## Meta and Head:
- The **`head`** of an html document defines metadata about the document sich as its title, keywords for SEO, links to css, custom favicons .. etc.
- `<title>` is for title.

### `<meta>`:
- This can be used to convey important information about the page such as its author and a description which has keywords used by search engines in what's called SEO.
```xml
<meta name="author" content="Tata Tata">
<meta name="description" content="This is a totally useless webpage">
```
- Some metadata can result in rich experience to social media users such as this sinppet which would include an image every time the page is shared on facebook `<meta property="og:image" content="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png">`

### meta meta:
- One cool use of meta is the inclusion of icons and especially favicons as which is done as follows
```xml
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```

### CSS and Javascript as metastuff:
- The head is also used to include css and Javascript files to be used by the page. The `<script>` tag doesn't have to be in the head. It's better to put it in the bottom of the page right before the closing body tag.
```xml
<link rel="stylesheet" href="index.css">
<script src="index.js"></script>
```

### Setting Page Language:
- The lang element allows you to set the language of a page as in `<html lang="en-US">`. This is good for SEO is also good for accebility screen-readers.
- Languge can also be set for specific sections of the same page.

## Text:
- HTML gives text structure and meaning resulting in what is called **semantics**.
- Text generally consists of paragraphs and headings, making reading easy.
- Proper use of the paragraph element and the 6 varieties of headings allows you to give structural hierarchy to your text.

### Best Practices to Achieve Structural Hierarchy:
- A single **`<h1>`** per page.
- Correct order of hierarchy. `<h3>` should be a child of `<h2>` and not vice-versa.
- Try to use no more than 3 heading levels per page.

### The virtues of Structural Hierarchy and semantics:
- **Structural hierarchy** improves readability massively and allows the audience to quickly scan through your text. It's also good for SEO as search engines depend on headings and their structure to determine the worth of a page. They also improve accessibility for the visually impaired who can quickly scan a page using headings. CSS also depends on such a structure to style different groupings of elements.
- **Semantics** improves and speeds up communication (sorry Chomsky). We relate semantics to functions.

### Lists:
- There are three types of lists in html:
	1. **Unordered lists.** 
	2. **Ordered lists.**
	3. **Nested lists** where you can nest lists of the same type or ol's inside ul's and vice-versa.

### Eemphasis and Importance:
- Use `<em>` to denote emphasis as screen readers can recognize it instead of a span with an italics css attribute. Symantically speaking, this is better.
- Use `<strong>` instead of a bold css styling to denote importance.
- `<b>`, `<i>`, `<u>` for bold, italic and underlined respectively are called **representational elements**. They have no semantic bearing on the content they mark up.

## Hyperlinks:
- Hyperlinks are the bread and butter of the web and html.
-  They allow you to link your document to any other document or resource or a section of a document through a simple web address.
- To turn some text to a link, wrap it in an anchor element **`<a>`** and give it a **`href=""`** attribute.
- The `title` attribute results in a informational tooltip when a link is hovered over. The following is a useful link:
```xml
Find me <a href="https://www.mozilla.org" title="The most useful website everrr">here</a>
```
- **Block Level Elements:** Anything can be turned intoa link, including block elements so a whole paragraph or an image can be a link.

### URLs and Paths:
- A URL is text that defines where something is located on the web.
- URLs use paths to locate files in filesystems. 
- The root of a filesystem is a directory containing the whole website. It might have a file named `index.html` that serves as the entry point to the website.
- To link a document in the same website:
	* **Same Directory:** Simply specify the file name
	* **Subdirectory:** Specify the subdirectory names followed by slashes until the file is reached.
	* **Up Into a Director:** to move up twoards the root use **`..`** until you reach the parent directory you want and then move down using slashes until you reach the desired file. To get the file `app.js` in the immediate parent directory you use `../app.js`.
- **Document fragments**, or specific section of the same or another html document can be linked if that section has an id. This can be done as follows:
```xml
<h2 id="something">Something</h2>
<p>Something can be found <a href="#something">here</a></p> <!-- In the same document -->
<p>Something can be found <a href="anotherdocument.html#something">here</a></p> <!-- In a different document -->
```

### Absolute vs. Relative URLs:
- An **absolute URL** is one that points to a file in the web. It includes the domain name and the protocol. An absolute URL always points tom the same location no matter where it is located.
- **Relative URLs** point to different thing based on where they are located. They are usually used within the same filesystem or the web project being worked on. Moving a file containing relative links between directories break these relative links.

### Link Best Practices:
+ **Clear wording**: Avoid `click here` and `here` and go with mored descriptive names like `Download Firefox`. This is good for SEO, screenreaders and visual readers skimming convenience. Also don't repeat the link as part of the text, keep the text short and don't repeat it for no real reason as screenreaders show out of context lists of links where repeated link text is just bad. 
+ **Favor relative links if you can:** Absolute links don't break, but you still must use relative links to point to other parts of your website, because relative links are smaller and take less resources to be scanned. More importantly, relative links makes the browser look for another document within the same server. With an absolute link, the browser leaves the server, look up the site on the DNS only to come back to the same server leading to unncessary wait time.
+ **When linking to non-html documents, indicate so.** Such when linking to a video or a pdf.. etc. Indicate so as in `<a>Wuthering Heights (PDF)</a>`.
+ **When linking to a download, SAY SO.** When linking to a downloadable resource, indicate so with the download attribute as in:
```xml
<p><a href="https://www.github.com/ahmaazouzi/algos_and_ds/archive/master.zip"
   download="www.github.com/ahmaazouzi/algos_and_ds/archive/master.zip">Download canonical algorithms code</a></p>
```

### E-Mail Links:
- The `mailto:` attribute followed by an optional email results in opening an outgoing email window.
- You can also add a cc, bcc, subject and body sections in the href attribute following `mailto:`.

## Advanced Text Formatting:
- These are lesser known html text formatting elements and knowing them will make you a pro.

### Description Lists:
- These are used to mark up a set of items and their associated descriptions. They follow this syntax:
```xml
<dl> <!-- Description list-->
	<dt>HTML</dt> <!-- description term-->
	<dd>Gives you structure</dd> <!-- description definition-->
	<dt>CSS</dt> 
	<dd>Makes you look better</dd>
	<dt>JS</dt>
	<dd>Gives you superpowers</dd>
</dl>
```

### Quotatations:
- **Blockquotes** Allows you to quote a block like a paragraph, multiple paragraphs, a list ... etc resulting an indented block, and it's done through the following syntax:
```xml
<p>As Shakespear said in his famous poem <em>Wuthering Heights:</em>
<blockquote cite="shakespear.aa">
	To fly or not to fly, that's the respuesta<br>
	Le draissage de ce chien manque du rigeur
</blockquote>
</p>
```
- **Inline quotatations** are done with the element `<q>`. This one simply enclose the quote inside double quotes.
- `cite` is laregely useless and I will just skip it.

### Abbreviations:
- The element `<abbr>` allows you to show the full text of an abbreviation in a tooltip when the element is hovered over.
```xml
<p>We use <abbr title="Hypertext Markup Language">HTML</abbr> to structure our web documents.</p>
```

### Marking Up Contact Details:
- Uses the `<address>` element for contacts.

### Superscript and Subscript:
- `<sub>` and `<sup>` are useful for items like dates, mathematical and chemical formulas, so `CO<sub>2<sub>` results in something like CO<sub>2<sub>.

### Computer Code:
- To markup code, you can use a variety of elements:
	+ `<code>`: For generic pieces of code
	+ `<pre>`: Fro retaining white space
	+ `<var>`: For marking variable names.
	+ `<kbd>`: Keyboard input. `<kbd>CTRL</kbd>+<kbd>A</kbd>` gives you <kbd>CTRL</kbd>+<kbd>A</kbd>.
	+ `<samp>`: Output of a program. E.g. `<samp>-bash: lsa: command not found</samp>` gives you <samp>-bash: lsa: command not found</samp>.
- The following example shows how these element interact to create a nice block of code. With some css, this would be fabulous: 
```xml
<pre>
	<code>
void f(void (*a)(), int b, int s) {
    a(b, s);
}

void add(int b, int s) {
    printf("%d\n", b + s);
}
	</code>
</pre>
```
- This would result in something like this:
```
void f(void (*a)(), int b, int s) {
    a(b, s);
}

void add(int b, int s) {
    printf("%d\n", b + s);
}
```

### Marking Time and Date:
- The element `<time>` allows for the creation of machine readable dates that can help with automation stuff like grabbing a date and adding to a calender:
```xml
<time datatime="2020-01-01">01 January 2010</time>
```

## Document and Website Structure:
- HTML defines various block elements, some of which are semantic such as the navigation bar and main content. Other block elements are not semantic such as divs.

### Basic Sections of a Document:
- A standard html document should have the following sections:
<dl>
	<dt>header:</dt>
	<dd>A big strip on top of the page with a big heading and maybe a logo. This is a sticky section that will appear on different webpages of the website. It contains some information about the website.</dd>
	<dt>navigation bar:</dt>
	<dd>Contains links to the main sections of the website. It is also sticky and stays the same across webpages. Never have different sections. Some merge it  with the header but others think it's better to have separate from the header for accessibility reasons.</dd>
	<dt>main content:</dt>
	<dd>A big area in the center of the webpage that has content unique to the webpage. It could be text, a video, a map, a game or whatever.</dd>
	<dt>sidebar:</dt>
	<dd>Peripheral info, links, ads. Usually contains links to related articles, videos, suggested or recommended content .. etc.</dd>
	<dt>footer:</dt>
	<dd>A strip across containing fine print, copyright notices, contact information ... etc. Might also have quick links to popular content for SEO purposes.</dd>
</dl>
- Don't abuse these elements and respect semantics for better accessibility and SEO.

### HTML Layout Elements in More Detail:
- What follows is a more detailed and accurate description of the main semantic html block elements:
	+ `<main>`: for content unique to the page. A child of `<body>` and shouldn't be nested within any other element. Use only once per page.
	+ `<article>`: a block of related content that makes sense on its own without the rest of the page. Eg. A single blog post.
	+ `<section>`: similar to article but is used to group a single part of the page that offers a single piece of functionality such as a map, a set of articles headlines and summaries. An article can be broken into multiple sections and a section can be broken into multiple articles based on the situation at hand.
	+ `<aside>`: not directly related to the main content but can provide information indirectly related to it such as a set of related articles, the author biography, a glossary. 
	+ `<header>`: a group of introductory content. If nested within the body, it is a global header for the whole page. If it's nested inside article or section, it is special header for that specific section or article. A header is not a heading.
	+ `<nav>`: the main navigation functionality for the website. Secondary links should not be part of the nav, can probably be put in an aside to the left of main.
	+ `<footer>`: a group of end content for the page.

### Non-semantic Wrappers:
- Yes, they are just that, wrappers and they are also non-semantic. Sometimes, you need to group certain elements for non-semantic purposes to apply css and/or javascript to them as a single entity. You'd use `<div>` and `<span>` for these. It's preferable to use these with a suitable class name for better targeting. 
- `<span>` is an inline element. It's completely non-semantic and should only be use when there is no semantic element that can fulfill the desired role. Same goes for `<div>`, albeit this one can useful in many situations as when creating a shopping cart widget, for example.
- divs can be easily abused resulting non-semantic garbage. There no running away from them and you should at least minimize their usage. 
- `<br>` or lines break forces a line break inside a paragraph. It is useful in some situations such breaking a poem into lines.
- `<hr>` or horizontal rules create lines in the document that denote thematic changes such as changes in topic or scene.

### Planning a Simple Website:
- Information architecture aims to create the best user experience. This is done through making information easily usable and findable. To achieve such goals, one needs to carefully plan the sturcture of one's website and plan how the content is to be arranged and pages are needed and how things link to each other. The following is a simple and general guideline on what goes into such planning:
	1. Determine what's **common to most or all pages** of your website, such as footer, header, nav. Contacts are usually listed in the footer.
	2. Draw a rough sketch of how the website should look.
	3. Brainstorm all other content that's not common to every page and write an exhaustive list of it.
	4. Sort content items into groups to know if such groups can go together in the same or related pages.
	5. Sketch a rough site map where pages are represented by bubbles. Lines between the bubbles indicate how pages might relate to each other.

## Debugging HTML:
- HTML is relatively easier to debug than some other languages such as javascript or even css. It's just more permissive. HTML doesn't have syntax errors as browsers still render pages and sometimes correct errors.
- One of the most common html errors is missing closing tags. The browser tries to make up, by either ignoring the tag and its functionality altogether or inserting a closing tag where it sees fit, for example at the end of a paragraph or any other block type.
- The inspect tools in some browsers allows you track such bugs and see how the browser tried to correct them.
- The[ [Markup Validation Service](https://validator.w3.org/) is a tool you can use to validate your html. It's created by the famous W3C organization. It scans your html and gives a report about what is and what is not wrong with it. You can provide MVS with your code either in the form of a link, a direct upload of an html file or directly inputting html into it. the errors indicated by the tool are self explanatory. Common errors include violating nesting rules and unclosed tags.

# Embedding Images and Stuff:
## Images:
- An image can be embedded in an html document using the `<img>` empty tag as in the following script:
```xml
<img src="images/someimage.jpg">
```
- for SEO purposes, put images in a directory named 'images' and give images descriptive names.
- ***Warning*** Be careful about linking to copyrighted images. Also avoid **hotlinking** which linking images to other domains without authorization. You are stealing bandwidth and making your website slower and have no control over it. If the source change it to a pornographic image, you'd be embarrassed, maybe.
- The `alt` is used to display textual description of the image if the image cannot be displayed or is too slow loading. Many reasons exist for including this attribute such as accessibility, some browsers display text only, search engines match alt text to queries.. etc.
- Specifying the image `width` and `height` attributes improves page load speed and smoothness. Don't alter image size with html attributes as that would distort it, make it grainy or waste resources to load a tiny image. If you need to change image size, use [CSS](css.md) instead.
- The `title` attribute allows you to add information that can be seen in a tooltip when the image is hovered over. This is not very accessibility-friendly.

### Annotating Images and Figures: 
- To add a caption to an image you can simply append a paragraph to the img element explaining its content, but this too unsemantic. Witht the use of `<figure>` an `<figcaption>` to wrap a an image inside one semantic unit as in the following example:
```xml
<figure>
<img src="something.png">
<figcaption>This is an amazing image</figcaption>
</figure>
```
- Figures don't have to be images. They can be equations, code, a table ... etc. 

### CSS Background Images:
- These can be created using the following css syntax:
```css
body {
	background-image: url("images/something.png");
}
```
- CSS images are for decoration only and have no semantic bearing on the document. Use HTML images if they are part of the content of the page and CSS images if they are just for decoration.

## Video and Audio:
- The `<video>` and `audio` elements are used to embed these in webpages.
- Embedding a video is almost as trivial as embedding an image as in
```XML
<video src="index.mp4" >
  <p>Your browser doesn't support HTML5 video. Here is a <a href="index.webm">link to the video</a> instead.</p> 
</video>
```
- `src` has the same function as its sister in the img element. `controls` must be included as they allow the user to control the video playback. You can use the browser interface or create your own interface using javascirpt. You must at least provide the ability to control the audio and start and pause the video.
- It is advisable to provide a **fallback content**. A paragraph explaining why the video couldn't be played in an old browser.The example above also provides a direct link to the file which the user can probably download.
- There are other details on how to embed video/audio, that I don't really care about at the moment.

## `<object>`, `<iframe>` and Other Embedding Technologies:
- `<iframe>`allows you to embed other webpages into your page, while `<embed>` is used for PDFs and `<object>` for <abbr title="Scalable Vector Graphics"> SVG</abbr>

### History of Embedding:
- In the beginning there were **frames**. These were small chunks wrapped in html. These were embedded inside master documents called **framesets**. They were cool and resulted in speedy downloads but had many issues so they were abandoned. Soon, flash and applets appeared and these were embedded using the `<embed>` and `<object>`elements. These too were bad for security, accessibility and other reasons.
- `iframe` came along with `video` and `canvas` later. `iframe` allowed for the embedding of a whole html document into another as if it were an image.

### iframes:
- They allow you to embed whole documents into other documents. Think of live code examples in MDN, maps, advertising banners, commenting systems like Discus .. etc. iframes have some serious security issues, that's why you need to use them with care and know what you're doing before you use them.
- iframe attributes include:
	+ **`allowfullscreen`.**
	+ **`frameborder`:** set by default 1, draws a border around the frame and to remove it, you must set this attribute value to 0, or you can use the more recommended CSS method `border: none;`
	+ **`src`.**
	+ **`width` and `height`.**
	+ **`sandbox`:** works in modern browsers and requires heightened security to display the frame.
	+ **Fallback Content:** Give link to the actual page when a browser that doesn't support iframes is encountered. This is rare!
- An SEO advice: Use javascript to make the iframe load last so the official load time of your page is faster.
- iframes are a common attack vector. Attacks can be avoided using best practices. **Clickjacking** is one such attack. It embeds invisible iframes into your website or embeds your website into their website enabling the theft of user sensitive data.
- To combar iframe abuse, Mozilla suggests the following:
	+ **Only embed when necessary**.
	+ **Use HTTPS:** HTTPS reduces tampering while data is in transit. It also prevents embedded content from accessing content in the rest of your page.
	+ **Always use the `sandbox` attribute:** Sandboxing restricts the permissions an iframe content has. You can add certain permissions to its value only if necessary. In all cases you should never add both `allow-scripts` and `allow-same-origin` to a sandbox attribute. This is a security thing. Might touch on it in the future.
	+ **Configure CSP Directives:** Content Server Security is something you deal with in the server. Something about ***X-Frame-Options***.

### `<object>` and `<embed>`:
- These are general purpose embedding tools for embedding stuff from plugins like java applets,PDFs plugins to content such as SVGs, videos... etc.
- These can be avoided altogether.

## Adding Vectors Graphics to the Web:
- Vector graphics are highly scalable, they don't pixellate and they have small file sizes.

### SVG:
- SVG is an XML-based language for describing vector images. It is a markup similar to HTML but it has many different types of elements for defining different shapes. Elements include representations of simple shapes like `<rect>` and `circle`. There other more complex elements such as `<animate>` and `<feColorMatrix>` for transforming colors... etc. 
- The following snippet is of an svg representing a red disk:
```xml
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="90" fill="red" />
</svg>
```
- You wouldn't normally code SVGs by hand but use a tool like inkscape which is free.
- SVGs can be easily styled with CSS and scripted with javascript. The text in these is also accessible which is good for SEO.
- Vectors and SVGs in particular are not always an ideal choice. They can easily become very complicated and add a significant processing overhead. They are not supported in older browsers and are very hard to create.

### How to embed SVGs:
- It can be done in two ways, either with the `<img>` but this archaic, or with the `<svg>` element which is the standard now.

## Responsive Images:
- Achieving responsive images is more of a css topic, but HTML has its own tools and method to fulfill such a goal.
- The diverse screen sizes creates two problems when it comees to images, the **resolution switching problem** and the **art direction problem** (different ways an image takes space based on different screen aspect ratios). You also don't want to load large resolution images for small devices, and vectors are limited and can't be used for photos.
- While CSS is better at producing responsive images, HTML has some of its one and these can be used as follows:
	+ **Resolution switching through Different Image Sizes:** Bascially you use the multiple copies of the same image with different sizes, and allow html to choose the appropriate image based on the screen resolution as in the following example:
```xml
<img srcset="something-480.jpg 480w,
	something-800.jpg 800w"
	sizes="(max-width 700px) 480px,
	800px" 
	src="something-800.jp" 
	alt="something" 
	>
```
	In the example above, the `scrset` attribute denotes a list of available images with their widths.
	The `sizes` list corresponds to the scrset. The two share the same index. While the screen's width is under or equal to 700, use the 480px image, otherwize use the 800px one. Browsers that don't support srcset and sizes attributes will just ignore them and load the image referenced in src.
	+ **Same Size, Different Resolution:** I don't understand this one.
	+ **Art direction:** provide a cropped zoomed image with a focus on the figure, and html will choose the right image based on the screen size for you. This can be done with the `<Picure>` element:
- This can be done with CSS or js but it's a bad idea because images start loading before javascript or CSS start being pasrsed.
```xml
<picture>
  <source media="(max-width: 799px)" srcset="mozilla.png">
  <source media="(min-width: 800px)" srcset="mozilla.png">
  <img src="mozilla.png" alt="Chris standing up holding his daughter Elva">
</picture>
```

### On the Use of Modern Image Formats:
- Opt for using moder image formats such as WebP and JPEG-2000. These are cool because they have small file sizes and good image quality. Not all browsers support them but you can use `<pciture>` to provide a fallback strategy when support is inexistent:
```sql
<picture>
  <source type="image/svg+xml" srcset="pyramid.svg">
  <source type="image/webp" srcset="pyramid.webp"> 
  <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
</picture>
```

# Tables:
## Basics:
- Basics of tables, how a cell span multiple rows and columns also how to group all cells in a column for styling.

### What's a Table?
- It's a way to organize data into rows and columns. It's easy to spot connections and interesting relations between different data when they are represented in a tabular format.
- To have an effective and readable table you must add appropriate CSS in addition to effective HTML table formatting.
- Never use tables for the layout of a website with rows for header, footer and other parts of a webpage layout. That used to be a practice from a bygone era because CSS support was not good in old days. They are bad fro accessibility, they'd result in hard to maintain tag soups and are not automatically responsive. They follow the size of the text they contain. DON'T USE TABLES FOR PAGE LAYOUT!!DON'T DO IT!
- `<td>` is for data.
- `<th>` is for headers. They are useful stylistically as they stand out making reading a table an easier task. Along with the `scope` attribute, the headers allow you to associate the header with data in the same row or columns which is good accessibility-wise.

### Cell Spanning Multiple Rows and Columns:
- Might sound mysterious, but is extremely easy to implement with the following two attributes that can be added to either `<td>` or `<th>`:
	+ **`colspan="5"`**: allows you stretch a cell over multiple columns.
	+ **`rowspan="4"`**: allows you to stretch a cell over multiple rows.
- The following example shows how cell-spannig can be done:
```xml
<table>
  <tr>
    <th rowspan="8">Programming<br>Languages</th>
  </tr>
  <tr>
    <th colspan="2">Machine Code</th>
  </tr>
  <tr>
    <th rowspan="2">Assembly</th>
    <td>MASM</td>
  </tr>
  <tr>
    <td>WASM</td>
  </tr>
  <tr>
    <th colspan="2">FORTRAN</th>
  </tr>
  <tr>
    <th rowspan="2">Procedural</th>
    <td>C</td>
  </tr>
  <tr>
    <td>Pascal</td>
  </tr>
</table>
```

<table>
  <tr>
    <th rowspan="8">Programming<br>Languages</th>
  </tr>
  <tr>
    <th colspan="2">Machine Code</th>
  </tr>
  <tr>
    <th rowspan="2">Assembly</th>
    <td>MASM</td>
  </tr>
  <tr>
    <td>WASM</td>
  </tr>
  <tr>
    <th colspan="2">FORTRAN</th>
  </tr>
  <tr>
    <th rowspan="2">Procedural</th>
    <td>C</td>
  </tr>
  <tr>
    <td>Pascal</td>
  </tr>
</table>

### Styling Columns:
- HTML provides the nifty `<colgroup>` and `<col>` to provide wholesale styling to a table's columns.
- On top of your table you put a `<colgroup>` and use it to enclose one or more of the empty col element. The col element is where you'd apply the styling. If you want to just style the first column, you just place one col element with its styling. If you want to style the third column, then you place the first and second columns without any styling and then you place the third column which you style. The following example shows how it's done:
```xml
<table>
    <colgroup>
        <col>
        <col style="background-color: rgb(204, 238, 241)">
    </colgroup>
    <tr>
        <th>Book</th>
        <th>Category</th>
    </tr>
    <tr>
        <td><em>Wuthering Heights</em></td>
        <td>Literature</td>
    </tr>
    <tr>
        <td><em>A History of Egypt</em></td>
        <td>History</td>
    </tr>
    <tr>
        <td>The Origin of Species<em></em></td>
        <td>Science</td>
    </tr>
</table>
```
<table>
    <colgroup>
        <col>
        <col style="background-color: rgb(204, 238, 241)">
    </colgroup>
    <tr>
        <th>Book</th>
        <th>Category</th>
    </tr>
    <tr>
        <td><em>Wuthering Heights</em></td>
        <td>Literature</td>
    </tr>
    <tr>
        <td><em>A History of Egypt</em></td>
        <td>History</td>
    </tr>
    <tr>
        <td>The Origin of Species<em></em></td>
        <td>Science</td>
    </tr>
</table>

- Styling using col and colgroup cna also span multiple columns just like rowspan and colspan with teh `span` attribute as in the following example:
```xml
<colgroup>
  <col style="background-color: yellow" span="2">
</colgroup>
```

## Advanced Features and Accessibility:
### Table Caption:
- You can add a caption to a table by enclosing the caption text inside a `<caption` element and make this caption a child of the `<table>` element. The caption appears on the top of the table even if you place it below the table. The caption should provide a summary of the contents of the table, and it's advisable to use for semantic and accessibility reasons. The screenreader reads the caption aloud and allows the user to decide if they wish to consume the table or skip it. 

### Adding Structure with `<thead>`, `<tbody>` and `<tfoot>`:
- These provide structure that's fundamental to styling. In long tables you can make the header and footer repeat on every page. You can scroll through the body while having the body stick to the page. 
- Even if you place the footer below the header and above the body, the browser will render it at the bottom of the page. The footer can be used for various purposes such as summing up data.

### Tables for the Visually Impaired:
- To help the visually implement make an effective use of tables, use row and column headers along with the `scope` as in the following example:
```xml
<thead>
  <tr>
    <th scope="col"> Programming Language</th>
    <th scope="col">Inventor</th>
    <th scope="col">Date</th>
    <th scope="col">Rank</th>
  </tr>
</thead>
```
- In the example above, each cell in each clumn is associated with its header. This can also be done with rows as in:
```xml
<tr>
  <th scope="row">Haircut</th>
  <td>C</td>
  <td>Dennis Ritchie</td>
  <td>1969</td>
  <td>4</td>
</tr>
```

# Forms: