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

let mark = parseInt(prompt("Ingrese una calificación del 0 al 10"));


switch (mark) {
  case 0:
  case 1:
  case 2:
    alert("Muy deficiente");
    break;
  case 3:
  case 4:
    alert("Insuficiente");
    break;
  case 5:
  case 6:
    alert("Suficiente");
    break;
  case 7:
    alert("Bien");
    break;
  case 8:
  case 9:
    alert("Notable");
    break;
  case 10:
    alert("Sobresaliente");
    break;
    case (mark> 10):
        document.write('Número erroneo');
    break;
  default:
    document.write("Introduce un número válido");
  //   case
  //   break;
}


