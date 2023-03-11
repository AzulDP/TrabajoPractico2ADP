// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let number = parseInt(prompt('Ingrese una calificación del 0 al 10'));

if (number = [0,1,2]) {
    alert('Muy deficiente')
}else if (number = [3,4]) {
    alert('Insuficiente')
}else if (number = [5,6]) {
    alert('Suficiente')
}else if (number = [7]) {
    alert('Bien')
}else if (number =[8,9]) {
    alert('Notable')
}else if (number = [10]) {
    alert('Sobresaliente')
}else if (number > 10){
document.write('Número erroneo')
}else{
    document.write('Introduce un número válido')
}