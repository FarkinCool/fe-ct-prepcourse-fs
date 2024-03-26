function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let resul=1;
  for(let i=0;i<arguments.length; i++){
    resul *= arguments[i];

  }
  return arguments.length>0 ? resul : 0;
  
}

module.exports = multiplicarArgumentos;
