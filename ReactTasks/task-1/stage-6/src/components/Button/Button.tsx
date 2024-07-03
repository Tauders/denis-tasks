import classes from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { className, ...restProps } = props;

  return (
    <button className={classNames(classes.button, className)} {...restProps} />
  );
};
