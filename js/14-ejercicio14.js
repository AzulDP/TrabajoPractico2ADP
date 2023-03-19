// Dificultad:  🟢🟡
/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – 
entre cada carácter sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

let text = prompt('Ingrese una cadena de texto');

for(let number =1; number <=500; number++){
    document.write(number);
    if (number%4===0){
    document.write(' - (múltiplo de 4) ');
        }    if (number%9===0){
    document.write(' - (múltiplo de 9) ');
}   
document.write('<br>');

    if (number%5===0){
document.write('<hr>');
}   
}


