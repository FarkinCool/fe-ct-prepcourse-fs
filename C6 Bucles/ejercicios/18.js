function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let resul=1;
  for(let i=a; i<=b; i++){
    resul *=i;
  }
  return resul > 0 ? resul : Math.abs(resul);
}

module.exports = productoEntreNúmeros;