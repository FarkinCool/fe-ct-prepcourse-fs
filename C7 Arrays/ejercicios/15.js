function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let menor;
  for(let i=0; i<array.length; i++){
    if(array[i] < 0){
      menor=0;
    }
    else{
      menor=1;
      break;
    }
  }

  let mayor = Math.max(...array);
  return (array.length === 0 || menor===0 ) ? 0: array.indexOf(mayor);
}

module.exports = encontrarIndiceMayor;
