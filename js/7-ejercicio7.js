// Dificultad:  🟢🟡
/*7- Haz un script que escriba una pirámide inversa de los números del 1 
al número que indique el usuario (no mayor de 50)  de la siguiente forma :
(suponiendo que indica 30).
*/
// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

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
            const piramide = [output];
            const inverse = piramide.reverse();
            console.log(inverse);
            output = '';
    }
}
generatePyramid();
}