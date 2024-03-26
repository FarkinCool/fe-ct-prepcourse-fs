const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let res=0;
  for (const key in objeto) {
    res++;
  }
  return res;
};

module.exports = contarPropiedades;
