// Dificultad:  🟢

// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let age = parseInt(prompt('Ingrese su edad'));

if (age >= 18) {
document.write('Usted puede conducir');
}else if (age <18){
    document.write('Según su edad, usted no puede conducir');   
}else {
    document.write('Ingrese un número válido');
}