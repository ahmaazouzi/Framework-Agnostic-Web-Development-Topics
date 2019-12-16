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

## Document and Website Structure:
## Debugging HTML:

# Embedding:
# Tables:
## Forms: