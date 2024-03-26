function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let resul = '';
  switch (color) {
    case "blue":
      resul ="This is blue";
      break;
    case "red":
      resul ="This is red";
      break;
    case "green":
      resul ="This is green";
      break;
    case "orange":
      resul ="This is orange";
      break;
    default:
      resul = "Color not found";
      break;
  }
  return resul;
}

module.exports = colors;
