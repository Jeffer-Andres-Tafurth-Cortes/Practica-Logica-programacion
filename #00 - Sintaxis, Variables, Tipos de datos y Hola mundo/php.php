<?php 

  // NOTA: RECORDAR QUE EN PHP SE DEBE TERMINAR CADA SENTENCIA DE CODIGO CON ;

  // https://www.php.net/manual/es/intro-whatis.php

  // Este es un comentario sencillo en PHP
  # Este tambien es un comentario sencillo en PHP

  /*
    Este es comentario doble o de
    multilineas en PHP
  */

  $nombreVariable = 'Esta es una variable'; // Para definir una variable en PHP se debe de usar el sign $ seguido del nombre de la variable

  define('variableConstante', 'Esta es una constante');
  echo variableConstante; // las constantes se definen usando el metodo 'define()'


  $estoEsUnString = 'Esta variable un string'; // variable tipo string

  $estoEsUnNumero = 123; // variable tipo numero

  $estoEsUnInt = 678; // variable tipo Integer

  $estoEsUnFloat = 456.789; // variable tipo float (se puede usar punto para separar decimales)
  
  $estoEsUnBooleano = true | false; // variable tipo booleano
  
  $estoEsNull = null; // variable tipo null
  
  $estoEsUnArray = array(1, 2, 3, 4, 5); // variable tipo array (se define con el metodo 'array()' )
 

  $lenguajeProgramacion = 'PHP';
  echo 'Hola ' + $lenguajeProgramacion;
?>