// console.log("Hola mundo".split());

//Escribir una función llamada countingEs que reciba como parámetro un string (cadena de texto) y retorne el número de caracters "e" (minúscula).

function countingEs(cadena) {
  let count = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "e") {
      count += 1;
    }
  }
  console.log(count);
}

countingEs("Estoy ejercitándome los miércoles y jueves");

//Define una función message, que reciba como parámetro un arreglo y retorne las siguientes cadenas de texto para cada uno de los casos de prueba.

function message(arr){
    let array = arr.join(" ");
    console.log(array);
}

message(["Estoy", "aprendiendo", "Java", "Script"])
