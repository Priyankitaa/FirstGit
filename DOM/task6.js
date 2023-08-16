// deliverables using QUERYSELECTOR

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

// deliverables using QUERYSELECTORALL

var items = document.querySelectorAll('li');
items[1].style.color = 'green';

var oddItems = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < oddItems.length; i++)
{
    oddItems[i].style.backgroundColor = 'green';
}