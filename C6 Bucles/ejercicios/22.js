function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let tam1 = str1.length;
   let tam2 = str2.length;
   let tam3 = str3.length;
   let mayor = Math.max(tam1,tam2,tam3);
   let resul='';
   for(let i=0; i<mayor; i++){
      resul =  resul + (str1[i] ? str1[i] : '') + (str2[i] ? str2[i] : '') + (str3[i] ? str3[i] : '');
   }
   return resul;
}

module.exports = combine;
