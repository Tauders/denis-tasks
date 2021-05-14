﻿using System;

namespace CreateFiles
{
    class Program
    {
        //Куб
        //Цилиндр
        //Пирамида
        //Шар
        //Конус
        //Призма

        static private int SelectFigure()
        {
            Random rdn = new Random();
            int selectFugure = rdn.Next(1, 7);
            return selectFugure;
        }

        static private int CreateFigure()
        {
            

            Random rdn = new Random();
            double h = 11.0 + rdn.NextDouble() * (11.0 - 1.0);
            double r = 11.0 + rdn.NextDouble() * (11.0 - 1.0);
            double s = 11.0 + rdn.NextDouble() * (11.0 - 1.0);
            int figure = SelectFigure();

            switch (figure)
            {
                case 1:
                    Cube cube = new Cube(r);
                    Console.WriteLine($"Созданная вами фигура это {cube} и её объем {cube.Volume()}");
                    break;
                case 2:
                    Cylinder cylinder = new Cylinder(h, r);
                    Console.WriteLine($"Созданная вами фигура это {cylinder} и её объем {cylinder.Volume()}");
                    break;
                case 3:
                    Pyramid pyramid = new Pyramid(s, r);
                    Console.WriteLine($"Созданная вами фигура это {pyramid} и её объем {pyramid.Volume()}");
                    break;
                case 4:
                    Ball ball = new Ball(r);
                    Console.WriteLine($"Созданная вами фигура это {ball} и её объем {ball.Volume()}");
                    break;
                case 5:
                    Cone cone = new Cone(h, r);
                    Console.WriteLine($"Созданная вами фигура это {cone} и её объем {cone.Volume()}");
                    break;
                case 6:
                    Prism prism = new Prism(h);
                    Console.WriteLine($"Созданная вами фигура это {prism} и её объем {prism.Volume()}");
                    break;
            }

            
            return figure;
        }

        static void Main(string[] args)
        {
            Random rnd = new Random();

            int n = rnd.Next(1,11);

            

            object[] vars = new object[n];
            for (int i = 0; i<vars.Length; i++)
            {
                vars[i] = CreateFigure();
            }
            Console.WriteLine(vars);
            Console.ReadKey();

        }
        
    }
}
