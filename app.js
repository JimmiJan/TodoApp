var todo=document.getElementById("todo")

function addTodo(){
    var input =document.getElementById("input")

 
    var li=document.createElement("li")
    var liText=document.createTextNode(input.value)
    li.appendChild(liText)

    todo.appendChild(li)

    
    var delBtn=document.createElement("button")
    var delText=document.createTextNode("Delete")
    delBtn.appendChild(delText)
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("id","dltbtn")


    

    var edBtn=document.createElement("button")
    var edText=document.createTextNode("Edit")
    edBtn.appendChild(edText)
    edBtn.setAttribute("onclick","editItem(this)")
    edBtn.setAttribute("class","btn")
    edBtn.setAttribute("id","edbtn")

    input.value=""


    todo.appendChild(li)
    li.appendChild(delBtn)
    li.appendChild(edBtn)
    
    
}


function deleteAll(){
    todo.innerHTML=""
}


function deleteItem(e){

    e.parentNode.remove()
    console.log()
}


function editItem(e){

    var val=e.parentNode.firstChild.nodeValue;
    var editValue=prompt("Enter Edit value",val)
    e.parentNode.firstChild.nodeValue=editValue;

}