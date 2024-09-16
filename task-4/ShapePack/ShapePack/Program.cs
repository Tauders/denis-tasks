using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using ShapePack;

namespace ShapePacker
{
    class Program
    {
        static void Insert(ref string[] array, string value, int index)
        {
            string[] newArray = new string[array.Length + 1];

            newArray[index] = value;

            for (int i = 0; i < index; i++)
            {
                newArray[i] = array[i];
            }
            for (int i = index; i < array.Length; i++)
            {
                newArray[i + 1] = array[i];
            }
            array = newArray;
        } 
        static void Main(string[] args)
        {
            while (true)
            {
                Console.Clear();

                // Проверка на наличие аргумента
                if (args.Length == 0)
                {
                    Console.WriteLine("Требуется ввести путь до файла с исходными данными фигур");
                    continue;
                }

                string pathToFile = System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "input.txt");


                string[] Shapes = new string[0];

                // Читаю файл -> Разбиваю на строки -> Строки разбиваю на слова
                try
                {
                    string[] readText = File.ReadAllLines(args[0]);
                    
                    var Container = new Container();
                    double containerVolume = Container.Volume();
                    if (containerVolume == 0)
                    {
                        Console.WriteLine("Вы ввели недопустимый символ. Для продолжения нажмите 'Enter'");
                        Console.ReadLine();
                        continue;
                    }
                    
                    foreach (string line in readText)
                    {
                        string[] subString = line.Split(' ');

                        for (int i = 0; i < subString.Length; i++){}

                        double height, radius, sideA, sideB;
                        string name;
                        
                        //Логика с фигурами и контейнером. По итогу имя фигуры добалвляется в массив строк.
                        while (containerVolume >= 0)
                        {
                            if (subString[0] == "Cube")
                            {
                                name = subString[1];
                                height = double.Parse(subString[2]);
                                var Cube = new Cube(height, name);
                                if (Cube.Volume() <= containerVolume)
                                {
                                    containerVolume -= Cube.Volume();
                                    Insert(ref Shapes, name, 0);
                                }
                            }
                            else if (subString[0] == "Sphere")
                            {
                                name = subString[1];
                                radius = double.Parse(subString[2]);
                                var Sphere = new Sphere(radius, name);
                                if (Sphere.Volume() <= containerVolume)
                                {
                                    containerVolume -= Sphere.Volume();
                                    Insert(ref Shapes, name, 0);
                                }
                            }
                            else if (subString[0] == "Pyramid")
                            {
                                name = subString[1];
                                height = double.Parse(subString[2]);
                                sideA = double.Parse(subString[3]);
                                sideB = double.Parse(subString[4]);
                                var Pyramid = new Pyramid(height, sideA, sideB, name);
                                if (Pyramid.Volume() <= containerVolume)
                                {
                                    containerVolume -= Pyramid.Volume();
                                    Insert(ref Shapes, name, 0);
                                }
                            }
                            else if (subString[0] == "Cylinder")
                            {
                                name = subString[1];
                                height = double.Parse(subString[2]);
                                radius = double.Parse(subString[3]);
                                var Cylinder = new Cylinder(radius, height, name);
                                if (Cylinder.Volume() <= containerVolume)
                                {
                                    containerVolume -= Cylinder.Volume();
                                    Insert(ref Shapes, name, 0);
                                }
                            }
                            break;
                        }
                    }
                }
                catch (Exception)
                {
                    Console.WriteLine("Не верно введен путь, проверьте правильность");
                    return;
                }
                int quantiyShapes = Shapes.Length;
                string quantiyShapesString = Convert.ToString(quantiyShapes);

                Insert(ref Shapes, quantiyShapesString, 0);

                Console.Write("Если хотите сохранить результат в файл? нажмите 'F'\nЕсли хотите вывести результат на экран? нажмите 'M'");

                ConsoleKeyInfo chinput = Console.ReadKey();
                switch (chinput.Key)
                {
                    case ConsoleKey.F:
                        {
                            Console.Clear();
                            File.WriteAllLines(@"C:\Users\anato\source\repos\ShapePack\output.txt", Shapes);
                            Console.Write("Файл сохранен.");
                            break;
                            
                        }
                    case ConsoleKey.M:
                        {
                            Console.Clear();
                            for (int i = 0; i < Shapes.Length; i++)
                            {
                                Console.WriteLine(Shapes[i]);
                            }
                            break;
                            
                        }
                    default:
                        Console.WriteLine("Unknown Command.");
                        break;

                }
                Console.WriteLine("\nДля продолжения нажмите 'Enter'");
                Console.ReadLine();
            }
        }
    }
}

