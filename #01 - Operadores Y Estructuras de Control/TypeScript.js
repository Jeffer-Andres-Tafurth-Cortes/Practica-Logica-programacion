//  OPERADORES DE ASIGNACION
var variableAsignadaTypeScript = "Esta variable esta usando el igual (operador de asignacion)";
// Operador de asignacion con suma
var variable11 = 10;
variable11 += 5;
console.log(variable11);
// Operado de asignacion con resta
var variable22 = 20;
variable22 -= 5;
console.log(variable22);
// Operador de asignacion con multiplicación
var variable33 = 52;
variable33 *= 2;
console.log(variable33);
// Operador de asignacion con división
var variable44 = 200;
variable44 /= 20;
console.log(variable44);
// OPERADORES ARITMETICOS
// Operador de suma
var aa = 16;
var bb = 20;
var cc = aa + bb;
console.log(cc);
// Operador de resta
var dd = 55;
var ee = 72;
var ff = dd - ee;
console.log(ff);
// Operador de multiplicación
var gg = 25;
var hh = 45;
var ii = gg * hh;
console.log(ii);
// Operador de división
var jj = 240;
var kk = 4;
var ll = jj / kk;
console.log(ll);
// Operador de módulo (resto de la división)
var mm = 10;
var nn = 3;
var oo = mm % nn;
console.log(oo);
// OPERADORES DE COMPARACION
// Operador de igualdad (igual a)
var numberA = 5;
var numberB = 5;
numberA === numberB ? console.log(true) : console.log(false);
// Operador de igualdad estricta (igual a y el tipo de dato también es igual)
var numberC = 5;
var numberD = 5;
numberC === numberD ? console.log(true) : console.log(false);
// Operador de desigualdad (diferente de)
var stringA = 'texto';
var stringB = 'cadena';
stringA !== stringB ? console.log(true) : console.log(false);
// Operador de desigualdad estricta (diferente de y el tipo de dato también es diferente)
var stringC = '5';
var stringD = '5';
stringC !== stringD ? console.log(true) : console.log(false);
// Operador de 'mayor que'
5 > 3 ? console.log(true) : console.log(false);
// Operador de 'igual o mayor que'
5 >= 5 ? console.log(true) : console.log(false);
// Operador de 'menor que'
3 < 5 ? console.log(true) : console.log(false);
// Operador de 'igual o menor que'
3 <= 3 ? console.log(true) : console.log(false);
// OPERADORES LÓGICOS
// Operador 'AND' (&&)
10 > 5 && 15 > 20 ? console.log(true) : console.log(false);
// Operador 'OR' (||)
10 > 5 || 15 < 20 ? console.log(true) : console.log(false);
// Operador 'NOT' (!)
10 > 5 ? console.log(!true) : console.log(!false);
// ESTRUCTURAS DE CONTROL
// Condicionales
var nombre11 = 'andres';
var nombre22 = 'camilo';
nombre11 == nombre22 ? console.log('los nombres son iguales') : console.log('los nombres son distintos');
// Switch
var dia_Semana = 5;
switch (dia_Semana) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Día inválido');
}
// For
for (var i = 0; i <= 5; i++) {
    console.log(i);
}
// For In (es para objetos que tienen propiedades)
var personaObjeto = { nombre: 'Andres', apellido: 'Cortes', edad: 21 };
for (var propiedadPersona in personaObjeto) {
    console.log(propiedadPersona + ': ' + personaObjeto[propiedadPersona]);
}
// For Of (es para objetor iterables (arrays) )
var numerosArray = [1, 2, 3, 4, 5];
for (var _i = 0, numerosArray_1 = numerosArray; _i < numerosArray_1.length; _i++) {
    var numeroArray = numerosArray_1[_i];
    console.log(numeroArray);
}
// While
var contadorWhile = 10;
while (contadorWhile <= 15) {
    console.log(contadorWhile);
    contadorWhile++;
}
// Do While
var contadorDoWhile = 20;
do {
    console.log(contadorDoWhile);
    contadorDoWhile++;
} while (contadorDoWhile <= 25);
// DIFICULTAD EXTRA
for (var extra = 10; extra <= 55; extra++) {
    if (extra % 2 === 0 && extra !== 16 && extra % 3 !== 0) {
        console.log(extra);
    }
}
