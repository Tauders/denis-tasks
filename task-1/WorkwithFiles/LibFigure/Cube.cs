using CsvHelper.Configuration.Attributes;
using System;

namespace LibShapes
{
    [Serializable]
    public class Cube : Shape
    {
        public Cube(double r)
        {
            R = r;
        }

        public Cube()
        {

        }

        public override double Volume()
        {
            return Math.Round(Math.Pow(R, 3), 3);
        }

        public override string ToString()
        {
            return "Куб";
        }
    }
}
