using System;

namespace LibShapes
{
    [Serializable]
    public class Pyramid : Shape
    {
        public Pyramid(double s, double h)
        {
            S = s;
            H = h;
        }

        public Pyramid()
        {
           
        }

        public override double Volume()
        {
            return Math.Round(((S * H) / 3), 3);
        }

        public override string ToString()
        {
            return "Пирамида";
        }
    }
}
