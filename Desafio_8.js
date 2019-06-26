/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.8
    Descripción: Este desafío requiere que devuelva la cadena "true" si el segundo parámetro entero (num2) es más grande que el primero (num1).
*/

function ComprobarNumero(numero1, numero2) { 
    return (numero2 === numero1) ? '-1' : (numero2 > numero1) ? true : false;
}
     
const n1=30, n2=122;
console.log("¿El número "+n2+" es más grande que el número "+n1+"? "+ComprobarNumero(n1,n2));