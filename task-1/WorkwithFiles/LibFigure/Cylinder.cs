using CsvHelper.Configuration.Attributes;
using System;

namespace LibShapes
{
    [Serializable]
    public class Cylinder : Shape
    {
        public Cylinder(double h, double r)
        {
            H = h;
            R = r;
        }

        public Cylinder()
        {

        }

        public override double Volume() 
        {
            return Math.Round((Math.PI * Math.Pow(R, 2) * H), 3);
        } 

        public override string ToString()
        {
            return "Цилиндр";
        }
    }
}
