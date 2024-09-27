using System;
using System.Collections.Generic;

namespace Subtask_6
{
    internal class Program
    {
        public static AnswerOptions ChoiceAnswer(string choiceInput)
        {
            AnswerOptions answerOption = AnswerOptions.Undefined;
            if (choiceInput == "y" || choiceInput == "Y")
            {
                answerOption = AnswerOptions.Yes;
            }
            else if (choiceInput == "n" || choiceInput == "N")
            {
                answerOption = AnswerOptions.No;
            }
            return answerOption;
        }

        static void Main(string[] args)
        {
            List<string> names = new List<string>();
            bool isInputTermination = false;
            Console.WriteLine("Введите строки");
            while (isInputTermination != true)
            {
                string input = Console.ReadLine();
                if (string.IsNullOrWhiteSpace(input))
                {
                    Console.WriteLine("Вы ничего не ввели");
                }
                else
                {
                    if (!string.Equals(input, "x", StringComparison.InvariantCultureIgnoreCase))
                    {
                        names.Add(input);
                    }
                    else
                    {
                        isInputTermination = true;
                    }
                }
            }

            AnswerOptions choice = AnswerOptions.Undefined;
            while (choice != AnswerOptions.No)
            {
                List<string> copyNames = new List<string>(names);
                Console.WriteLine("Строки получены, введите количество групп");
                Dictionary<int, List<string>> groups = new Dictionary<int, List<string>>();
                bool isDigit = false;
                while (isDigit != true)
                {
                    string inputNumber = Console.ReadLine();
                    if (int.TryParse(inputNumber, out int number))
                    {
                        if (number > copyNames.Count)
                        {
                            Console.WriteLine("Вы указали некорректное число. Повторите ввод");
                        }
                        else
                        {
                            int group = 1;
                            for (; group <= number; group++)
                            {
                                groups.Add(group, new List<string>());
                            }

                            Random random = new Random();
                            List<int> numbers = new List<int>();
                            for (int i = 0; i < number; i++)
                            {
                                numbers.Add(i + 1);
                            }

                            while (copyNames.Count != 0)
                            {
                                List<int> copyNumbers = new List<int>(numbers);
                                while (copyNumbers.Count != 0)
                                {
                                    int randomIndex = random.Next(copyNumbers.Count);
                                    group = copyNumbers[randomIndex];
                                    copyNumbers.RemoveAt(randomIndex);
                                    int test = random.Next(copyNames.Count);    
                                    if (copyNames.Count != 0)
                                    {
                                        groups[group].Add(copyNames[test]);
                                        copyNames.RemoveAt(test);
                                    }
                                }
                            }
                            isDigit = true;
                        }
                    }
                    else
                    {
                        Console.WriteLine("Ошибка ввода. Повторите ввод");
                    }
                }
                
                foreach (KeyValuePair<int, List<string>> group in groups)
                {
                    Console.WriteLine($"Группа {group.Key}");
                    foreach (string name in group.Value)
                    {
                        Console.WriteLine(name);
                    }
                }
                Console.WriteLine("Ещё раз? y/n");
                bool isChoice = false;
                while (isChoice != true)
                {
                    string choiceInput = Console.ReadLine();
                    choice = ChoiceAnswer(choiceInput);
                    if (choice == AnswerOptions.Undefined)
                    {
                        Console.WriteLine("Ошибка ввода. Повторите ввод");
                    }
                    else
                    {
                        isChoice = true;
                    }
                }
            }
            Console.WriteLine("Завершение программы");
            Console.ReadKey();
        }
    }
}