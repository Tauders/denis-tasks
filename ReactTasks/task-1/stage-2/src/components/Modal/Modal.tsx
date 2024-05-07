import { Button } from '../Button/Button';
import classes from './Modal.module.scss';
import { Icon } from '../Icon/Icon';

type ModalProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: React.MouseEventHandler;
};

export const Modal = ({
  className,
  title,
  children,
  isOpen,
  closeModal,
}: ModalProps) => {
  const classesNames = className
    ? className + ' ' + classes.modal
    : classes.modal;

  return (
    <dialog className={classesNames} open={isOpen}>
      <div className={classes.modal__content}>
        <div className={classes.modal__header}>
          <h3 className={classes.modal__title}>{title}</h3>
          <Button className={classes.modal__button_close} onClick={closeModal}>
            <Icon
              width={16}
              height={16}
              color="#7c4886"
              viewBox="0 0 16 16"
              children={
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              }
            />
          </Button>
        </div>
        {children}
      </div>
    </dialog>
  );
};
