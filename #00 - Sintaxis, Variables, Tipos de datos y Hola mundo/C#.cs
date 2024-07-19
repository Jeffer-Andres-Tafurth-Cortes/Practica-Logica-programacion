//  https://learn.microsoft.com/en-us/dotnet/csharp/

// Esto es un comentario sencillo en lenguaje C#

/*
  Esto es un comentario doble o
  multilinea en lenguaje C#
*/

// NOTA: RECORDAD QUE PARA USAR C# SE DEBE DE IMPLEMENTAR EL ENTORNO PARA PROGRAMAR

using System;

namespace HelloWorld
{
  class Program
  {   
    static void Main(string[] args)
    {
      string nombreVariable = 'Esto es una varible en C#'     // Variable en C# ' tipo de dato + nombre variable = valor '

      const int estoEsUnaConstante = 123    // Constante en C# ' const + tipo de dato + nombre variable = valor '
    

      string estoEsUnString = 'Variable tipo string'    // Esta es una variable tipo string

      int estoEsunEntero = 'Variable tipo entero'     // Esto es una variable tipo entero

      char estoEsUnChar = 'A'     // Esto es una varibale tipo char ' almacena un solo caracter entre comillas '

      bool estoEsUnBooleano = true | false    // Esto es una variable tipo boolean


      string lenguajeProgramacion = 'C#'
      Console.WriteLine($"Hola {lenguajeProgramacion}");
    }
  }
}