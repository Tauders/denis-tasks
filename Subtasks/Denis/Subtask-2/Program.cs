﻿using System;
using System.Collections.Generic;

namespace Subtask_2
{
    
    class Program
    {
        public static int GetResult (string action, List<int> valuesOfNumbers)
        {
            int result = valuesOfNumbers[0];
            switch (action) 
            {
                case "+":
                    for (int i = 1; i < valuesOfNumbers.Count; i++)
                    {
                        result += valuesOfNumbers[i];
                    }
                    break;

                case "-":
                    for (int i = 1; i < valuesOfNumbers.Count; i++)
                    {
                        result -= valuesOfNumbers[i];
                    }
                    break;

                case "*":
                    for (int i = 1; i < valuesOfNumbers.Count; i++)
                    {
                        result *= valuesOfNumbers[i];
                    }
                    break;

                case "/":
                    for (int i = 1; i < valuesOfNumbers.Count; i++)
                    {
                        if (valuesOfNumbers[i] == 0)
                        {
                            Console.WriteLine("Делить на 0 нельзя");
                        }
                        else
                        {
                            result /= valuesOfNumbers[i];
                        }
                    }
                    break;

                default:
                    Console.WriteLine("Введено некорректное действие");
                    break;
            }
            return result;
        }


        static void Main(string[] args)
        {
            int numbersIndex = 0;
            int tempIndex = 0;
            Random rnd = new Random();
            int n = rnd.Next(3, 7);
            int[] numbers = new int[n];
            
            
            Console.WriteLine($"Программа сгенерировала список из {n} чисел");

            while (numbersIndex < numbers.Length)
            {
                string inputNumber = Console.ReadLine();
                string[] tempNumbers = inputNumber.Split(' ');
                int number = 0;
                if(String.IsNullOrWhiteSpace(inputNumber))
                {
                    Console.WriteLine("Вы ничего не ввели");
                }
                else if (Int32.TryParse(tempNumbers[tempIndex], out number))
                {
                    for (int i = 0; tempIndex < tempNumbers.Length; tempIndex++, numbersIndex++, i++)
                    {
                        numbers[numbersIndex] = Convert.ToInt32(tempNumbers[tempIndex]);
                    }
                }
                else
                {
                    Console.WriteLine("Некорректный ввод");
                }
            }

            Console.Write($"Числа введены, выберите доступные: ");
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write(numbers[i] + " ");
            }

            Console.WriteLine();
            string input = null;
            List<int> valuesOfNumbers = new List<int>();
            while (input != "X")
            {
                input = Console.ReadLine();
                int index = 0;
                if (String.IsNullOrWhiteSpace(input))
                {
                    Console.WriteLine("Вы ничего не ввели");
                }
                else
                {
                    if (input == "X")
                    {
                        Console.WriteLine("Числа выбраны, введите необходимое действие: +, -, *, /");
                    }
                    else if (((Int32.TryParse(input, out index)) && (index < numbers.Length)))
                    {
                        Console.WriteLine($"Выбранное вами число: {numbers[index]}");
                        valuesOfNumbers.Add(numbers[index]);
                    }
                    else
                    {
                        Console.WriteLine("Некорректный ввод");
                    }
                }
            }

            string action = null;
            while (action == null)
            {
                string inputAction = Console.ReadLine();
                if ((inputAction == "+") || (inputAction == "-") || (inputAction == "*") || (inputAction == "/"))
                {
                    action = inputAction;
                    int result = GetResult(action, valuesOfNumbers);
                    Console.WriteLine($"Действие выбрано, результат - {result}");
                }
                else
                {
                    Console.WriteLine("Данное действие не поддерживается");
                }
            }
            Console.WriteLine("Завершение работы");
            Console.ReadKey();
        }
    }
}