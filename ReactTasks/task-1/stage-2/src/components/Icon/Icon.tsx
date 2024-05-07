import classes from './Icon.module.scss';

type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  width: number;
  height: number;
  color?: string;
};

export const Icon = ({
  className,
  width = 24,
  height = 24,
  color,
  children,
  ...restProps
}: IconProps) => {
  let classesNames = className ? classes.icon + ' ' + className : classes.icon;
  return (
    <svg
      className={classesNames}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      stroke={color && color}
      fill={color && color}
      preserveAspectRatio="xMidYMid meet"
      {...restProps}
    >
      {children}
    </svg>
  );
};
