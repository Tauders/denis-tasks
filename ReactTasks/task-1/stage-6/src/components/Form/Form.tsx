import { Button } from '../Button/Button';
import classes from './Form.module.scss';
import classNames from 'classnames';

type FormProps = {
  onSubmit: React.FormEventHandler;
  submitButtonText: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export const Form = (props: FormProps) => {
  const { onSubmit, submitButtonText, children, className, disabled } = props;

  return (
    <form className={classNames(classes.form, className)} onSubmit={onSubmit}>
      {children}
      <Button
        className={classes.form__button}
        type="submit"
        disabled={disabled}
      >
        {submitButtonText}
      </Button>
    </form>
  );
};
