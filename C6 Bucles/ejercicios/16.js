function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  let resul = '';
  switch (idioma) {
    case "aleman":
      resul ="Guten Tag!";
      break;
    case "mandarin":
      resul ="Ni Hao!";
      break;
    case "ingles":
      resul ="Hello!";
      break;
    default:
      resul = "Hola!";
      break;
  }
  return resul;
}

module.exports = saludo;
