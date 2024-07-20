//  OPERADORES DE ASIGNACION
let variableAsignadaTypeScript: string = "Esta variable esta usando el igual (operador de asignacion)"

// Operador de asignacion con suma
let variable11: number = 10
variable11 += 5
console.log(variable11);

// Operado de asignacion con resta
let variable22: number = 20
variable22 -= 5
console.log(variable22);

// Operador de asignacion con multiplicación
let variable33: number = 52
variable33 *= 2
console.log(variable33);

// Operador de asignacion con división
let variable44: number = 200
variable44 /= 20
console.log(variable44);



// OPERADORES ARITMETICOS
// Operador de suma
let aa: number = 16
let bb: number = 20
let cc: number = aa + bb
console.log(cc);

// Operador de resta
let dd: number = 55
let ee: number = 72
let ff: number = dd - ee
console.log(ff);

// Operador de multiplicación
let gg: number = 25
let hh: number = 45
let ii: number = gg * hh
console.log(ii);

// Operador de división
let jj: number = 240
let kk: number = 4
let ll: number = jj / kk
console.log(ll);

// Operador de módulo (resto de la división)
let mm: number = 10
let nn: number = 3
let oo: number = mm % nn
console.log(oo);



// OPERADORES DE COMPARACION
// Operador de igualdad (igual a)
let numberA: number = 5
let numberB: number = 5
numberA === numberB ? console.log(true) : console.log(false);

// Operador de igualdad estricta (igual a y el tipo de dato también es igual)
let numberC: number = 5
let numberD: number = 5
numberC === numberD ? console.log(true) : console.log(false)

// Operador de desigualdad (diferente de)
let stringA: string = 'texto'
let stringB: string = 'cadena' 
stringA !== stringB ?console.log(true) : console.log(false)

// Operador de desigualdad estricta (diferente de y el tipo de dato también es diferente)
let stringC: string = '5'
let stringD: string = '5'
stringC !== stringD ? console.log(true) : console.log(false)

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
let nombre11 = 'andres'
let nombre22 = 'camilo'
nombre11 == nombre22 ? console.log('los nombres son iguales') : console.log('los nombres son distintos');

// Switch
let dia_Semana: number = 5
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
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// For In (es para objetos que tienen propiedades)
let personaObjeto = { nombre: 'Andres', apellido: 'Cortes', edad: 21 }
for (let propiedadPersona in personaObjeto) {
  console.log(propiedadPersona + ': '+ personaObjeto[propiedadPersona]);
}

// For Of (es para objetor iterables (arrays) )
let numerosArray: number[] = [1, 2, 3, 4, 5]
for (let numeroArray of numerosArray) {
  console.log(numeroArray);
}

// While
let contadorWhile: number = 10;
while (contadorWhile <= 15) {
  console.log(contadorWhile);
  contadorWhile++;
}

// Do While
let contadorDoWhile: number = 20;
do {
  console.log(contadorDoWhile);
  contadorDoWhile++;
} while (contadorDoWhile <= 25);



// DIFICULTAD EXTRA
for (let extra = 10; extra <= 55; extra++) {
  if (extra % 2 === 0 && extra !== 16 && extra % 3 !== 0) {
    console.log(extra);
  }
}
