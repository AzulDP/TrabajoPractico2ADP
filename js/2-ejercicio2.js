// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.


// while
/*while (condicion logica){
    todo el codigo que quiero repetir
    SIEMPRE agregar algo q haga q la condicion logica se deje de cumplir
}
SI no se hace, tenes un bucle infinito = carga carga carga y nada pasa
*/


// let contador =1;
// while(contador<=10){
//     document.write(`<p>Este es el renglon N${contador}</P>`);
//     contador = contador+1;
// }

// let contador =0;
// while(contador<10){
//     document.write(`<p>Este es el renglon N${contador+1}</P>`);
//     contador = contador+1;
// O USAR
// contador++ 
// SINO
// contador+=2;
// contador = contador +2; (si inicializo contador en 0 se muestra el cero, sino empezar en 2)
// }

// do-while
/*do {
todo el codigo que quiero repetir 
agregar algo que haga que mi condicion logica de deje de cumplir 
}while{

} */

// document.write('<h2>Bucle do-while</h2>')

// let vueltas = 1;
// do {
//     document.write(`<p>Esta es la linea N${vueltas}</p>`);
// vueltas++;
// }while(vueltas<11) 
// for (let vowels = 0; vowels <=sentence.length; vowels++) {

let number = parseInt(prompt('Ingrese una calificación del 0 al 10'));
// let limite = 10

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
for (let number = 0; number < array.length; number++) {   
if (number == 0 || number == 1 || number == 2) {
    alert('Muy deficiente');
}else if (number == 3 || number == 4) {
    alert('Insuficiente');
}else if (number == 5 || number == 6) {
    alert('Suficiente')
}else if (number == 7) {
    alert('Bien');
}else if (number ==8 ||number == 9) {
    alert('Notable');
}else if (number == 10) {
    alert('Sobresaliente');
}else if (number > 10){
document.write('Número erroneo')
}else{
    document.write('Introduce un número válido')
}
}