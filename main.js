function calcular(){
var n =document.getElementById("n").value;
var diff;
var Salida=document.getElementById("Salida");


    if(n>21){
        diff=n-21;
        Salida.innerHTML=(2*diff);
        
    }
    else{
        diff=21-n;
        Salida.innerHTML=diff;
    }
}
