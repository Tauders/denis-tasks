using System;

namespace Summator
{
    class Program
    {
        static void Main(string[] args)
        {
            double a;
            double b;
            try
            {
                Console.WriteLine("Введите пару чисел для их сложения");
                a = Convert.ToDouble(Console.ReadLine());
                b = Convert.ToDouble(Console.ReadLine());
                double total = a + b;
                Console.WriteLine($"Сумма {a} и {b} равна {total}.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Введены некорректные символы, пожалуйста попробуйте ещё раз используя числовые значения. Полученная ошибка: {ex.Message}");
            }
        }
    }
}
