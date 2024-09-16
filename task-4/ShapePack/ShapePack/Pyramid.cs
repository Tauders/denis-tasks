using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapePack
{
    class Pyramid
    {
        public Pyramid(double height, double sideA, double sideB, string name)
        {
            this.name = name;
            this.height = height;
            this.sideA = sideA;
            this.sideB = sideB;
        }
        private string name
        {
            get; set;
        }
        private double height
        {
            get; set;
        }
        private double sideA
        {
            get; set;
        }
        private double sideB
        {
            get; set;
        }
        private double Write()
        {
            Console.Write("Введите Высоту:");
            double height = double.Parse(Console.ReadLine());
            return height;
            Console.Write("Введите Сторону А:");
            double sideA = double.Parse(Console.ReadLine());
            return sideA;
            Console.Write("Введите Стороны Б:");
            double sideB = double.Parse(Console.ReadLine());
            return sideA;
        }
        public double Volume()
        {
            double volume = (sideA * sideB * height) / 3;
            return volume;
        }
    }
}
