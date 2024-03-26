function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let item = array[0];
  let resul= true;
  for(const ite of array){
    if(item !== ite ){
      resul = false;
      break;
    }
  }
  return resul;
}

module.exports = todosIguales;
