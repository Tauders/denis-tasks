﻿using System;
using System.Collections.Generic;

namespace Subtask_4
{
    class Program
    {
        public static void SortingValues(string method, KeyValuePair<string, List<string>> groups)
        {
            switch (method) 
            {
                case "asc":
                    groups.Value.Sort();
                    break;
                case "desc":
                    groups.Value.Sort();
                    groups.Value.Reverse();
                    break;
                default:
                    break;
            }
        }

        static void Main(string[] args)
        {
            Dictionary<string, List<string>> groups = new Dictionary<string, List<string>>();
            bool isExit = false;
            Console.WriteLine("Введите данные в формате \"имя группа\", имя и группа  - одно слово ");
            while (!isExit)
            {
                string input = Console.ReadLine();
                if (string.IsNullOrWhiteSpace(input))
                {
                    Console.WriteLine("Вы ничего не ввели");
                }
                else
                {
                    if (input.ToUpper() == "X")
                    {
                        isExit = true;
                    }
                    else
                    {
                        string name = null;
                        string key = null;
                        string[] temp = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                        for (int i = 0; i < temp.Length; i++)
                        {
                            name = temp[0];
                            if (temp.Length > 1)
                            {
                                key = temp[1];
                            }
                            
                        }
                        if (string.IsNullOrWhiteSpace(key))
                        {
                            Console.WriteLine("Вы не ввели ключ");
                        }
                        else
                        {
                            if (!groups.ContainsKey(key))
                            {
                                groups.Add(key, new List<string>());
                            }
                            groups[key].Add(name);
                        }
                    }
                }  
            }
            Console.WriteLine("Выбирите метод сортировки");
            string method = Console.ReadLine();
            foreach (KeyValuePair<string, List<string>> keyValuePair in groups)
            {
                Console.WriteLine($"Группа {keyValuePair.Key}");
                SortingValues(method, keyValuePair);
                foreach (string value in keyValuePair.Value)
                {
                    Console.WriteLine(value);
                }
            }
            Console.ReadKey();
        }
    }
}