﻿using System;

namespace LibFigure
{
    public class Cylinder : Shape
    {
        private double _h;
        private double _r;

        public Cylinder(double h, double r)
        {
            _h = h;
            _r = r;
        }

        public override double Volume() => Math.Round((Math.PI * Math.Pow(_r, 2) * _h), 3);

        public override string ToString()
        {
            return "Цилиндр";
        }
    }
}