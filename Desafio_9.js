/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.9
    Descripción: Este desafío requiere que convierta un número entero, que representa la cantidad de minutos, por ejemplo, 63 significa 214 minutos, y que convierta este número entero en horas y minutos. 
*/

function ConvertirTiempo(tiempo) { 
    var horas = Math.floor(tiempo / 60);
    var minutos = tiempo % 60;
  
    return horas + ' horas:' + minutos+" minutos"; 
}//ConvertirTiempo
          
const numero=154;
console.log("Convertir "+numero+" da como resultado: "+ConvertirTiempo(numero));