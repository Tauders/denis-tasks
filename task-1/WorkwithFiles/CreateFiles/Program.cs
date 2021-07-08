﻿using System;
using System.IO;
using LibShapes;
using System.Xml.Serialization;
using Newtonsoft.Json;


namespace CreateFiles
{
    class Program
    {
        private static string CreateDirectory(string directory, string fileName)
        {
            Directory.CreateDirectory(directory);
            string path = (directory + "/") + fileName;
            return path;
        }


        private static void XmlSerializeFigur(string path, Shape[] shapes)
        {
            Console.WriteLine("Сериализация");
            XmlSerializer serializer = new XmlSerializer(typeof(Shape[]));
            using (FileStream fs = new FileStream((path + ".xml"), FileMode.Create))
            {
                serializer.Serialize(fs, shapes);
            }
            Console.WriteLine("================================");
        }

        private static void XmlDeserializaFigur(string path, Shape[] shapes)
        {
            Console.WriteLine("Десериализация");
            XmlSerializer serializer = new XmlSerializer(typeof(Shape[]));
            using (FileStream fs = new FileStream(path + ".xml", FileMode.Open))
            {
                shapes = (Shape[])serializer.Deserialize(fs);
                foreach (Shape shape in shapes)
                {
                    Console.WriteLine($"Фигура {shape} и её объём равен: {shape.Volume()}");
                }
            }
            Console.WriteLine("================================");
        }

        private static void JsonSerializeFigur(string path, Shape[] shapes, JsonSerializerSettings jset)
        {
            Console.WriteLine("Сериализация");
            File.WriteAllText(path + ".json", JsonConvert.SerializeObject(shapes, jset));
            Console.WriteLine("================================");
        }

        private static void JsonDeserializaFigur(string path, Shape[] shapes, JsonSerializerSettings jset)
        {
            Console.WriteLine("Десериализация");
            JsonConvert.DeserializeObject<Shape[]>(File.ReadAllText(path + ".json"), jset);
            foreach (Shape shape in shapes)
            {
                Console.WriteLine($"Фигура {shape} и её объём равен: {shape.Volume()}");
            }
            Console.WriteLine("================================");
        }


        private static void Main(string[] args)
        {
            JsonSerializerSettings jset = new JsonSerializerSettings() { TypeNameHandling = TypeNameHandling.Objects };
            Console.WriteLine("Введите название файла");
            string fileName = Console.ReadLine();
            string path = CreateDirectory(@"D:\Figures",fileName);
            //Console.WriteLine("Укажите место создаваемой директории");
            //string directory = Console.ReadLine();
            Console.Clear();
            //string path = CreateDirectory(directory, fileName);
            Shape[] shapes = CreateFigure.GetShapes();
            Console.WriteLine("Работа с файлами типа XML");
            XmlSerializeFigur(path, shapes);
            XmlDeserializaFigur(path, shapes);
            Console.WriteLine("Работа с файлами типа JSON");
            JsonSerializeFigur(path, shapes, jset);
            JsonDeserializaFigur(path, shapes, jset);
            Console.ReadKey();
        }

    }
}
