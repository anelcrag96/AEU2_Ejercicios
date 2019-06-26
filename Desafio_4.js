/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.4
    Descripción: Este desafío requiere que cambies cada letra de la cadena a la letra que la sigue en el alfabeto, por lo que a se convierte en b, z se convierte en a, etc.  
*/

function CambioLetras(cadena) { 
  var convertir = cadena.replace(/[a-z]/gi, function(letra) { 
    return (letra === 'z' || letra === 'Z') ? 'a' : String.fromCharCode(letra.charCodeAt() + 1);
  });

  var mayusculas = convertir.replace(/a|e|i|o|u/gi, function(vocal) { 
    return vocal.toUpperCase();
  });

  return mayusculas;     
}
   
var cad="Aplicaciones empresariales";
console.log("Cambiar cada letra de '"+cad+"' da como resultado: "+CambioLetras(cad));      