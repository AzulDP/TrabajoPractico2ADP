// Dificultad:  🟢🟡
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

/* necesito pedir 3 nombres
3 edades - un bucle
unir cada nombre con cada edad */
// .split("").map(Number)
// let name = prompt('Ingrese su nombre');

for (let vueltas = 0; vueltas < 1; vueltas++ ){   
    let details1 = parseInt(prompt('Ingrese un nombre y una edad')).map(Number);
    let details2 = parseInt(prompt('Ingrese un nombre y una edad')).map(Number);
    let details3 = parseInt(prompt('Ingrese un nombre y una edad')).map(Number);
    // let age = details.map(Number);
    let result = Math.max(details1,details2, details3);
    // if Math.max()
    document.write(`${result}`);
}