using CsvHelper.Configuration.Attributes;
using System;

namespace LibShapes
{
    [Serializable]
    public class Cone : Shape
    {
        public Cone(double h, double r)
        {
            H = h;
            R = r;
        }

        public Cone()
        {

        }

        public override double Volume()
        {
            return Math.Round((Math.PI * Math.Pow(R, 2) * H) / 3, 3);
        }

        public override string ToString()
        {
            return "Конус";
        }
    }
}


