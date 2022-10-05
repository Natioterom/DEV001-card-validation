const validator= {
  
isValid(numCard){
  //Prevengo el default del formulario
  //Creo variables
  let suma1 = 0;
  let suma2 = [0];
  let total = 0;
  let sumaDigitos=0; 
    //Tomo el valor del input (Es un string y lo transformo a array con .split)
  let arrNumCard = numCard.split('')
  //Hacer un ciclo for para multiplicar las posiciones pares usando mod 2.
  for (let i = 0; i < arrNumCard.length; i++) {
      let numeroActual = arrNumCard[i];
      if (i % 2!= 0) {
          numeroActual = arrNumCard[i] * 2;
          //Si el resultado es mayor a 9 le resto 9.
          if (numeroActual > 9) {
              sumaDigitos = numeroActual - 9;
              suma1 += sumaDigitos;
          }
          else {
              suma1 += numeroActual;
             
          }
      }
      else {
          suma1 += numeroActual;
          //Suma 1 queda como string y lo transformo a un array.
          suma2 = suma1.split('');
        }
      }
  //Ciclo for para sumar los numeros del array.
  for (let i = 0; i < suma2.length; i++) {
      total+= parseInt(suma2[i]);     
      }
    //Si el modulo del total es igual a 10 es valido , de lo contrario invalido.
  if (total % 10===0){
    return true;
      }
 else{
  return false;                
 }   
 },

maskify(numCard){
  return numCard.slice(0,-4).replace(/./g, "#") + numCard.slice(-4);
   //let arrNumCard= numCard.split('');
   //let primerosNumeros= arrNumCard.slice(0,-4).replace('#');
   //let ultimoNumeros= arrNumCard.slice(-4); 
   //let numerosMask= primerosNumeros + ultimoNumeros.join("");
   //console.log(numerosMask);
          // return numerosMask;
}
}
export default validator;
