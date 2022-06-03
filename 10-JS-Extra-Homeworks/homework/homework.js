// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var  array=[];
 for(var clave in objeto){
   array.push([clave,objeto[clave]]);
 }return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var objeto={};
for(var i=0; i<string.length; i++){
  if(objeto.hasOwnProperty(string[i])){
      objeto[string[i]]=objeto[string[i]]+1;
    }else{
      objeto[string[i]]=1;
    }
  }return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var min= "";
  var may="";
  for(var i=0; i<s.length;i++){
    if(s[i]===s[i].toUpperCase()){
      may=may+s[i]
    }else{
      min=min+s[i]
    }
  }return may+min;

}


function asAmirror(str) {
  // str="Hola como estas" -> "aloH omoc satse"
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase=str.split(" "); // Con el split transformamos el string a array
  var Array=frase.map(function(elemento){
    return elemento.split("").reverse().join("")
  })
  return Array.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string=numero.toString();
  var array1= string.split("")
  var resultado=array1.reverse().join("")
  if(resultado===string){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenanueva=""; 
  for(var i=0; i<cadena.length;i++){
    if(cadena[i]==="a" || cadena[i]==="b" || cadena[i]==="c"){
      continue
    }else{
      cadenanueva=cadenanueva + cadena[i] //las strings se pueden sumar de esta manera, como en python los numeros
    }
  }return cadenanueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:
  var comon=true
  while(comon){
    comon = false;
    for(var i=0;i<arr.length-1; i++){
      if(arr[i].length > arr[i+1].length){
        var auxiliar=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=auxiliar
        comon=true                //aca como el comon sigue en true al final del while, el while se repite una vez mas, arreglando las posiciones restantes
      } 
    }
  }return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var coincidencias=[];
  for(var i=0; i<arreglo1.length;i++){  // Los for van a compara el arreglo1[0] con (arreglo[0],arreglo[1],arreglo[2],arreglo[3],arreglo[4],arreglo[5]), cuando termine, empieza con el arreglo1[1] y asi sucesivamente
    for(var j=0; j<arreglo2.length;j++){
      if(arreglo1[i]===arreglo2[j]){
        coincidencias.push(arreglo1[i]);
      }
    } 
  }return coincidencias;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

