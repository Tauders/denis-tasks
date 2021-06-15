﻿using System;

namespace LibShapes
{
    public class Cone : Shape
    {
        private double _h;
        private double _r;

        public Cone(double h, double r)
        {
            _h = h;
            _r = r;
        }

        public Cone()
        {

        }

        public override double Volume()
        {
            return ShapeVolume = Math.Round((Math.PI * Math.Pow(_r, 2) * _h) / 3, 3);
        }

        public override string ToString()
        {
            return Name = "Конус";
        }
    }
}


