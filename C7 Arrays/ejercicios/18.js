function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sum = resultadosTest.reduce((sum,acc) => sum+acc,0);
  return sum/resultadosTest.length;

}

module.exports = promedioResultadosTest;
