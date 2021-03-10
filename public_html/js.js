 
 var valtA=document.getElementById("a").value;
 var valtB=document.getElementById("b").value;
 var valtM=document.getElementById("muv").value;
 var osszeg=Number(valtA)+Number(valtB);
 
 function osszead(){
    eredmeny = Number(valtA) + Number(valtB);
    document.getElementById("szoveg").innerHTML = "Eredmény: "+ eredmeny;
}
function kivonas(){
    eredmeny = Number(valtA) - Number(valtB);
    document.getElementById("szoveg").innerHTML = "Eredmény: "+ eredmeny;
}
function szorzas(){
    eredmeny = Number(valtA) * Number(valtB);
    document.getElementById("szoveg").innerHTML = "Eredmény: "+ eredmeny;
}
function osztas(){
    eredmeny = Number(valtA) / Number(valtB);
    document.getElementById("szoveg").innerHTML = "Eredmény: "+ eredmeny;
}

 alert("Hello Világ");
 document.write("Hello Világ section");
  if(valtM === "+"){
        osszead();
    }
    else if(valtM === "-"){
        kivonas();
    }
    else if(valtM === "*"){
        szorzas();
    }
    else if(valtM === "/"){
        osztas();
    }


}