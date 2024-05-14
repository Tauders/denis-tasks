import { Button } from '../Button/Button';
import classes from './Modal.module.scss';
import CloseIcon from '../../assets/icons/CloseIcon.svg?react';

type ModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
};

export const Modal = (props: ModalProps) => {
  const { title, children, isOpen, onCloseModal } = props;

  return (
    <dialog className={classes.modal} open={isOpen}>
      <div className={classes.modal__content}>
        <div className={classes.modal__header}>
          <h3 className={classes.modal__title}>{title}</h3>
          <Button
            className={classes.modal__button_close}
            onClick={onCloseModal}
          >
            <CloseIcon className={classes.modal__icon} color="#7c4886" />
          </Button>
        </div>
        {children}
      </div>
    </dialog>
  );
};
