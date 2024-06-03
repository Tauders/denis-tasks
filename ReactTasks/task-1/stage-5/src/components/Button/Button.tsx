import classes from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { className, onClick, onKeyDown, children, disabled, type } = props;

  return (
    <button
      className={classNames(classes.button, className && className)}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
