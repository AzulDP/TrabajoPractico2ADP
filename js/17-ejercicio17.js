// Dificultad:  🟢
/* 17- Realiza un script que muestre la posición de la primera vocal 
de un texto introducido por teclado.
// */

const sentence = prompt ('Ingrese una frase');

// console.log(sentence.charAt(0))
// console.log(sentence.length)

for (let indexOfFirst = 0; indexOfFirst < sentence.length; indexOfFirst++) {
    if (sentence.charAt(indexOfFirst) === 'a' || 'A'||
    sentence.charAt(indexOfFirst) === 'e' || 'E'||
    sentence.charAt(indexOfFirst) === 'i' ||'I'||
    sentence.charAt(indexOfFirst) === 'o' ||'O'||
    sentence.charAt(indexOfFirst) === 'u'||'U' ||
    sentence.charAt(indexOfFirst) === 'w'||'W' ||
    sentence.charAt(indexOfFirst) === 'y'||'Y') {
    document.write(`La vocal ${sentence.charAt(indexOfFirst)} esta en la posicion ${indexOfFirst}`)
indexOfFirst = sentence.length;
}
}


// const sentence = parseInt(prompt('ingrese un texto'));

// function isVowel(chr) {
//     const vowels = chr.match(/[aeiouwy]/gi).length;
//     // const result = vowels(sentence);
//     // const indexOfFirst = sentence.vowels(result);
//     return vowels.indexOfFirst !== -1;
// }
// console.log(indexOfFirst);
// // document.write(`${indexOfFirst}`)
