import classes from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  isDisabled?: boolean;
};

export const Button = ({
  className,
  onClick,
  onKeyDown,
  children,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      className={classNames(className && className, classes.button)}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
