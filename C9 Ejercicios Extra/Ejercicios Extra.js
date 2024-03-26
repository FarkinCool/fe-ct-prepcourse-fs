/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let array = [];
  for (const key in objeto) {
      array.push([key,objeto[key]]);
  }
  return array;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let newString = string.split('').sort();
  let resul= {};
  let count;
  for (let i= 0; i< newString.length; i++){
    
    if(resul[newString[i]] === undefined){
      count=1
      resul[newString[i]] = count;
    }
    resul[newString[i]] = count++;
  }
  return resul;

}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayus="", minus="";
  for(let i=0; i<string.length; i++ ){
    if(string[i] === string[i].toUpperCase()){
      mayus += string[i];
    }
    else{
      minus += string[i];
    }
  }
  return mayus + minus;

}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let resul=[];
  let newString = frase.split(' ');
  for(let ite of newString){
    resul.push(ite.split('').reverse().join(''));
  }
  return resul.join(' '); 

}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let newString = numero.toString().split('').reverse().join('');
  if(numero === +newString){
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let comp = ['a','b','c'];
  let newString = string.split('');

  for(let ite of comp){
    newString = newString.filter(item => item !== ite);
  }

  return newString.join('');
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  let tama = {};
  let palabras = [];
  
  for(let ite of arrayOfStrings){
      if(tama[ite.length]=== undefined){
        tama[ite.length] = [ite]; 
      }
      else{
        tama[ite.length].push(ite);
      }
  }
  for(let ite in tama){
     if(tama.hasOwnProperty(ite)){
      palabras = palabras.concat(tama[ite]); 
     }
  }
  return palabras; 
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  let resul = [];
  for(let i of array1){
      if(array2.some(ele => ele === i)){
        resul.push(i);
      }
  }
  return resul;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
