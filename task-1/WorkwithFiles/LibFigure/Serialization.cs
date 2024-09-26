using CsvHelper;
using CsvHelper.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace LibShapes
{
    public class Serialization
    {
        public static string CreateDirectory(string directory, string fileName)
        {
            Directory.CreateDirectory(directory);
            string path = (directory + "/") + fileName;
            return path;
        }

        public static void XmlSerializeFigur(string path, Shape[] shapes)
        {
            Console.WriteLine("Сериализация");
            XmlSerializer serializer = new XmlSerializer(typeof(Shape[]));
            using (FileStream fs = new FileStream((path + ".xml"), FileMode.Create))
            {
                serializer.Serialize(fs, shapes);
            }
            Console.WriteLine("Объект создан");
            Console.WriteLine("================================");
        }

        public static void JsonSerializeFigur(string path, Shape[] shapes, JsonSerializerSettings jset)
        {
            Console.WriteLine("Сериализация");
            File.WriteAllText((path + ".json"), JsonConvert.SerializeObject(shapes, jset));
            Console.WriteLine("Объект создан");
            Console.WriteLine("================================");
        }

        public static void CsvSerializeFigur(string path, Shape[] shapes, CsvConfiguration config)
        {
            Console.WriteLine("Сериализация");

            using (StreamWriter sw = new StreamWriter((path + ".csv")))
            {
                using(CsvWriter csv = new CsvWriter(sw, config))
                {
                    csv.WriteRecords(shapes);
                }
            }
            Console.WriteLine("Объект создан");
            Console.WriteLine("================================");
        }
    }
}
