// Dificultad:  🟢🟡
// 15- Realiza un script que cuente el número de vocales que tiene un texto.


function countVowel(str) {
    const count = str.match(/[aeiouwy]/gi).length;
    return count;
}
const sentence = "The quick brown fox jumps over the lazy dog.";
const result = countVowel(sentence)
document.write(`${result}`)




