// Dificultad:  🟢🟡
 
/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/

// Nota: usar confirm() 

let text = prompt('Ingrese una cadena de texto');
let count = 0;

confirm((text)== true);

do  {
    document.write('Ingrese una cadena de texto');
} while(count == true){
    document.write(`${text} + '- '`);
}

