using System;

namespace Calculator_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Добро пожаловать в программу Калькулятор.");
            Console.WriteLine("Для продолжения нажмите Enter");
            Console.WriteLine("Для выхода Нажмите 'G'");

            while (Console.ReadKey().Key != ConsoleKey.G)
            {
                Console.Clear();

                double firstValue, secondValue, result;

                try
                {
                    Console.WriteLine("Введите первое число, затем нажмите ENTER");
                    firstValue = double.Parse(Console.ReadLine());
                    Console.WriteLine("Введите второе число, затем нажмите ENTER");
                    secondValue = double.Parse(Console.ReadLine());
                }
                catch (Exception)
                {
                    Console.WriteLine("Вы ввели недопустимый символ, попробуйте еще.");
                    Console.WriteLine("Для продолжения нажмите ENTER");
                    Console.ReadLine();
                    continue;
                }

                Console.WriteLine("Введите действие '+', '-', '*', '/', затем нажмите ENTER");

                string action;

                action = Console.ReadLine();
                
                if (action == "+")
                {
                    result = firstValue + secondValue;
                    Console.WriteLine($"Сумма = {result}");
                }
                else if (action == "-")
                {
                    result = firstValue - secondValue;
                    Console.WriteLine($"Разность = {result}");
                }
                else if (action == "*")
                {
                    result = firstValue * secondValue;
                    Console.WriteLine($"Произведение = {result}");
                }
                else if (action == "/")
                {
                    if (secondValue == 0)
                    {
                        Console.WriteLine("На 0 делить нельзя."); 
                    }
                    else
                    {
                        result = firstValue / secondValue;
                        Console.WriteLine($"Частное = {result}"); 
                    }
                }
                else
                {
                    Console.WriteLine("Вы ввели недопустимое действие, попробуйте еще.");  
                }

                Console.WriteLine("Для продолжения нажмите ENTER. Либо нажмите 'G' для выхода из программы");
            }
        } 
    }
}
