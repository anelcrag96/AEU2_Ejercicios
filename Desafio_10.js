/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.10
    Descripción: Este desafío requiere que usted ordene alfabéticamente los caracteres en una cadena. 
*/

function SopaLetras(cadena) { 
    var letras = cadena.split("");
    var ordenar = letras.sort();
    return ordenar.join("");
}
     
var cad="coderbyte";
console.log("Ordenar alfabéticamente '"+cad+"' da como resultado: "+SopaLetras(cad));