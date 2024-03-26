function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let resul=[];
  for (let index = 0; index < 10; index++) {
    
    if((num+2) === index ){
      resul = "Se interrumpió la ejecución";
      break;
    }
    else{
      resul[index] = num+2;
      num=num+2;
    }

  }
  return resul;
}

module.exports = breakStatement;
