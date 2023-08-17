// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');

// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.background = 'black';
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'red';

// firstChild
console.log(itemList.firstChild);
// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';

// lastChild
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.color = 'orange';

// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.fontWeight = 'bold';

// createElement

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

// Insert element before item lister    
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(container);
container.insertBefore(newDiv, h1);

console.log(newDiv);

// Manipulate newDiv
newDiv.style.fontSize = '50px';
newDiv.style.color = 'red';

// Inserting element before item 1
var item = document.querySelector('li');
var container2 = item.parentElement;
console.log(container2);
container2.insertBefore(newDiv, item);