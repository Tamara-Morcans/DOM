/* var parrafos= document.getElementsByClassName(".parrafos");
console.log(parrafos);

document.getElementsByClassName("parrafos")[0] .innerHTML="Parrafo cambiado dinamicamente";

document.getElementById("parrafo2") .innerHTML="Soy el parrafo 2" (Punto =clase, #=id*/

document.querySelectorAll(".parrafo")[0] .textContent= "Nuevo texto de parrafo";
document.querySelector("#parrafo2") .textContent= "Nuevo tetxto de parrafo";

var parrafo1 = document.querySelectorAll(".parrafo")¨[0];
var parrafo2= document.querySelector("#parrafo2");

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);
