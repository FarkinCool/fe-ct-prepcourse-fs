function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  let mesesPedidos = ['Marzo', 'Noviembre', 'Enero'];
  let count=0
  for (const iterator of mesesPedidos) {
    if(array.find(item => item === iterator)){
      count++;
    }
  }

  return count ===3 ? mesesPedidos : "No se encontraron los meses pedidos"; 
}

module.exports = mesesDelAño;
