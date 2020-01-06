Content mostly comes from [Learning HTML: Guides and tutorials](https://developer.mozilla.org/en-US/docs/Learn/HTML) by Mozilla Contributors which is licensed under CC-BY-SA 2.5.

# Table of Content:
- [Introduction](#introduction)
	* [Basics](#basics)
		+ [Elements](#elements)
		+ [Attributes](#attributes)
		+ [Entity References](#entity-references)
	* [Meta and Head](#meta-and-head)
		+ [`<meta>`](#meta)
		+ [meta meta](#meta-meta)
		+ [CSS and Javascript as metastuff](#css-and-javascript-as-metastuff)
		+ [Setting Page Language](#setting-page-language)
	* [Text](#text)
		+ [Best Practices to Achieve Structural Hierarchy](#best-practices-to-achieve-structural-hierarchy)
		+ [The virtues of Structural Hierarchy and semantics](#the-virtues-of-structural-hierarchy-and-semantics)
		+ [Lists](#lists)
		+ [Eemphasis and Importance](#eemphasis-and-importance)
	* [Hyperlinks](#hyperlinks)
		+ [URLs and Paths](#urls-and-paths)
		+ [Absolute vs. Relative URLs](#absolute-vs-relative-urls)
		+ [Link Best Practices](#link-best-practices)
		+ [E-Mail Links](#e-mail-links)
	* [Advanced Text Formatting](#advanced-text-formatting)
		+ [Description Lists](#description-lists)
		+ [Quotatations](#quotatations)
		+ [Abbreviations](#abbreviations)
		+ [Marking Up Contact Details](#marking-up-contact-details)
		+ [Superscript and Subscript](#superscript-and-subscript)
		+ [Computer Code](#computer-code)
		+ [Marking Time and Date](#marking-time-and-date)
	* [Document and Website Structure](#document-and-website-structure)
		+ [Basic Sections of a Document](#basic-sections-of-a-document)
		+ [HTML Layout Elements in More Detail](#html-layout-elements-in-more-detail)
		+ [Non-semantic Wrappers](#non-semantic-wrappers)
		+ [Planning a Simple Website](#planning-a-simple-website)
	* [Debugging HTML](#debugging-html)
- [Embedding Images and Stuff](#embedding-images-and-stuff)
	* [Images](#images)
		+ [Annotating Images and Figures](#annotating-images-and-figures)
		+ [CSS Background Images](#css-background-images)
	* [Video and Audio](#video-and-audio)
	* [`<object>`, `<iframe>` and Other Embedding Technologies](#object-iframe-and-other-embedding-technologies)
		+ [History of Embedding](#history-of-embedding)
		+ [iframes](#iframes)
		+ [`<object>` and `<embed>`](#object-and-embed)
	* [Adding Vectors Graphics to the Web](#adding-vectors-graphics-to-the-web)
		+ [SVG](#svg)
		+ [How to embed SVGs](#how-to-embed-svgs)
	* [Responsive Images](#responsive-images)
		+ [On the Use of Modern Image Formats](#on-the-use-of-modern-image-formats)
- [Tables](#tables)
	* [Basics](#basics)
		+ [What's a Table?](#whats-a-table)
		+ [Cell Spanning Multiple Rows and Columns](#cell-spanning-multiple-rows-and-columns)
		+ [Styling Columns](#styling-columns)
	* [Advanced Features and Accessibility](#advanced-features-and-accessibility)
		+ [Table Caption](#table-caption)
		+ [Adding Structure with `<thead>`, `<tbody>` and `<tfoot>`](#adding-structure-with-thead-tbody-and-tfoot)
		+ [Tables for the Visually Impaired](#tables-for-the-visually-impaired)
- [Forms](#forms)
	* [First HTML Form](#first-html-form)
		+ [Designing A Form](#designing-a-form)
		+ [Basic Styling of a Form](#basic-styling-of-a-form)
		+ [Sending Form Data to a Server](#sending-form-data-to-a-server)
	* [Structuring an HTML Form](#structuring-an-html-form)
		+ [The `<form>` Element](#the-form-element)
		+ [The `<fieldset>` and `<legend>`](#the-fieldset-and-legend)
		+ [`<label>`](#label)
		+ [Common HTML Structures Used with Forms](#common-html-structures-used-with-forms)
	* [Native Form Widgets](#native-form-widgets)
		+ [Common Attributes](#common-attributes)
		+ [Text Input Fields](#text-input-fields)
		+ [Checkable Items, `<checkbox>` and `<radio>`](#checkable-items-checkbox-and-radio)
		+ [Actual Buttons](#actual-buttons)
		+ [File Picker](#file-picker)
	* [Sending Form Data](#sending-form-data)
		+ [Where does the data go?](#where-does-the-data-go)
		+ [Retrieving Data on the Server Side](#retrieving-data-on-the-server-side)
		+ [Sending a File](#sending-a-file)
		+ [Security Concerns](#security-concerns)
	* [Form Validation](#form-validation)
		+ [Built-in Form Validation](#built-in-form-validation)
		+ [Validation with Javascript](#validation-with-javascript)
	* [Building Custom Form Widgets](#building-custom-form-widgets)
	* [Sending Forms Through Javascript](#sending-forms-through-javascript)
	* [HTML Forms in Legacy Browsers](#html-forms-in-legacy-browsers)
	* [Styling HTML Forms](#styling-html-forms)
	* [Advanced Styling for HTML Forms](#advanced-styling-for-html-forms)
	* [Property Copatibility Table for Form Widgets](#property-copatibility-table-for-form-widgets)

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
- The lang element allows you to set the language of a page as in `<html lang="en-US">`. This is good for SEO is also good for accessibility screen-readers.
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
## First HTML Form:
- A form is a fundamental way in which users can interact with a website or an application. They are usually use to send data to the server. It is made of one or more **widgets** which can either be single or multiple-line text fields, checkboxes, buttons, radio buttons or select boxes. Widgets should be paired with properly named labels that describe their functionality. Form HTML is different in that you used it to send that rather than just consume it like when you're watching a youtube video. 
- Carefully plan in advance when designing a form and keep it short and focused. Sketch it up first.

### Designing A Form:
- The following is a simple unstiled form:
```xml
<form action="something.php" method="post">
    <ul>
        <li>
            <label for="name">Name:</label>
            <input type="text"  id="name" name="user_name">
        </li>
        <li>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_email">
        </li>
        <li>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message"></textarea>
        </li>
        <li class="button">
  			<button type="submit">Send your message</button>
		</li>
    </ul>
</form>
```
    <form action="something.php" method="post">
        <ul>
            <li>
                <label for="name">Name:</label>
                <input type="text"  id="name" name="user_name">
            </li>
            <li>
                <label for="mail">E-mail:</label>
                <input type="email" id="mail" name="user_email">
                <input type="email" id="mail" name="user_email">
            </li>
            <li>
                <label for="msg">Message:</label>
                <textarea id="msg" name="user_message"></textarea>
            </li>
            <li class="button">
  				<button type="submit">Send your message</button>
			</li>
        </ul>
    </form>

- A form would usually have the following elements:
+ **`<form>`**: The main element that defines a form. It's a container element like a div or a p, but in addition to structure, it has attributes which specifies how a form behaves. The attributes are optional, but a proper form must have two fundamental attributes:
	- The **`action`** attribute defines the location (URL) where data should be sent when submitted.
	- The **`method`** defines the http method to send the data with ("get" or "post").
+ **`<label>`** labels an input field. It's great for accessibility. The `for` attribute allows associating a label with a form widget. It takes the widget's id as its value. This is also good for accessibility and interactivity. When you click a label, it acctivates the form widget associated with it.
+ **`<input>`** is a single-line text field. Its type attribute has a wide range of values such as text or email which only accepts email addresses (as in the example above). The type attribute is fundamental for form validation. The value attribute specifies the default value (the text inside the text field prompting you to enter your input).
+ **`<textarea>`** similar to the input field but is used to enter multiline text. It's not an empty element, though. For the default value, you don't use a value attribute but you put that text between the tags.
+ **`<button>`** usually used to submit a form. Once clicked the data in the form above would be sent to the page defined in the form's action attribute. The `type` attribute accepts one of three values:
	- `submit`: sends data to the page defined by `action`.
	- `reset`: clears entered data and resets to default values of all form fields (UX-wise, this is bad).
	- `button`: clicking it doesn't do anything, but it's used to create custom buttons with javascript. 

### Basic Styling of a Form:
- Styling forms is a pain in the bulla. 
- Styling this form to make it look barely decent requires a ton of CSS.

### Sending Form Data to a Server:
- 3 pieces are essential to send data to the server. The form's action defines the URL in the server where the data is to be sent. The method defines the http method used to send the data. The `name` attribute of form control is also essential for both the browser and the server. The name tells the browser which name to give to each piece of data and they allow the server to identify data by names. Form data is sent to the server as key/value pairs.
- In the example above, three pieces of data are sent to the server whose keys are `user_email`, `user_name` and `user_message` to the server script located at `something.php` using the HTTP POST method.

## Structuring an HTML Form:
- This section is about forms structure and semantics. What does each part of a form mean what is its role?

### The `<form>` Element:
- This is the parent element inside which all form action takes place and where all form elements are to be nested. NEVER NEST A FORM WITHIN ANOTHER FORM, IT CAN CAUSE UNPREDICTABLE DISASTERS.
- A form widget can exist outside a form but it has nothing to do with any form. You can bind it to a form, though, with the form attribute if it is not nested within a form.

### The `<fieldset>` and `<legend>`:
- `<fieldsets>` are used to delimit groups of widgets together in the same form for styling and semantic reasons. A `<legend>` element is used as label for a fieldset. You can group radio buttons for example inside a fieldset or you can use a fieldset to section a long form for an improved usability. 
- Fieldsets are also useful accessibility-wise.

### `<label>`:
- Labels are **the most important element for accessibility in a form**. To achieve such a goal, they are must be used with the **`for`** attribute and input elements must have an **`id`** attribute so the two can be associated. An input element can also be associated with a label through nesting the input element inside a label element. It is recommended that the `for` and `id` attributes be used even when the input is nested inside a label. The nest can be done as in the following example:
```xml
<label for="name">
  Name: <input type="text" id="name" name="user_name">
</label>
```
- **Labels are also clickable** and clicking them activates the associated form widgets. This is especially useful with checkboxes and radio buttons which have very small hit areas. The label enlarges hit areas. Think of touch screens.
- **Multiple labels** for a single widget are possible but not necessarily recommended. If you must use multiple labels, nest a widget with its labels inside a single label.

### Common HTML Structures Used with Forms:
- Forms are special but they are just HTML and can be mixed with other html element.
- It is a common practice to wrap labels and their widgets inside `<li>`, `<div>` and `<p>` elements. 
- Sectioning different groupings within the same form is done with the `<fieldtest>` and also with the `<section>` element. `<h1>` and `<h2>` and other titles can be used with sections to provide structure to complex long forms. 
- You are free to use structures you like to make great forms.
- Again, again CSS is one of the hard topics when it comes to forms.

## Native Form Widgets:
- This section is a near exhaustive treatment of the available native form controls and their different options to collect data.
- This section covers form controls available for all browsers. Other ones will be discussed later. For custom controls and how to create them refer to this [section](#building-custom-form-widgets).

### Common Attributes:
- All form widgets have the following attributes:
	+ **`autofocus`** (false by default)a boolean signaling that an element should automatically have input focus when the page loads. Only one form associated element in a document can have this attribute specified.
	+ **`disabled`** (false by default). Signals that the user can't interact with the field. If this attribute is not specified, it inherits the setting of the element containing it.
	+ **`form`** If a form control is outside the form it's associated with, or even in a different form in the same document, this attribute binds it to that form.
	+ **`name`** The name of the element. The server associated the data with the name.
	+ **`value`** is the element initial value.

### Text Input Fields:
- These are the most basic and essential form controls. Their only shortcoming is that they only allow plaintext input. for richer input with bold and italics, design your own custom widgets
- Some of the attributes that all text input can have:
	+ It can be marked as `readonly` (it has an input value you can't modify but is sent with the rest of the form data) or `disabled` (you can't change it and the data doesn't get sent).
	+ It can have a `placeholder`, text that describes the purpose of the field. This is not data and doesn't get sent to the server.
	+ They can be limited in `size` (physical size) and `maxlength` (the maximum number of characters that can be entered into the box).
	+ They can benefit from `spellcheck` if it's available.
- **Single line text fields** are the default input type. If you don't specify a type for the `<input>` element, it defaults to a single-line text input type.
- The **`password` field** type is similar to text field with some exceptions. The value entered is obscured and can't be seen. It supported such attributes as `pattern`, `minlength` and `maxlength`. This is only a user interface feature. Unless you submit your form securely, it gets sent in plaintext. The best way to fix handle this issue is through encryption (e.g. https).
- **`hidden`** input is invisible and cannot be interacted with by the user. This input type requires a name and value attribites and the value attribute can be set dynamically.

### Checkable Items, `<checkbox>` and `<radio>`:
- Both have the `checked` attribute to indicate if they are checked or not.
- All other input types get sent the server. Checkable items only get sent if they are checked. 
- From a UI/accessibility standpoint, you are advised to:
	+ surround checkable items by a fieldset and use a legend.
	+ Put them in a list and each input field be put with its label in the same list item.
	+ Labels are placed immediately after the input fields and the description/instructions are part of the legend.

### Actual Buttons:
- You can create a button with either the input or button elements. The only difference is that you can style the button element anyway you like, unlike the input element as in the following example:
```xml
<button type="submit">
    This is a <br><strong>submit button</strong>
</button>

<input type="submit" value="This is a submit button">
```
- The type attribute is essential for a button (both in button and input elements) and it has the following values:
	+ **submit** sends the form data to the server. If the type attribute is not set, the button becomes a submit button by default.
	+ **reset** resets all data to their default values.
	+ **anonymous** doesn't do anything, but can be customized with javascript. This is specified with the type "button".

### File Picker:
- This widget allows the user to pick and send files to the server. this is done with the input field and its type attribute set to `file`. You can constrain the type of file with teh `accept` attribute. The `multiple` attribute allows for selecting and sending multiple files.
```xml
<input type="file" name="file" id="file" accept="image/*" multiple>
```
- There many other input types, but I'm tired of listing them.

## Sending Form Data:
### Where does the data go?
- You, the client, send an HTTP request and the server answers with an HTTP response.
- The form element specifies how data gets sent to the server. The different attributes of the form configure how the data get sent. The most important attributes are:
	1. **`action`**: defines where the data will be sent. If this attribute is not provided, the data will be sent to the url of the current page containing the form. Before HTML5, it was required that a form has an application
	1. **`action`**: defines where the data will be sent. If this attribute is not provided, the data will be sent to the url of the current page containing the form. Before HTML5, it was required that a form has an action attribute, that's why even though data was supposed to be sent to the current page url, it was customary to use a notation like this `<form action="#">`. Even if the form is in an insecure page using http, the URL specified in action can be of a secure type (https) and the data will be encrypted. The names and values entered in non-file form widgets are sent to the server as `name=value` pairs separated by ampersands `&`. The value of `action` is usually a file in the server that can handle the incoming data and validate it. The server responds by handling the data and loading the page defined in `action` leading to a new page load .. etc. 
	2. **`method`**: defines how data is sent to the server. The most common HTTP methods to do this are `POST` and `GET`.
		+ The **`GET`** method asks the server to send a resource back. The body of the get method is empty, that's why it gets appended to the url, *but why?*
		+ The **`POST`** method is used to send data to the server. When a form is sent using the post method, the data is appended to the HTTP method's body, not to the url as in the get method. 
- HTTP requests can be examined using the Firefox Network Monitor or the Chrome Developer tools under the Network tab. Here you can see data added to the url while in a post request you don't.
- While you can send data in both the get and post method, it's preferred to send it in a post method for two reasons:
	+ In a get method, data is added to the url which risque leaking displaying sensitive data to malicious agents.
	+ URL size is limited by some browsers and many servers limit the sizes of URLs they can accept, which is not the case for the post request bodies.

### Retrieving Data on the Server Side:
- Whatever the method used to send the data, the server receives it as a string that it parses into a list of key/value pairs that. Accessing this list and the handling of duplicate keys is done differently based on platform used. Usually the most recently received duplicate key is the one taken into consideration.

### Sending a File:
- HTTP is a text protocol but files are binary data, that's why you need to take special care when sending files to the server. These 3 steps need to be followed sending data to the server:
	1. The method should be set to POST since a file cannot be appended to the url.
	2. Set the value of `enctype` to `multipart/form-data`, because data will be split into multiple parts, one for each file and one for the text data included in the form body if text is also entered.
	3. Include a filepicker widget for allowing users to upload files.

### Security Concerns:
- Every time data is sent to the server, there is a chance the server comes under attack. Forms are the most common attack vectors. Forms don't cause vulnerabilities, though; it is how the server handles the received data. Some of the most common security issues are:
	+ **XSS and CSRF** happen when you display data sent by user back to the sending user or another user. **Cross-site scripting** vulnerabilities allow attackers to inject client-side scripts into webpages. This allows them to bypass access controls such as same origin policy. **Cross-site request forgery** refers to a type of attack that starts by injecting a client side script into a web page and then escalate privileges to those of high-privileged users such a system admins. "*XSS attacks exploit the trust a user has for a web site, while CSRF attacks exploit the trust a web site has for its users.*" To avoid such attacks you need to sanitize user input that consists of html tags .. etc. Some of this is already done by most web frameworks.
	+ **SQL Injections** are done by sending SQL scripts that might get executed in the database resulting in damaging data or stealing user data. Through privilege escalation, an attacker might take over a whole system. Sanitize the input and use such practices as prepared statements and stored procedures.
	+ **HTTP header injections**
	+ **HTTP header injection and email injection** "*can occur when your application builds HTTP headers or emails based on the data input by a user on a form.*"
- To fight these attacks, keep one point in mind. Never ever trust users, not even yourself. Follow these practices when designing your system:
	1. Escape potentially dangerous characters.
	2. Limit the incoming amount of data allowing only what's absolutely necessary.
	3. Sandbox incoming files. Store them in a different server and allow access to them through a different subdomain or a totally different domain name.
- Following the above 3 rules will spare you most attacks. You still need to get security checks performed by experts.

## Form Validation:
- Client side form validation is not a replacement of server validation, but it is necessary from a UX point of view. You don't want the user to wait for seconds or minutes only to be told their data is invalid. You to maximize the likelihood that all data entered is valid before the data is sent.
- **Form validation** refers to the fact that the user agent or web application allows data to be submitted if it's correctly formatted and rejects it otherwise, showing an error message prompting the user to submit correct format data. Examples include malformatted emails or telephone numbers, required data that's missing ..etc. 
- There are **3 main reasons** for form validation:
	1. **Getting the right data in the right format.** 
	2. **Protecting the user** through the use of secure psswords, for example.
	3. **Protecting the web application:**
- Form validation is done in two ways, both of which are required:
	1. **Client-side validation** is more user-friendly and is done before the data is submited. It's done in two ways:
		+ **Javascript** and is completely customizable.
		+ **Built-in form validation** is not customizable but has better performance than javascript.
	2. **Server-side validation** is the last line of defense and is absolutely required. Most frameworks have features for accomodating valdiation and sanitization. Failing to do server from validation compromizes your applications or makes it unusable at worst.

### Built-in Form Validation:
- HTML5 allows the validation of most user data without reliance on scripts. It is done through the use of [validation attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes). Such attributes include:
	+ **`required`** for whether the data must be entered.
	+ **`minlength`** and **`maxlength`** for text size.
	+ **`min`** and **`max`** for maximum and minimum values allowed.
	+ **`pattern`** for a regex that the data must match.
- The entered data must match all constraints to be consisred valid. When the data are valid, the element matches the CSS pseudo class `:valid` for styling valid elements. The data is also ready to be submitted. When the data is invalid it matches the `:invalid` css pseudo-class. The form will also block the data and show an error message.
Make sure to make use of the CSS psudo-classes related to form validation. Examples include:
```css
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}
```
- HTML5 allows you to change error messages using javascript through the constraint validation API. It allows you to change the text of error messages produced by native widgets but you can't change its styling. The `setCustomValidity` is pariticularly useful for such a purpose.

### Validation with Javascript:
- This advanced stuff. Will come back.

## Building Custom Form Widgets:
- Will come back.

## Sending Forms Through Javascript:
- Might come back to this in the javascript part.

## HTML Forms in Legacy Browsers:
-

## Styling HTML Forms:
- Check [here](css.md/#styling-forms).

## Advanced Styling for HTML Forms:
-

## Property Copatibility Table for Form Widgets: