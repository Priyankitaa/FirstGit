var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addItem);
// Filter event
filter.addEventListener('keyup',filterItems);

// Add item
function addItem(e)
{
    e.preventDefault();
    // console.log(1);

    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem2 = document.getElementById('description').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class name to new element
    li.className = 'list-group-item';
    // console.log(li);
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem + " " + newItem2));

    // Create edit button
    var editbtn = document.createElement('button');

    // Add classes to edit button
    editbtn.className = 'btn btn-info btn-sm float-right ml-2 edit';
    // Append txt node
    editbtn.appendChild(document.createTextNode('Edit'));

    // Append edit button to li
    li.appendChild(editbtn);

    // Create delete button element
    var deletebtn = document.createElement('button');

    // Add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deletebtn.appendChild(document.createTextNode('X'));

    // Append del button to li
    li.appendChild(deletebtn);

    // Append li to item lists
    itemList.appendChild(li);

}

// Filter items
function filterItems(e)
{
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);

    // get 'li's
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    });
}