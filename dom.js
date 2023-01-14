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