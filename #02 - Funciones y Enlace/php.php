<?php 
// FUNCIONES BASICAS

// Funcion sin parametros
function myMessage(){
  echo 'Hello World! ';
}
myMessage();


// Funcion con parametros
function miNombre($name, $age){
  echo 'Hola, mi nombre es ' . $name;
  echo ' y tengo ' . $age . ' años';
}
miNombre('Jeffer', 21);


// Funciones dentro de funciones
function suma($numero1, $numero2){

  $numero3 = $numero1 + $numero2;

  // En php para poder usar una funcion dentro de otra funcion debemos de usar una variable
  // como parametro si es necesario como en este caso
  function multiplicacion($numero3){
    $resultado = $numero3 * 2;
    echo ' La multiplicacion es: '. $resultado;
  }
  multiplicacion($numero3);
}
suma(5, 7);


// Funciones ejemplo ya creado
function sumMyNumbers(...$x){
  $n = 0;
  $len = count($x);

  for ($i = 0; $i < $len; $i++) { 
    $n += $x[$i];
  }
  return $n;
}
$a = sumMyNumbers(5, 2, 6, 2, 7, 7);
echo ' La suma de los numeros es: '. $a;

//Funciones variable LOCAL, variable GLOBAL

$globalVariable = ' Soy una variable global';

function miFuncion(){
  global $globalVariable;
  $variableLocal = ' Soy una variable local';
  echo $globalVariable;
  echo $variableLocal;
}
miFuncion();




// DIFICULTAD EXTRA
function ejercicioExtra($parametro1, $parametro2){
  $textoANumero1 = (int) $parametro1;
  $textoANumero2 = (int) $parametro2;

  $resultadoTextoANumero = $textoANumero1 + $textoANumero2;
  echo $resultadoTextoANumero;
}
ejercicioExtra('50', '60');

// Funcion multiplos de 3 y de 5
function ejercicioExtra2(){
  for ($i = 0; $i < 100; $i++) { 
    if ($i % 3 === 0 && $i % 5 === 0) {
      echo $i . 'Este numero es mutiplo de 3 y 5';
    } elseif ($i % 3 === 0) {
      echo $i . 'Este numero es multiplo de 3';
    } elseif ($i % 5 === 0) {
      echo $i . 'Este numero es multiplo de 5';
    } else{
      echo $i;
    }
  }
}
ejercicioExtra2();



?>