import { Button } from '../Button/Button';
import classes from './Modal.module.scss';
import CloseIcon from '../../assets/icons/CloseIcon.svg?react';

type ModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onCloseModal: React.MouseEventHandler;
};

export const Modal = ({
  title,
  children,
  isOpen,
  onCloseModal,
}: ModalProps) => {
  return (
    <dialog className={classes.modal} open={isOpen}>
      <div className={classes.modal__content}>
        <div className={classes.modal__header}>
          <h3 className={classes.modal__title}>{title}</h3>
          <Button
            className={classes.modal__button_close}
            onClick={onCloseModal}
          >
            <CloseIcon
              className={classes.modal__icon}
              preserveAspectRatio="xMidYMid meet"
              width={16}
              height={16}
              color="#7c4886"
            />
          </Button>
        </div>
        {children}
      </div>
    </dialog>
  );
};
