Credit goes to [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) and [Ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX).
- This is a condensed version of the article present in the link above.

# JSON and Ajax:
- **Javascript Object Notation** is a standard text-based representation of structured data and a data exchange format based largely on JavaScript's literal object notation. It was popularized by the famous Doug Crockford and is probably the most common data interchange format in use today, rivaled only by the more antique XML. It is not resitricted to JavaScript, but is used in many other environments. Many languages have the ability to parse and generate JSON. This section is a walkthrough of how to parse and generate JSON in JavaScript.

## What is JSON and how Is It Structured?
- JSON exists as a string. This is ideal for transferring JSON acrosss a network. Once received, it needs to be converted into objects. JavaScript has the JSON object created specifically for dealing with JSON.
- Basic JavaScript basic types such as strings, numbers, arrays, booleans, and object literals can be represented in JSON as in:
```json
{
	"name": "Jalapeño",
	"job": "none",
	"hobbies": ["ice chewing", "croissant baking", "designing paper planes"],
	"age": 50,
	"angryMood": true,
	"skills": {
		"usefulSkills": ["JavaScript", "XML", "JSON"],
		"uselessSkills": ["snack hoarding", "Sleeping"]
	}
}
```

```javascript
JSON.stringify(obj);
JSON.parse(json);
```