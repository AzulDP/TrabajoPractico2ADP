// Dificultad:  🟢🟡
/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let number = parseInt(prompt("Ingrese un número"));
let sum = 0;
let count = 0;

if (confirm(number) == true) {
  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
    // count++;
  }
} else if (isNaN(number)) {
  alert("No es un número");
} else {
  document.write(`${sum}`);
}
// let otherNumber = parseInt(confirm('Ingrese un número'));
