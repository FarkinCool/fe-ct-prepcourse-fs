function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let div, sino=true;
  for(let i =2; i<= numero/2; i++){
    div = numero % i;
    if(div == 0){
      sino = false;
      break;
    }
    else
    sino= true;
  }
  return sino; 
  //Number.isInteger(Math.sqrt(numero))  ? false : true;
}

module.exports = esNumeroPrimo;
