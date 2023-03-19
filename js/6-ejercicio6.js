// Dificultad:  🟢🟡
// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….



function generatePyramid() {
    let output = '';
    for (let i = 1; i<=30; i++) {
        for (let j =1; j<= i; j++) {
            output += i;
        }
        console.log(output);
        output = '';
    }
}
generatePyramid();


//no funciona
// let count = 1;
// let number = 1;

// for (pyramid = 0; pyramid<=30; pyramid++){
//     console.log(number.repeat(count));
//     count +=1;
// }


//elegante
// const generatePyramid = rows =>
// [...Array(rows)]
// .map((_, i) => String(i+1).repeat(i+1))
// .join("\n");
// console.log(generatePyramid(30));