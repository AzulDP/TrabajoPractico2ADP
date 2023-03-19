// Dificultad:  🟢🟡
// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let sentence = prompt('Ingrese una cadena de texto');

function reverseString(str){
   return str.split("").reverse().join("");
}
document.write(reverseString(sentence));