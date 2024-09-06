// The DOM
// # The DOM
// The HTML of a website can be thought of as a tree. Within the document file, you have the root <html> element. From that root element sprouts the two primary branches: the <head> and <body> elements.

// This can be visualized like an upside down tree, as shown below:

// Diagram of the Document Object Model (DOM)

// This is known as the Document Object Model, or the DOM. From the browser's point of view, the DOM is a family of trees that represent how a site's HTML elements are organized and related.

// # The document Object
// When we visit a site, a new DOM tree is created. Each element under the <head> and <body> elements is like a fruit hanging in the tree.

// With JavaScript, we can access any of these elements with a special document object!

// Assuming the following code is linked with an HTML file:

// console.log(document);

// Everything found in that HTML file would be logged to the console! 🤯

// DOM Demo

// ## .querySelector()
// You'll find that the document is very powerful. With it, you can select anything in the HTML, via methods. One of those methods is .querySelector().

// // Select by element name
// document.querySelector("p");

// // Select by class name
// document.querySelector(".class-name");

// // Select by id name
// document.querySelector("#id-name");

// You pass a string into the .querySelector() method that represents an element and returns the first instance of that element. This string can either be the element name, a class name, or an id name.

// ## .innerHTML
// Not only can you access elements with DOM methods, but you can also access the contents of those elements with properties like .innerHTML:

// document.querySelector("div").innerHTML;
// // <p>Howdy!</p>
