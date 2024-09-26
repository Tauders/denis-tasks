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
    public class Deserialization
    {
        public static Shape[] XmlDeserializeFigur(string path)
        {
            Console.WriteLine("Десериализация");
            XmlSerializer serializer = new XmlSerializer(typeof(Shape[]));
            using (FileStream fs = new FileStream(path + ".xml", FileMode.Open))
            {
                Shape[] shapes = (Shape[])serializer.Deserialize(fs);
                return shapes;
            }
        }

        public static Shape[] JsonDeserializeFigur(string path, JsonSerializerSettings jset)
        {
            Console.WriteLine("Десериализация");
            Shape[] shapes = JsonConvert.DeserializeObject<Shape[]>(File.ReadAllText(path + ".json"), jset);
            return shapes;
        }
    }
}
