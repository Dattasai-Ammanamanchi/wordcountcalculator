let btn=document.getElementById("calculate");
let output=document.getElementById("output");

btn.addEventListener("click",function(){

    input=document.getElementById("word").value;

    output.innerHTML=input.length;
})