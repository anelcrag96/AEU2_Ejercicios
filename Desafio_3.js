/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.3
    Descripción: Este desafío requiere que inviertas una cadena de entrada. 
*/

function PrimerReverso(cadena) { 
    var nuevaCadena = "";
  
    for (var i = cadena.length - 1; i >= 0; i--) {   
      nuevaCadena = nuevaCadena + cadena.charAt(i);
    }//for
    return nuevaCadena;      
  }//PrimerReverso
     
var cad="Aplicaciones empresariales";
console.log("Invertir '"+cad+"' da como resultado: "+PrimerReverso(cad));  