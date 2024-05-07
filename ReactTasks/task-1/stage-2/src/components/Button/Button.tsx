import classes from './Button.module.scss';

type ButtonProps = {
  className?: string;
  onClick?: React.FormEventHandler<Element> | React.MouseEventHandler<Element>;
  onKeyDown?: React.FormEventHandler<Element>;
  children: React.ReactNode;
  disabled?: boolean;
};

export const Button = ({
  className,
  onClick,
  onKeyDown,
  children,
  disabled,
}: ButtonProps) => {
  let classesNames = className
    ? className + ' ' + classes.button
    : classes.button;
  return (
    <button
      className={classesNames}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
