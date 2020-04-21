# Backend Development Principles:
- Most of backend development is based on some framework or library of sorts. Such frameworks abstracts so much away from the developer and make life easy, but that might come at a cost. The developer doesn't understand anymore what these baked services are really doing under the hood. This makes programmers hostages of whatever framework they first learned or are currently using. 
- The goal of this document is the present an overview of the fundamental ideas and concepts that govern backend development. These concepts are not tied to any specific framework or platforms except for established and common industry practices such as the HTTP protocol or the client-server architecture.
- A solid understanding of such general concepts would free me of asking many nonsensical questions on stackoverflow and probably making it easier to learn a new web framework and avoid misusing it.
- Obviously, this overview won't cover all the low level details, but some knowledge of what's abstracted away from you is better than none!
- This document is based on a variety of resources including:
	* MDN's (What is a URL)[https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL]
	* Udacity's [Intro to Backend](https://classroom.udacity.com/courses/ud171) .
	* Udacity's [Full Stack Foundations](https://classroom.udacity.com/courses/ud088)
	* MDN's [Server-side website programming](https://developer.mozilla.org/en-US/docs/Learn/Server-side).

## URLs:
- URL stands for **Uniform Resoure Locator**. It the web address of a unique resource in the web (or any computer network). This resource could be an HTML page, a css document.. etc. There can be URLs pointing to resources that don't exist anymore or have been moved somewhere else.
- A valid URL must have the following two parts:
	+ The **protocol** or **scheme name** such as `http://`, `https://`, `ftp://` ...etc. as in **`https`**`://www.google.com`. The protocol is separated from the rest of the URL with a `://`.
	+ The **host name** such as `www.google.com` in `http://`**`www.google.com`**`/maps/`. The host name might consist of of a domain and subdomains. `developers` is a subdomain in `https://developer.mozilla.org`, while `mozilla.org` is the domain name. A host name be replaced with an ip address.
- A URL might also have the following parts:
	+ A **port number** where a process/service can be accessed. This is separated from the host name by a column as in `localhost:` or `www.google.com:443`. When the port being used is the same as the default port for a certain protocol, it's not necesary to add the port name to the url. Example default port numbers include 80 for http, https for 443 ... etc. 
	+ The **path** points to a resource in a host. `/en-US/docs/Learn` and `/en-US/docs/Learn/Common_questions/What_is_a_uRL` are paths in the URL `https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_uRL`. In static websites a path might point to an actual resource in the host, while in dynamic website the path is an abstraction that might not reveals the actual physical location of a resource.
	+ The **query parameters** which is data passed to be passed to the server. These usually correspond to HTML input. They are a list of key-value pairs `key=value`. They are separated from each other byt a `?` as in `key1=value1&key2=value2`. The list of query parameters is separated from the rest of the url. The bold part in the following url is the query parameter list `http://www.example.com:80/path/to/myfile.html?`**`key1=value1&key2=value2`**.
	+ The **fragment identifier** is represented by a `#` and it is used to point to a certain part of the html document. This is never sent to the server. The bold part here is the fragment identifier in this URL `http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#`**`SomewhereInTheDocument`**.
- The backend developer should pay special attention to the path and the query parameters as they are linked very tightly to what takes place when a HTTP (or any other application layer protocol) messages are exchanged between the client and the server. 
- If a forward slash `/` is not meant as a directory delimiter in the path within the a URL, it must be encoded into `%2F`. Generally, speaking a URL is composed of ACII characters. These characters are either reserved or unreserved. Reserved characters have a special meaning in a URL. They are used as delimiters for example in a path or are used to separate query parameters such as `?` .. etc. If you want to include a reserved character in the URL without it having its special URL meaning, you can percent encode it, i.e. replace it with a percent symbol followed by two hexadecimal digits representing its ASCII value, so `/` becomes `%2F`. Non-ASCII characters in a URL such as `UTF-8` are also encoded in this way.

## The HTTP Protocol:
- HTTP stands fpr **Hypertext Transfer Protocol**. It is the main protocol for exchanging messages between clients and servers in the Web. 
- The message a client sends to a server is called **request**. The message a client receives from a server is called a **response**.
- The following text shows a typical basic request: 
```
GET /foo HTTP/1.1
Host: www.google.map
Connection: close
User-agent: Mozilla/10.0
Accept-language: fr
```
- A Typical request consists of:
	- The first line of the request is called a **request line**. The request line itself consists of:
		+ The request method, such as GET, POST ..etc. A request method dictates how the client communicates with the server. With GET, for example, a client usually fetches data or documents. A google search, for example, asks for search results. 
		+ The **path** which points to the requested resource.
		+ The HTTP **version**. The most common version is http 1.1.
	- **Request headers** are key value pairs. They include the host, user agent..etc. There can be a lot of headers.
	- A request might also have a **body** that contains parameters added to the request. A POST method has a body while GET doesn't. query parameters in a POST method are added to the request's body and are not appended to the URL as in a GET request.
- `POST` and `GET` are the most commonly used HTTP request methods. The following tables shows some of the fundamental differences between the two:

