/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.6
    Descripción: Este desafío requiere que escribas con mayúscula la primera letra de cada palabra. 
*/

function LetraMayuscula(cadena) { 
    return cadena.replace(/\b[a-z]/gi, function(letra) { 
      return letra.toUpperCase();
    });      
}//LetraMayuscula
     
var cad="aplicaciones empresariales";
console.log("Escribir con mayúscula la primer letra de '"+cad+"' da como resultado: "+LetraMayuscula(cad));  