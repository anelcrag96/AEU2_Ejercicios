/*
    Alumno: Ángel Eliezer Cruz Aguilar
    No. Control: 14400928
    Horario: 08:00 am - 11:00 am

    Desafío No.1
    Descripción: Este desafío requiere que devuelvas la palabra más larga en una oración. 
*/

function PalabraMasLarga(palabra){
    var arreglo = palabra.match(/[a-z0-9]+/gi);
    var ordenar = arreglo.sort(function(a, b) {
        return b.length - a.length;
    });
    return ordenar[0];
}//PalabraMasLarga

console.log("Palabra más larga: "+PalabraMasLarga("Cruz Aguilar Ángel Eliezer"));