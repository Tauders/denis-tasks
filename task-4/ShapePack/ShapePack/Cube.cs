using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapePack
{
    class Cube
    {
        public Cube(double height, string name)
        {
            this.name = name;
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
        private double Write()
        {
            Console.Write("Введите сторону :");
            double height = double.Parse(Console.ReadLine());
            return height;
        }
        public double Volume()
        {
            double volume = Math.Pow(height, 3);
            return volume;
        } 
    }
}