| **`GET`** | **`POST`**
| --- | --- |
| Parameters are placed in URL | Parameters in body
| Used for fetching documents | Updates data in server
| Has a maximum URL length | No max length
| Cachable | Non-cachable
| Not for changing server | supposed to change server

- These fundamental differences between `POST` and `GET` dictate the fact that `GET` is mostly used to retrieve documents (or data) from the server, while `POST` is used to send data to the server and actuate changes

- A typical HTTP response looks as follow:
```
HTTP/1.1 200 OK 
Connection: close
Date: Mon, 10 Apr 2020 00:00:00 GMT
Server: Apache
Content-Length: 6821
Content-Type: text/html

<h1>Hello, World!</h1>
```
- It has headers and a body just like a request, but it differs from a request in that it has a **status line** instead of a request line. A status line consists of 3 parts:
	+ The HTTP version.
	+ A **status code** which is a number indicating if the request was successful. Codes include 202 for a successful request, 404 for a not found page, 500 for a server error.. etc. 
	+ "A **status message**, a non-authoritative short description of the status code."

## Forms and Inputs:
- A form is the primary way a client sends data to the server. It consists of one or more input fields. Important attributes in a form (or a form input field) to pay special attention to are. Form attributes include:
	+ `action='something.php'` this attribute causes the running of the script in `something.php` file. 
	+ `method='post'` determines the http request method in which the data is to be sent to the server such as a `GET`, `POST`, 'PUT'... etc. 
- Input attributes include:
	+ `name='something'` is directly linked to the URL query parameters in a `GET` request. This attribute and its value are the data that gets actually sent to the server when the submit button of a form is clicked. 
	+ `value='something'` is also linked to URL query parameters. In a radio type input, all the input buttons have the same name, but different values. `value` point to these values a button can take
	+ `type='submit'` is for the type of the input field whether it should be a text input field, radio button, checkbox.. etc. The `submit` value of is of special interest to us as it is used to submit/send all the data in a given form. 
-  From a frontend perspective, forms and input fields are a big trickier, especially input fields of type radio or select.. etc. Radio input buttons for example should have the same name but different values. In a select dropdown, the select tag should have the name attribute and options should have the different values to select from.

## Form Validation: 
- Users can and will often send large, malicious or garbage data to your server. User input must be validated to have a working and secure application. Some form of form validation can be done in the front end for the sake of user experience, but this shouldn't be taken as a substitute to server validation. Bots and non-browser clients would pass bad input to your app and you should be ready for that. 
- Hoffman suggests the use of abbreviations as a way to tolerate misspelling and offer suggestions to the users. For example, the first 3 correct letters of a month name are enough to deem it valid and match it in the server with a full month name.
- The validation process follows this basic workflow:
	+ The client GET's a form.
	+ The client fills and POSTs the form.
	+ The server validates the form's data.
	+ If the data is valid, it notifies the client of the submission's success.
	+ If the data is invalid, it resends the form to the client along with a message about the invalidity of the form.
	+ The whole process is repeated until the form is valid.
- It is also nice to preserve the valid portions of an invalid form (bar sensitive data for security reasons). This is good from a UX perspective! There were several times I stopped filling forms because I had to refill a long form after an invalid attempt.
- Certain characters have a special meaning for browser or anything that parses and interprets HTML. These characters such as  need to be escaped. The following table shows these characters and their escape counterparts:

| HTML Character| HTML Escape Character 
| --- | --- |
| `<` | `&lt;`
| `>` | `&gt;`
| `"` | `&quot;`
| `'` | `&apos;`
| `&` |`&amp;`

- Allowing these characters go be posted to your server is both stupid and dangerous!
- Most frameworks and languages might have built-in support for html escaping but be sure to do the correct configurations.

## Redirections:
- It is desirable and even advisable to redirect after a form is submitted to the server. Refreshing the page would result in resubmitting the form or in an awkward warning message about form resubmission.

## Templates:
- Templates are html documents that mix static and dynamic content. Instead of generating whole html content in your application, you would use templates where only the dynamic parts change. This makes development easier and less messy. They do also offer html escaping out of the box resulting in more secure apps. Generally speaking templates lead to better readability, security and maintainability through the principle of separation of concerns.
- Using templates is great but misusing them results in security and complexity issues. Here some general tips to using templates effectively:
	+ Always enable html autoescaping.
	+ Minimize code in templates.
	+ Minimize html in code.
- Another powerful feature of HTML templating technologies is the ability to easily include chunks of html in other html documents in a process called ***inheritance***.

