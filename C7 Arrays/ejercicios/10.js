function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  let resul;
  for (const iterator of array) {
    if(iterator.length >= 5){
      resul = iterator;
      break;
    }
    
  }
  return resul;
}

module.exports = obtenerPrimerStringLargo;
