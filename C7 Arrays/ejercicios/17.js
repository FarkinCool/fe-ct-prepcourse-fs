function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce((sum,acc) => sum+acc,0);
}

module.exports = agregarNumeros;
