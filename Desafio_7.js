/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.7
    Descripción: Este desafío requiere que usted determine si cada carácter alfabético en una cadena tiene un símbolo más (+) en el lado izquierdo y derecho de sí mismo.
*/

function SimbolosSimples(cadena) { 
    var cadena = '=' + cadena + '=';
  
    for (var i = 0; i < cadena.length; i++) {
      if (cadena[i].match(/[a-z]/i) !== null) {
        if (cadena[i-1] !== '+' || cadena[i+1] !== '+') { 
          return false;
        }//if
      }//if
    }//for
    return true;
}//SimbolosSimples
     
var cad="+d+=3=+s+";
console.log("Escribir con mayúscula la primer letra de '"+cad+"' da como resultado: "+SimbolosSimples(cad));