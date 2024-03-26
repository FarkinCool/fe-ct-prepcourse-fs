function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let occu1 = {};
   let occu2 = {};
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();

   for(let i =0; i<str1.length; i++ ){
      if(occu1[str1[i]] === undefined){
         occu1[str1[i]] = {repetition:0}
      }
      occu1[str1[i]].repetition++;
   }
   for(let i =0; i<str2.length; i++ ){
      if(occu2[str2[i]] === undefined){
         occu2[str2[i]] = {repetition:0}
      }
      occu2[str2[i]].repetition++;
   }
   let ordStr1 = Object.keys(occu1).sort();
   let ordStr2 = Object.keys(occu2).sort();

   return (str1.length === str2.length) && (JSON.stringify(ordStr1) === JSON.stringify(ordStr2));
  
}
module.exports = esAnagrama;
