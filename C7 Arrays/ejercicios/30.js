function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let occur ={};
  let resul;
  for(let i=0; i<numeros.length; i++){
    if(occur[numeros[i]] === undefined){
      occur[numeros[i]]={
        repeticion:0
      };
    }
    else{
      occur[numeros[i]].repeticion++;
      resul = numeros[i];
      break;
    }
  }
  return resul;
}

module.exports = encontrarElementoRepetido;