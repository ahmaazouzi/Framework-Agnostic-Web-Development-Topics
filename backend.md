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
- A Typical request consits of:
	- The first line of the request is called a **request line**. The request line itself consists of:
		+ The request method, such as GET, POST ..etc. A request method dictates how the client communicates with the server. With GET, for example, a client usually fetches data or documents. A google search, for example, asks for search resulsts. 
		+ The **path** which points to the requested resource.
		+ The HTTP **version**. The most common version is http 1.1.
	- **Request headers** are key value pairs. They inclued, the host, user agent..etc. There can be a lot of headers.
	- A request might also have a **body** that contains parameters added to the request. A POST method has a body while GET doesn't. query parameters in a POST method are added to the request's body and are not appended to the URL as in a GET request.
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
- It has headers and a body just like a request, but it differes from a request in that it has a **status line** instead of a request line. A status line consists of 3 parts:
	+ The HTTP verdion.
	+ A **status code** which is a number indicating if the request was successful. Codes include 202 for a successful request, 404 for a not found page, 500 for a server error.. etc. 
	+ "A **status message**, a non-authoritative short description of the status code.""
