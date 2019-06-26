/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.2
    Descripción: Este desafío requiere que devuelvas el factorial de un número dado. 
*/

function PrimerFactorial(numero) { 
    function factorial(n) { 
 
        if (n===0) { 
            return 1;
        }//if
        else { 
            return factorial(n-1) * n; 
        }//else
    }//factorial
    return factorial(numero);     
}//PrimerFactorial
  
const valor=8;
console.log("Primer factorial de "+valor+" es: "+PrimerFactorial(valor));  