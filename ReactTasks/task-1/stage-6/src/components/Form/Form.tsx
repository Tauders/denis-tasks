import { Button } from '../Button/Button';
import classes from './Form.module.scss';
import classNames from 'classnames';

type FormProps = {
  onSubmit: React.FormEventHandler;
  textButton: string;
  children: React.ReactNode;
  className?: string;
};

export const Form = (props: FormProps) => {
  const { onSubmit, textButton, children, className } = props;

  return (
    <form className={classNames(classes.form, className)} onSubmit={onSubmit}>
      {children}
      <Button className={classes.form__button} type="submit">
        {textButton}
      </Button>
    </form>
  );
};
