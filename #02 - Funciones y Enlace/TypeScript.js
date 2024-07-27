// FUNCIONES BASICAS
// Funcion sin parametros
function obtenerHoraConTS() {
    var time = new Date();
    console.log(time.getFullYear());
    console.log(time.toLocaleTimeString());
    return time.getFullYear();
}
obtenerHoraConTS();
// Funcion con parametros
function obtenerHoraMinutosConTS(hora, minutos) {
    var time = new Date();
    time.setHours(hora);
    time.setMinutes(minutos);
    console.log(time.toLocaleTimeString());
}
obtenerHoraMinutosConTS(10, 30);
// Funciones dentro de funciones
function sumaTS(numero1, numero2) {
    var numero3 = numero1 + numero2;
    function multiplicarTS() {
        var resultado = numero3 * 2;
        console.log(resultado);
    }
    multiplicarTS();
}
sumaTS(5, 10);
// Funciones ejemplo ya creado
function sumar(valor1, valor2, valor3) {
    if (valor3) {
        console.log(valor1 + valor2 + valor3);
        return valor1 + valor2 + valor3;
    }
    else {
        console.log(valor1 + valor2);
        return valor1 + valor2;
    }
}
sumar(5, 4, 3);
//Funciones variable LOCAL, variable GLOBAL
var variableGlobal = "Hola soy una variable global";
function funcionDeVariables() {
    var variableLocal = "Hola soy variable local";
    console.log(variableLocal);
    console.log(variableGlobal);
    return variableGlobal + variableLocal;
}
funcionDeVariables();
// DIFICULTAD EXTRA
// Funcion que recibe dos parametros de tipo string y devuelve un number
function deStringANumberTS(parametro1, parametro2) {
    var paramStringToNumber1 = parseInt(parametro1);
    var paramStringToNumber2 = parseInt(parametro2);
    var resultadoTS = paramStringToNumber1 - paramStringToNumber2;
    console.log(resultadoTS);
    return resultadoTS;
}
deStringANumberTS('123', '456');
// Funcion que imprime multiplos de 3 y de 5
function imprmirMultiplosTS() {
    for (var i = 0; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("".concat(i, " Este numero es multiplo de 3 y 5"));
        }
        else if (i % 3 === 0) {
            console.log("".concat(i, " Este numero es multiplo de 3"));
        }
        else if (i % 5 === 0) {
            console.log("".concat(i, " Este numero es multiplo de 5"));
        }
        else {
            console.log(i);
        }
    }
}
imprmirMultiplosTS();
