import { Button } from '../Button/Button';
import classes from './Form.module.scss';

type FormProps = {
  onSubmit: React.FormEventHandler;
  textButton: string;
  children: React.ReactNode;
};

export const Form = (props: FormProps) => {
  const { onSubmit, textButton, children } = props;
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
      <Button className={classes.form__button}>{textButton}</Button>
    </form>
  );
};
