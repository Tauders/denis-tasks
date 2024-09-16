using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapePack
{
    class Container
    {
        public double Volume()
        {
            try
            {
                Console.Write("Введите объем контейнера(объём контейнера вводится как вещественное число):");
                double volume = double.Parse(Console.ReadLine());
                return volume;
            }
            catch (Exception)
            {
                //Console.Write("Вы ввели недопустимый символ. Нажмите Enter.\n");
                return 0;
            }
        }
    }
}
