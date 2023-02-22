//first stem --> check main.js file linked to Html

var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');


//form submit event
form.addEventListener('submit', additem);

//delete event
itemlist.addEventListener('click', removeItem)

//additem function
function additem(e){
    e.preventDefault();

    console.log(1);
    //get Input value 
    var newItem = document.getElementById('item').value
    
    //create new li
    var li = document.createElement('li')
   //add className
    li.className = ('list-group-item');
    li.appendChild(document.createTextNode(newItem))
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