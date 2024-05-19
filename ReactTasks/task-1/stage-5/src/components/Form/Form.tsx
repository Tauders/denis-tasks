import { Button } from '../Button/Button';
import classes from './Form.module.scss';

type FormProps = {
  onSubmit: React.FormEventHandler;
  textBtn: string;
  children: React.ReactNode;
};

export const Form = (props: FormProps) => {
  const { onSubmit, textBtn, children } = props;
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
      <Button className={classes.form__button}>{textBtn}</Button>
    </form>
  );
};
