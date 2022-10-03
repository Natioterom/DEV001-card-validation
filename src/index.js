import validator from './validator.js';

//Creo variable del boton para usar el addEventListener (id que esta en el boton de html)
const btn = document.getElementById("validar");
//Creo variable para utilizar el oninput
const input = document.getElementById("numeroTc");
//Creo variable para colocar el logo de la tarjeta
const logo= document.querySelector("#tarjeta");

 
       
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let numCard = document.querySelector("input").value;
    (validator.isValid(numCard));
//Enmascarar números
}
)
console.log(validator);

input.addEventListener("keyup",logos);
function logos(){
    let numCard = document.querySelector("input").value;
    let arrNumCard = numCard.split('')
      if (arrNumCard [0]==4){
       logo.innerHTML="";
       const visa= document.createElement("img");
       visa.src="tarjeta visa.png";
       logo.appendChild(visa)
   }
   else if(arrNumCard [0]==5){
       logo.innerHTML="";
       const masterd= document.createElement("img");
       masterd.src="tarjeta mastercard.png";
       logo.appendChild(masterd)
   } 
}