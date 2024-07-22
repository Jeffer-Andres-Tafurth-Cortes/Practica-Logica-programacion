<?php 
  // OPERADORES DE ASIGNACION
  $estaEsUnaVariable = 'contenido de la variable';

  // Operador de asignacion con suma
  $variable1 = 5;
  $variable1 += 5;
  echo $variable1;

  // Operador de asignacion con resta
  $variable2 = 10;
  $variable2 -= 5;
  echo $variable2;

  // Operador de asignacion con multiplicacion
  $variable3 = 2;
  $variable3 *= 5;
  echo $variable3;

  // Operador de asignacion con division
  $variable4 = 10;
  $variable4 /= 2;
  echo $variable4;


  // OPERADORES ARITMETICOS
  // Operador de suma
  $primerA = 26;
  $segundoA = 14;
  $sumaA = $primerA + $segundoA;
  echo $sumaA; 

  // Operador de resta
  $primerB = 40;
  $segundoB = 26;
  $restaB = $primerB - $segundoB;
  echo $restaB; 

  // Operador de multiplicacion
  $primerC = 10;
  $segundoC = 5;
  $multiplicacionC = $primerC * $segundoC;
  echo $multiplicacionC; 
  
  // Operador de division
  $primerD = 20;
  $segundoD = 4;
  $divisionD = $primerD / $segundoD;
  echo $divisionD; 
  
  // Operador de modulo (resto de la división)
  $primerE = 20;
  $segundoE = 3;
  $moduloE = $primerE % $segundoE;
  echo $moduloE; 
  
  // Operador de exponente
  $base = 2;
  $exponente = 3;
  $exponenteado = pow($base, $exponente);    // Se usa el metodp 'pow()' para usar exponente
  echo $exponenteado; 
  
  // Operador de concatenacion
  $primerF = 'Hola ';
  $segundoF = 'mundo';
  $concatenacionF = $primerF. $segundoF;    // La concatenacion es con un punto '.'



  // OPERADORES DE COMPARACION
  // Operador de igualdad (igual a)
  $primerComparacionA = 5;
  $primerComparacionB = 5;
  $comparacionAB = $primerComparacionA == $primerComparacionB ? true : false;
  echo $comparacionAB;

  // Operador de igualdad estricta (igual a y el tipo de dato también es igual)
  $comparacionCD = 15 == '15' ? true : false;

  // Operador de desigualdad (diferente de)
  $primerComparacionE = 10;
  $primerComparacionF = 5;
  $comparacionEF = $primerComparacionE != $primerComparacionF ? true : false;
  echo $comparacionEF;

  // Operador de desigualdad estricta (diferente de y el tipo de dato también es diferente)
  $comparacionGH = 'hola' !== 'Hola'? true : false;

  // Operador de 'mayor que'
  $primerComparacionI = 15;
  $primerComparacionJ = 10;
  $comparacionIJ = $primerComparacionI > $primerComparacionJ ? true : false;
  echo $comparacionIJ;

  // Operador de 'igual o mayor que'
  $comparacionKL = 20 >= 30 ? true : false;
  echo $comparacionKL;

  // Operador de 'menor que'
  $primerComparacionL = 5;
  $segundaComparacionM = 10;
  $comparacionLM = $primerComparacionL < $segundaComparacionM ? true : false;
  echo $comparacionLM;

  // Operador de 'igual o menor que'
  $comparacionNO = 20 <= 30 ? true : false;
  echo $comparacionNO;



  // OPERADORES LÓGICOS
  // Operador 'AND' (&&)
  $variableAND = 15 < 20 && 20 < 30 ? '15 es menor que 20 y 20 es menor que 30' : 'Esta mal la operacion'; 
  echo $variableAND;

  // Operador 'OR' (||)
  $variableOR = 20 == 20 || 'hola' == 'hola' ? 'Todos los valores son iguales' : 'Algo anda mal'; 
  echo $variableOR;

  // Operador 'NOT' (!)
  $variableNOT = (20 == '20') ? !true : !false; 
  echo $variableNOT;
  



  // ESTRUCTURAS DE CONTROL
  // Condicionales
  $variable1A = 'Saludos ';
  $variable2A = 'saludos ';
  $variable3A = $variable1A == $variable2A ? 'Saludos a todos' : 'saludos a nadie';
  echo $variable3A;

  // Switch
  $diaDeLaSemana = 3;
  switch($diaDeLaSemana){
    case 1:
      echo 'Lunes';
      break;
    case 2:
      echo 'Martes';
      break;
    case 3:
      echo 'Miercoles';
      break;
    case 4:
      echo 'Jueves';
      break;
    case 5:
      echo 'Viernes';
      break;
    case 6:
      echo 'Sabado';
      break;
    case 7:
      echo 'Domingo';
      break;
    default:
    echo 'Dia invalido';
  }

  // For
  for ($i = 0 ; $i <= 5; $i++) { 
    echo $i;
  }

  // For Each
  $colores = array('rojo', 'verde', 'azul', 'amarillo');
  foreach ($colores as $color) {
    echo $color;
  }

  // While
  $contador = 0;
  while($contador <= 5){
    echo $contador;
    $contador++;
  }

  // Do While
  $contadorDoWhile = 0;
  do {
    echo $contadorDoWhile;
    $contadorDoWhile++;
  } while($contadorDoWhile <= 5);



  // DIFICULTAD EXTRA
  for($extra = 10; $extra <= 55; $extra){
    if($extra % 2 === 0 && $extra !== 16 && $extra % 3 !== 0){
      echo $extra;
    }
  }

?>