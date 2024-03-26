function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let count=0;
  for (let index = 0; index < array.length; index++) {
    if(array[index]>10){
      count++;
    }        
  }
  return count;
}

module.exports = contarElementosMayoresA10;
