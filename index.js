let entry=document.getElementById("text");
let count=0;
let counter=document.getElementById("count");
function incre(){
    count+=1;
    counter.innerText=count; 
}
function save(){
    if(count==0){
        alert("No passenger entered");
    }
    else{
    let countstr=count+" - ";
    entry.textContent += countstr;
    counter.textContent=0;
    count=0;
    console.log(count);
    }
}

