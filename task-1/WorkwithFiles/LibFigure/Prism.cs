﻿using System;

namespace LibShapes
{
    public class Prism : Shape
    {
        private double _h;

        public Prism(double h)
        {
            _h = h;
        }

        public Prism()
        {
            
        }

        public override double Volume() 
        {
            return ShapeVolume = Math.Round((Math.Pow(_h, 2) * Math.Sqrt(3) / 2) * ((_h * 4) / 2), 3);
        }

        public override string ToString()
        {
            return Name = "Призма";
        }
    }
}
