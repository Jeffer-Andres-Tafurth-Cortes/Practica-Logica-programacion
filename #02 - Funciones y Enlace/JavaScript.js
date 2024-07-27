// FUNCIONES BASICAS

// Funcion sin parametros
function obtenerHoraLocal(){
  const time = new Date()
  console.log(time.toLocaleTimeString())
  console.log(time.getFullYear());
}
obtenerHoraLocal()

// Funcion con parametros
function obtenerHoraYMinutos(hora, minutos){
  const time = new Date()
  time.setHours(hora)
  time.setMinutes(minutos)
  console.log(time.toLocaleTimeString())
}
obtenerHoraYMinutos(10, 30)


// Funciones dentro de funciones
function suma(numero1, numero2){
  
  let numero3 = numero1 + numero2

  function multiplicacion(){
    let resultado = numero3 * 2
    console.log(resultado)
  }
  multiplicacion()

}
suma(10, 20)


// Funciones ejemplo ya creado
function square(numeroAlcuadrado){
  console.log(numeroAlcuadrado * numeroAlcuadrado)
}
square(10)


//Funciones variable LOCAL, variable GLOBAL
let variableGlobal = "Hola soy una variable global"

function funcionDeVariables(){
  let variableLocal = "Hola soy variable local"
  console.log(variableLocal)
  console.log(variableGlobal)
}
funcionDeVariables()



//  DIFICULTAD EXTRA

// Funcion recibe dos parametros en forma de cadena de textoy retorna un numero
function ejercicioExtra1(parametroTexto1, parametroTexto2){
  let textoANumero1 = parseInt(parametroTexto1)
  let textoANumero2 = parseInt(parametroTexto2)
  let resultadoTextoANumero = textoANumero1 + textoANumero2
  console.log(resultadoTextoANumero);
  return resultadoTextoANumero
}
ejercicioExtra1('250', '300')


// Funcion multiplos de 3 y de 5
function ejercicioExtra2(){
  for (let i = 0; i < 100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
      console.log(`${i} es multiplo de 3 y de 5`);
    } else if (i % 3 === 0){
      console.log(`${i} es multiplo solo de 3`);
    } else if (i % 5 === 0){
      console.log(`${i} es multiplo solo de 5`);
    } else {
      console.log(i);
    }
  }
}
ejercicioExtra2()

