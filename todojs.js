const inputBox = document.getElementById("inpBox");
const listContainer = document.getElementById("listContainer");
function add(){
    if (inputBox.value == "") {
        alert("You must write something");
    }
    else{
    
    let li = document.createElement("li");
    let t = document.createTextNode(inputBox.value);
    let c = document.createElement("span");
    c.classList.add("cr");
    c.innerHTML = "-";
    
    li.appendChild(t);
    li.appendChild(c);
    
    
    listContainer.appendChild(li);
    li.classList.add("listelements");

    inputBox.value="";
    saveData();
    }
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    saveData();}
    },false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();