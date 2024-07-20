//  OPERADORES DE ASIGNACION
let variableAsignada = 'Esta variable esta usando el igual (operador de asignacion)'

// Operador de asignacion con suma
let variable1 = 10
variable1 += 5
console.log(variable1);

// Operado de asignacion con resta
let variable2 = 20
variable2 -= 5
console.log(variable2);

// Operador de asignacion con multiplicación
let variable3 = 52
variable3 *= 2
console.log(variable3);

// Operador de asignacion con división
let variable4 = 200
variable4 /= 20
console.log(variable4);



// OPERADORES ARITMETICOS
// Operador de suma
let a = 16
let b = 20
let c = a + b
console.log(c);

// Operador de resta
let d = 55
let e = 72
let f = d - e
console.log(f);

// Operador de multiplicación
let g = 25
let h = 45
let i = g * h
console.log(i);

// Operador de división
let j = 240
let k = 4
let l = j / k
console.log(l);

// Operador de módulo (resto de la división)
let m = 10
let n = 3
let o = m % n
console.log(o);



// OPERADORES DE COMPARACION
// Operador de igualdad (igual a)
5 == 5 ? console.log(true) : console.log(false);

// Operador de igualdad estricta (igual a y el tipo de dato también es igual)
5 === '5' ? console.log(true) : console.log(false)

// Operador de desigualdad (diferente de)
'texto' != 'cadena' ?console.log(true) : console.log(false)

// Operador de desigualdad estricta (diferente de y el tipo de dato también es diferente)
'5' !== 5 ? console.log(true) : console.log(false)

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
let nombre1 = 'andres'
let nombre2 = 'camilo'
nombre1 == nombre2 ? console.log('los nombres son iguales') : console.log('los nombres son distintos');

// Switch
let diaSemana = 5
switch (diaSemana) {
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
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// For In (es para objetos que tienen propiedades)
let persona = { nombre: 'Andres', apellido: 'Cortes', edad: 21 }
for (let propiedad in persona) {
  console.log(propiedad + ': '+ persona[propiedad]);
}

// For Of (es para objetor iterables (arrays) )
let numeros = [1, 2, 3, 4, 5]
for (let numero of numeros) {
  console.log(numero);
}

// While
let contador = 10;
while (contador <= 15) {
  console.log(contador);
  contador++;
}

// Do While
let contador2 = 20;
do {
  console.log(contador2);
  contador2++;
} while (contador2 <= 25);



// DIFICULTAD EXTRA
for (let extra = 10; extra <= 55; extra++) {
  if (extra % 2 === 0 && extra !== 16 && extra % 3 !== 0) {
    console.log(extra);
  }
}
