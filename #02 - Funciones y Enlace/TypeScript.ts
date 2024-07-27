// FUNCIONES BASICAS

// Funcion sin parametros
function obtenerHoraConTS(): number {
  const time = new Date()
  console.log(time.getFullYear())
  console.log(time.toLocaleTimeString())
  return time.getFullYear()
}
obtenerHoraConTS()

// Funcion con parametros
function obtenerHoraMinutosConTS(hora: number, minutos: number){
  const time = new Date()
  time.setHours(hora)
  time.setMinutes(minutos)
  console.log(time.toLocaleTimeString())
}
obtenerHoraMinutosConTS(10, 30)

// Funciones dentro de funciones
function sumaTS(numero1: number, numero2: number){
  let numero3 : number = numero1 + numero2

  function multiplicarTS(){
    let resultado: number = numero3 * 2
    console.log(resultado);
  }
  multiplicarTS()
}
sumaTS(5, 10)


// Funciones ejemplo ya creado
function sumar(valor1: number, valor2: number, valor3?: number): number{
  if(valor3){
    console.log(valor1 + valor2 +valor3);
    return valor1 + valor2 + valor3
  } else {
    console.log(valor1 + valor2);
    return valor1 + valor2
  }
}
sumar(5, 4, 3)


//Funciones variable LOCAL, variable GLOBAL
let variableGlobal: string = "Hola soy una variable global"

function funcionDeVariables(): string{
  let variableLocal: string = "Hola soy variable local"
  console.log(variableLocal)
  console.log(variableGlobal)
  return variableGlobal + variableLocal
}
funcionDeVariables()



// DIFICULTAD EXTRA

// Funcion que recibe dos parametros de tipo string y devuelve un number
function deStringANumberTS(parametro1: string, parametro2: string): number{

  let paramStringToNumber1 : number = parseInt(parametro1)
  let paramStringToNumber2 : number = parseInt(parametro2)

  let resultadoTS: number = paramStringToNumber1 - paramStringToNumber2
  console.log(resultadoTS);
  
  return resultadoTS
}
deStringANumberTS('123', '456')


// Funcion que imprime multiplos de 3 y de 5
function imprmirMultiplosTS(){

  for(let i = 0; i < 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log(`${i} Este numero es multiplo de 3 y 5`)
    } else if (i % 3 === 0){
      console.log(`${i} Este numero es multiplo de 3`)
    } else if(i % 5 === 0){
      console.log(`${i} Este numero es multiplo de 5`)
    } else {
      console.log(i)
    }
  }
}
imprmirMultiplosTS()

