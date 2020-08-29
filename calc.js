
function dis(val)
{

document.getElementById("display").value+=val;
 }
 function rem(){
     
    var k;
    k=document.getElementById("display").value;
    k=k.slice(0,(k.length)-1);
    document.getElementById("display").value=k;
 }
 function sqr(){
    var k;
    k=document.getElementById("display").value;
    k=k*k;
    document.getElementById("display").value=k;
    document.getElementById("display").style.letterSpacing="2px";
 }
 function root(){
    var k;
    k=document.getElementById("display").value;
    k=Math.sqrt(eval(k));
    document.getElementById("display").value=k;
    document.getElementById("display").style.letterSpacing="2px";
 }
 function calc(){
    let x = document.getElementById("display").value;
    let y = eval(x);
    document.getElementById("display").style.letterSpacing="2px";
    document.getElementById("display").value=y;
 }
 function clr(){
    document.getElementById("display").value="";
 }