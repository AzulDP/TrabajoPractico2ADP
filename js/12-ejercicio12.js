// Dificultad:  🟢🟡
// 12- Realiza un script que genere un número aleatorio entre 1 y 99

function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+ 1) + min);
}
document.write(Math.random());