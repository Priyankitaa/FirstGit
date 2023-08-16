// <li class="list-group-item-new">Item 5</li> // new list itme added with new class name

var item = document.getElementsByClassName('list-group-item-new');
item[0].innerHTML = 'ITEM 5';
item[0].style.color = 'red';
item[0].style.fontWeight = 'bold';
item[0].style.backgroundColor = '#ccc';

var itemTag = document.getElementsByTagName('li');
itemTag[4].innerHTML = 'HELLO';
itemTag[4].style.color = 'yellow';
itemTag[4].style.fontWeight = 'lighter';
itemTag[4].style.backgroundColor = 'green';