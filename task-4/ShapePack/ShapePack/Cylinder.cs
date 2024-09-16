using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapePack
{
    class Cylinder
    {
        public Cylinder(double radius, double height, string name)
        {
            this.name = name;
            this.radius = radius;
            this.height = height;
        }
        private string name
        {
            get; set;
        }
        private double height
        {
            get; set;
        }
        private double radius
        {
            get; set;
        }
        private double Write()
        {
            Console.Write("Введите Высоту:");
            double height = double.Parse(Console.ReadLine());
            return height;
            Console.Write("Введите Радиус:");
            double radius = double.Parse(Console.ReadLine());
            return radius;
        }
        public double Volume()
        {
            double volume = Math.PI * Math.Pow(radius, 2) * height;
            return volume;
        }
    }
}
