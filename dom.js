console.dir(document);
//const x=document.getElementById("items")
//x.style.color="red"
const x=document.getElementById("header-title");
const y=document.getElementById("main-header")
x.style.borderBottom="solid 3px #000";
y.style.borderBottom="solid 3px #000"
 var a=document.getElementsByClassName("title")
console.log(a)
a[0].style.fontWeight="bold";
a[0].style.color="green";
var b=document.getElementsByClassName("list-group-item");
console.log(b);
b[2].style.backgroundColor="green";
for(var i=0;i<b.length;i++){
    b[i].style.fontWeight="bold";
}
//Traversing the DOM//
var itemList=document.querySelector("#items");
//parent Node//
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="black"
console.log(itemList.parentNode.parentNode);
//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.color="yellow";
itemList.lastElementChild.textContent="hello"
console.log(itemList.lastChild);
//nextsibling
console.log(itemList.nextSibling)
//nextElementSibling
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.style.color="green"
//previous sibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
//create element
//create a div
var newDiv=document.createElement('div')
//Add class
newDiv.className='hello'
//add id
newDiv.id='hello1';
//add attributes
newDiv.setAttribute('title',"hello div");

//create textNode
var newDivText=document.createTextNode("hello world 2");
//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv,h1);
var form=document.getElementById("addForm");
var itemList=document.getElementById("items");
var filter = document.getElementById('filter');
// add submit events
form.addEventListener("submit",addItem);
// add delete events
itemList.addEventListener("click",removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById("item").value;

    var li=document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn=document.createElement('button')
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          itemList.removeChild(li);
        }
      }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
