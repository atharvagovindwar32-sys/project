var a1=document.querySelector("h1");
var buttons = document.querySelectorAll(".f button");
var b = buttons[0];   // Button 1
var b1 = buttons[1];  // Button 2
var a=0;
 
b.addEventListener("click",function(){
    a++;
    a1.innerHTML=a;
    if(a===3){
        a1.innerHTML=a;
    a1.innerHTML="Bass kar laudya";
 }
});
b1.addEventListener("click",function(){
    a--;
    a1.innerHTML=a;
});

