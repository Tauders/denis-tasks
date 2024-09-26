using CsvHelper.Configuration.Attributes;
using System;
using System.Text.Json.Serialization;
using System.Xml.Serialization;


namespace LibShapes
{
    [XmlInclude(typeof(Cube)),
    XmlInclude(typeof(Cylinder)),
    XmlInclude(typeof(Pyramid)),
    XmlInclude(typeof(Ball)),
    XmlInclude(typeof(Cone)),
    XmlInclude(typeof(Prism))]
    [Serializable]

    public abstract class Shape
    {
        [Name("Name")]
        public string Name { get; set; }

        [Name("Radius")]
        public double R { get; set; }

        [Name("Height")]
        public double H { get; set; }

        [Name("Area")]
        public double S { get; set; }
        
        public abstract double Volume();


        public Shape()
        {

        }
    }

}
