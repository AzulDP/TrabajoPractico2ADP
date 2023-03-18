// Dificultad:  🟢🟡🔴
// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
const rows = prompt('Ingrese el número de filas');
const columns = prompt('Ingrese el número de columnas');
let result = rows * columns

document.write('<table><tbody>')
// dibujar las filas
for(let indexRows = 0; indexRows < rows; indexRows++){
    document.write('<tr>')
    // dibujar las celdas
for(let indexColumns = 0; indexColumns < columns; indexColumns++){

    document.write(`<td>${result--}</td>`)
}
    document.write('</tr>')
}
document.write('</tbody></table>')