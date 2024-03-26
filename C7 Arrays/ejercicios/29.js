function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  let resul = null;
  for(let i=0; i<numeros.length; i++){
    if((i+1) === numeros[i]){
      continue;
    }
    else{
      resul =i+1;
      break;
    }
  }
  return resul;
}

module.exports = encontrarNumeroFaltante;