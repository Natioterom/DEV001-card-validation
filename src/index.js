import validator from './validator.js';

//Creo variable del boton para usar el addEventListener (id que esta en el boton de html)
const btn = document.getElementById("validar");
//Creo variable para utilizar el oninput
const input = document.getElementById("numeroTc");
//Creo variable para colocar el logo de la tarjeta
const logo= document.querySelector("#tarjeta");
//variables para nombre,fecha y cvv
const nombre = document.getElementById("nombre");
const fecha = document.getElementById("fecha");
const cvv = document.getElementById("cvv");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let numCard = document.querySelector("input");
    if(numCard.value ==""){
            if(nombre.value ==""){
        alert("Debes ingresar tú Nombre")
        }
    if(fecha.value ==""){
        alert("Debes ingresar la Fecha de Expiración")
        } 
        if(cvv.value ==""){
        alert("Debes ingresar el Número de CVV")
             }  
             alert("Debes ingresar el Número de Tarjeta")
             return;
         } 
                                           
    else{
     let valido=validator.isValid(numCard.value);
     if(valido){
    alert("El pago fue realizado con éxito");
     }
       else{ alert("El pago fue rechazado");
    }
       }
   });
//Funcion para enmascarar Números
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let numCard = document.getElementById("numeroTc");
    let numeroImput=validator.maskify(numCard.value);  
    numCard.value=numeroImput; 
    });
    
//if para mostrar el logo de la tarjeta si comienza con 4 es visa si comienza con 5 mastercard
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


