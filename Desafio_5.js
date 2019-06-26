/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.5
    Descripción: Este desafío requiere que sumes todos los números de 1 a un argumento dado. 
*/

function AdicionSimple(numero) { 
    return (numero*(numero+1))/2;     
}//AdicionSimple
  
const n=4;
console.log("Sumar todos los números del 1 al "+n+" da como resultado: "+AdicionSimple(n));     