function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  let isFecha = new Date(fecha);
  return (typeof fecha !== 'string')  && isFecha.getFullYear() > 1970;
}

module.exports = esFechaValida;