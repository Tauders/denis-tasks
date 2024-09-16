using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapePack
{
    class Sphere
    {
        public Sphere(double radius, string name)
        {
            this.name = name;
            this.radius = radius;
        }
        private string name
        {
            get; set;
        }
        private double radius
        {
            get; set;
        }
        private double Write()
        {
            Console.Write("Введите Радиус :");
            double radius = double.Parse(Console.ReadLine());
            return radius;
        }
        public double Volume()
        {
            double volume = 4 * Math.PI * Math.Pow(radius, 3) / 3;
            return volume;
        }
    }
}
