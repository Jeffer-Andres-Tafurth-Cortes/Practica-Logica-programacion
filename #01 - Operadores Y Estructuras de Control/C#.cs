using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      // OPERADORES DE ASIGNACION 
      string asiSeDefineUnaVariable = 'Contenido de la variable';
      int variableNumerica = 5;

      // Operador de asignacion con suma
      int numeroA = 10;
      numeroA += 5; 
      Console.WriteLine(numeroA)

      // Operador de asignacion con resta
      int numeroB = 20;
      numeroB -= 5;
      Console.WriteLine(numeroB);

      // Operador de asignacion con multiplicacion
      int numeroC = 15;
      numeroC *= 5
      Console.WriteLine(numeroC);

      // Operador de asignacion con division
      int numeroD = 100
      numeroD /= 5;
      Console.WriteLine(numeroD);



      // OPERADORES ARITMETICOS
      // Operador de suma
      int numero1 = 10;
      int numero2 = 15;
      int numeroSuma = numero1 + numero2;
      Console.WriteLine(numeroSuma);

      // Operador resta
      int numero3 = 50;
      int numero4 = 25;
      Console.WriteLine(numero3 - numero4);

      // Operador de multiplicacion
      int numero5 = 55;
      int numero6 = 2
      Console.WriteLine(numero5 * numero6);

      // Operador de division
      int numero7 = 20
      int numero8 = 4
      Console.WriteLine(numero7 / numero8)

      // Operador de módulo (resto de la división)
      int mm = 10
      int nn = 3
      int oo = mm % nn
      console.WriteLine(oo);

      // Operador de concatenacion
      string palabra11 = 'Hola '
      string palabra22 = 'Mundo!'
      console.WriteLine(palabra11 + palabra22);



      // OPERADORES DE COMPARACION
      // Operador de igualdad (igual a)
      int x = 10;
      int y = 10;
      Console.WriteLine(x == y); // True

      
      // Operador de desigualdad (diferente de)
      int xx = 5;
      int yy = 10;
      Console.WriteLine(xx != yy); // True

      // Operador de 'mayor que'
      int aaa = 10;
      int bbb = 10
      Console.WriteLine(aaa > bbb); // False

      // Operador de 'igual o mayor que'
      int ccc = 20
      int ddd = 20
      Console.WriteLine(ccc >= ddd); // True

      // Operador de 'menor que'
      int eee = 15
      int fff = 10
      Console.WriteLine(eee < fff); // True

      // Operador de 'igual o menor que'
      int ggg = 10
      int hhh = 10
      Console.WriteLine(ggg <= hhh); // True



      // OPERADORES LÓGICOS
      // Operador 'AND' (&&)
      int x = 10
      Console.WriteLine(x < 5 && x < 10)

      // Operador 'OR' (||)
      int y = 20
      Console.WriteLine(y > 30 || y < 25)

      // Operador 'NOT' (!)
      int z = 5
      Console.WriteLine(!(z > 3 && z < 10))




      // ESTRUCTURAS DE CONTROL
      // Condicionales
      int time = 20
      string result = (time < 18) ? 'Buen dia' : 'Buena noche'
      Console.WriteLine(result)

      // Switch
      int diaDeLaSemana = 2
      switch (switch_on)
      {
        case 1:
          Console.WriteLine("Lunes");
          break;
        case 2:
          Console.WriteLine("martes")
          break;
        case 3: 
          Console.WriteLine("miercoles")
          break;
        case 4:
          Console.WriteLine("jueves")
          break;
        case 5:
          Console.WriteLine("viernes")
          break;
        case 6:
          Console.WriteLine("sabado")
          break;
        case 7:
          Console.WriteLine("domingo")
          break;
        default:
          Console.WriteLine("Dia invalido")
          break;
      }

      // For
      for (int i = 0; i <= 5; i++)
      {
        Console.WriteLine(i)
      }

      // For Each
      string[] cars = {'Volvo', 'Merceder', 'Ferrari', 'BMW'}
      foreach (var car in cars)
      {
        Console.WriteLine(car)
      }

      // While
      int j = 0;
      while (j < 5)
      {
        Console.WriteLine(j)
        j++
      }

      // Do While
      int k = 0;
      do
      {
        Console.WriteLine(k)
        k++
      } while (k < 5)



      // DIFICULTAD EXTRA
      for(int extra = 10; extra <= 55; extra++)
      {
        if (extra % 2 == 0)
        {
          if(extra != 16 && extra % 3 != 0)
          {
            Console.WriteLine(extra)
          }
        } 
      }


    }
  }
}