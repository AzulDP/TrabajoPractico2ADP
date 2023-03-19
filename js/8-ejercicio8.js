// Dificultad:  🟢🟡
/* 8- Crea script para generar pirámide siguiente con los números 
del 1 al número que indique el usuario (no mayor de 50) 
*/
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let maxNum = parseInt(prompt('Ingrese un numero del 1 al 50'));

if (maxNum > 50) {
    alert('El número ingresado no es válido')
} else {

function generatePyramid() {
    let output = '';
    for (let i = 1; i<=maxNum; i++) {
        for (let j =1; j<= i; j++) {
            output += i;
        }
            console.log(output);
            output = '';
    }
}
generatePyramid();
}