function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let resul=[];
  for (let index = 0; index < 10; index++) {
    if(5 === index ){
      continue;
    }
    else{
      resul.push(num+2) ;
      num=num+2;
    }

  }
  return resul;
}

module.exports = continueStatement;
