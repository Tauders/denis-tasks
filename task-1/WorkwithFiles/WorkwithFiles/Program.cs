using System;
using LibShapes;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace WorkwithFiles
{
    class Program
    {
        static void Main(string[] args)
        {
            string fileName = "tester"; //Console.ReadLine();
            string path = Serialization.CreateDirectory(@"D:/Figures", fileName);
            JsonSerializerSettings jset = new JsonSerializerSettings() { TypeNameHandling = TypeNameHandling.Objects };
            Shape[] Jsonshapes = Deserialization.JsonDeserializeFigur(path, jset);
            Shape[] Xmlshapes = Deserialization.XmlDeserializeFigur(path);
            double xmlresult = 0;
            double jsonresult = 0;

            Dictionary<Type, List<Shape>> test = new Dictionary<Type, List<Shape>>();

            foreach (Shape shape in Xmlshapes)
            {
                if (test.ContainsKey(shape.GetType()))
                {
                    test[shape.GetType()].Add(shape);
                }
                else
                {
                    test.Add(shape.GetType(), new List<Shape>(){shape});
                }
            }

            foreach (List<Shape> shapes in test.Values)
            {
                if (shapes.Count > 1)
                {
                    for (int i = 0; i < shapes.Count; i++)
                    {
                        Console.WriteLine($"Кол-во фигур в списке {shapes.Count}. Имя фигур в списке {shapes[i].Name} - {shapes[i].Volume()} и суммарный объем фигур равен {shapes[i].Volume() * shapes.Count}");
                    }
                }

                else 
                {
                    Console.WriteLine($"Кол-во фигур в списке {shapes.Count}. Имя фигур в списке {shapes[0].Name} - {shapes[0].Volume()} и суммарный объем фигур равен {shapes[0].Volume() * shapes.Count}");
                }

            }






            //Console.WriteLine(test.Values);

            //Console.WriteLine(xmlresult);
            //Console.WriteLine(new string('=', 20));
            //for (int i = 0; i < Jsonshapes.Length; i++)
            //{
            //    //jsonresult += Jsonshapes[i].Volume();
            //    //Console.WriteLine(Jsonshapes[i].Volume());

            //}
            //Console.WriteLine(jsonresult);


            Console.ReadKey();
        }
    }
}
