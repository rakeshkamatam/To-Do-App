const inputfld=document.getElementById("InPtfld");
const unorderlist=document.getElementById("UOList");

function Addlist(){
    if(inputfld.value=== '')
    {
        alert("You must write something!")
    }
    else {
        let li=document.createElement('li');
        li.innerHTML=inputfld.value;
        unorderlist.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputfld.value='';
    saveData()
}

unorderlist.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        saveData()
    }
    
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
    
},false);

function saveData(){
    localStorage.setItem("data",UOList.innerHTML);
}

function showlist(){
    unorderlist.innerHTML=localStorage.getItem("data");
}
showlist()
