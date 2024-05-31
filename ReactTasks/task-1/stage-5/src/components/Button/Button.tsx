import classes from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  isDisabled?: boolean;
  type: 'button' | 'submit' | 'reset';
};

export const Button = (props: ButtonProps) => {
  const { className, onClick, onKeyDown, children, isDisabled, type } = props;

  return (
    <button
      className={classNames(classes.button, className && className)}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
};