## Persistence and Databases:
- "Webapps, or as I like to call them: Skins around databases." Thomas Figg (whoever the bleep is Thomas Figg).
- As this statement that angered a few shows, databases are an important component of a dynamic webapp. It is not just a storage facility for persisting data. The design of a database and all the work that goes around it can make or break a web app. 
- Databases, especially relational databases, are a field of study on their own. The scope of this document doesn't allow for a detailed treatment on the subject.
- The developer should make rational choices about what types of databases to use based on criteria like the rates of reads vs writes. Scaling issues should also be considered. When should a relational database be sharded? 
- For security purposes, the webapp should do extra validation to prevent sql and no-sequel injections. This can also be done with stored procedures and prepared statements, all of which can be treated in detail in a SQL (or no-SQL) context. 
- Another rather important object is **ORMs**. *Object Relational Mappers* are programs that map database data to objects in object oriented languages. Since most programming languages used in webapps are object oriented, it is nice to make use of such utilities. It reduces the existential malaise associated with switching between, say Java's objects and SQL's declarations. 

# Authentication (A Login System):
- HTTP was designed from the start to be stateless, meaning that each request is independent of another request. How would a server keep track of a client with which it shares multiple HTTP messages? Why wouldn't a user have to enter a username and a password with each request? These problems are solved with so-called authentication (some like to use authentication (verifying who a user claims to be) and authorization (verifying what a user has access to)). 
- Following on the steps of Steve Huffman's course, I will divide this topic into two main subtopics, cookies and passwords.

## Cookies:
- A cookies is a small piece of data stored in a client (browser). It size might not exceed 4000 bytes. It is in the general form `<name=value>`, e.g. `user_id=123435`.
- When a server is visited it attaches a cookie to a response to the browser. The browser stores cookie and each time it sends a request to the server that cookie is attached to the server. This is how the server uniquely identifies this browser.
- There are a few browser-dependent rules that govern the use of cookies such as 20 cookies per domain, the size limit of a cookie (4096 bytes) .. etc. 
- A cookie is sent as a part of an HTTP message header. In an HTTP response it follows this syntax:
```
HTTP/2.0 200 OK
Content-type: text/html
Set-Cookies: user_id=123445
Set-Cookies: something=aa
Set-Cookies: something_else=bb

[ Message body]
```
- The browser concatenate the cookies with a semi-column and sends them in the 'Cookie-header'
```
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: user_id=123445; something=aa; something_else=bb
```
- The following example shows that you can apply certain restrictions to a cookie such as a domain name, an expiry date.. etc.:
```
Set-Cookie: cookie-name=3243434; Domain=.github.com; Expires=Wed, 20-May-20 05:18:38 GMT
```
- Persistent cookies stay in your browser until their expiry date. Persistant cookies are the ones that have an `Expires` field. Non-persistent cookies are deleted when the browser is closed.
- Cookies are an important part of web applications, however, they are easy to tamper. To avoid tampering, we use **cryptographic hashing** to verify the authentication of cookies. A **Cryptographic hash function** is, according to Wikipedia, "a hash function which takes an input (or 'message') and returns a fixed-size string of bytes. The string is called the 'hash value', 'message digest', 'digital fingerprint', 'digest' or 'checksum'. The ideal hash function has three main properties:
	1. It is extremely easy to calculate a hash for any given data.
	2. It is extremely computationally difficult to calculate an alphanumeric text that has a given hash.
	3. It is extremely unlikely that two slightly different messages will have the same hash."
- Even a small change to the original content should result in a drastically different hash.
- Popular such functions include:
	+ CRC32 which fast but not secure at all and can frequently result in collisions. It is used for file checksums.
	+ MD5 is fast but not secure.
	+ SHA1 is not so secure. It's been cracked!
	+ SHA265 is very secure.
- Hashing a cookie's value to prevent tampering has the following workflow:
	1. The server hashes a cookie's value, attaches it to the value (separated by some some symbol such as a pipe `|`) and sends it when a browser requests it.
	2. When the server receives a cookie, it parses the value out, hashes and attaches it to the value and compare it against the received value and hash.
	3. If the value hasn't been tampered with, the server continues using the cookie as usual, but it has been forged, the server resets the cookie for future use.
- Hashing alone as described above is not secure enough. To get real security, you would have to concatenate a secret string to the cookie's value and hash the result. This method has been standardized into so-called **HMAC** (**hash-based message authentication code**). An HMAC function would take a value, a secret and a hashing function as inputs.

## Passwords:
- Storing plain text passwords is stupid and dangerous. They should instead be hashed and the resulting hashes are to be stored. If the storage facility is hacked, the hacker only has useless hashes. In the logging code, the user must have the original password which gets hashed and the resulting hash is compared to the stored hash and if they match permissions are granted.
- It's hard to generate the original message from the hashed value, but easy to the opposite. Bad actors found a way. They pre-hashed many possible passwords and put them in so called rainbow tables. Getting a value from a hash becomes easier. 
- To invalidate rainbow tables, you need to salt the password hashes. Salting is similar to **hmac**king. Salts are random strings of characters that can be hashed along with the passwords. They do invalidate rainbow tables, and it's OK to keep them visible and store them along with the hashes.
- Another important topic concerning webapp security and sensitive data in particular, especially passwords, is network traffic encryption. This is done through TLS (transport layer security) and you should invest in adding it to your application. Today, TLS is the default and even Google delists websites that still use plain HTTP instead of HTTPS.

## App routing:



