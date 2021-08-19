window.onload = () => {
const form1 = document.querySelector("#addForm");

let items = document.getElementById("items");
let submit = document.getElementById("submit");

let editItem = null;

form1.addEventListener("submit", addItem);
};

function addItem(e) {
e.preventDefault();

if (submit.value != "Submit") {
console.log("Hello");

editItem.target.parentNode.childNodes[0].data
= document.getElementById("item").value;

submit.value = "Submit";
document.getElementById("item").value = "";

document.getElementById("lblsuccess").innerHTML
= "Text edited successfully";

document.getElementById("lblsuccess")
.style.display = "block";

setTimeout(function() {
document.getElementById("lblsuccess")
.style.display = "none";
}, 3000);
return false;
}

let newItem = document.getElementById("item").value;
if (newItem.trim() == "" || newItem.trim() == null)
return false;
else
document.getElementById("item").value = "";

let li = document.createElement("li");
li.className = "list-group-item";
li.appendChild(document.createTextNode(newItem));
items.appendChild(li);
}

function toggleButton(ref, btnID) {
document.getElementById(btnID).disabled = false;
}