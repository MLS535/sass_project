function resultado(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var resultado= Number(num1) +Number(num2);
    document.getElementById("result").innerHTML=resultado;
}