//first stem --> check main.js file linked to Html

var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter')



//form submit event
form.addEventListener('submit', additem);

//delete event-
itemlist.addEventListener('click', removeItem)

//add search Item
filter.addEventListener('keyup', filterItems)

//additem function
function additem(e){
    e.preventDefault();

    console.log(1);
    //get Input value 
    var newItem = document.getElementById('item1').value
    var newItem2 = document.getElementById('item2').value
    //create new li
    var li = document.createElement('li')
   //add className
    li.className = ('list-group-item');
    li.appendChild(document.createTextNode(`${newItem} ${newItem2}`))
    //create delete button
    var deletebtn = document.createElement('button');
    deletebtn.className = ('btn btn-danger btn-sm float-right delete')
    deletebtn.appendChild(document.createTextNode('X'))
    var editbtn = document.createElement('button');
    editbtn.className = ('btn btn-success btn-sm float-right');
    editbtn.appendChild(document.createTextNode('EDIT'))
    //append button to li
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    

    // console.log(li)
    //append li to list
    itemlist.appendChild(li)
}

function removeItem(e){
    if(e.target.classList.contains('delete'));{
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }

}


function filterItems(e){
    // conver text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text)

    //get list by tagname - li
    var items = itemlist.getElementsByTagName('li');
    //conver the list to aray

    Array.from(items).forEach(function(item){

        var itemName= item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }

    });


           
    
}