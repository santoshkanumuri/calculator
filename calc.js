function dis(val)
{
document.getElementById("display").value+=val;
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