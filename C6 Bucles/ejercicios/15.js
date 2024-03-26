function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  let resul='';
  switch (numero) {
    case 1: 
      resul = "Lunes";
      break;
    case 2: 
      resul = "Martes";
      break;
    case 3: 
      resul = "Miercoles";
      break;
    case 4: 
      resul = "Jueves";
      break;
    case 5: 
      resul = "Viernes";
      break;
    case 6: 
      resul = "Sabado";
      break;
    case 7: 
      resul = "Domingo";
      break;
  
    default:
      resul = "No es un dia de la semana";
      break;
  }
  return resul;

}

module.exports = obtenerDiaSemana;