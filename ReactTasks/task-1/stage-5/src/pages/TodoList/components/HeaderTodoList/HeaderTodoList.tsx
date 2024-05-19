import { useState } from 'react';
import classes from './HeaderTodoList.module.scss';
import { Modal } from '../../../../components/Modal/Modal';
import { FormAddingList } from '../FormAddingList/FormAddingList';
import { Button } from '../../../../components/Button/Button';
import { List } from '../List/List';

type HeaderTodoListProps = {
  onAddList: (list: List) => void;
  title: string;
};

export const HeaderTodoList = (props: HeaderTodoListProps) => {
  const { onAddList, title } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.headerTodoList}>
      <Modal isOpen={isOpen} onCloseModal={handleCloseModal} title="Add list">
        <FormAddingList onAddList={onAddList} onCloseModal={handleCloseModal} />
      </Modal>
      <h1 className={classes.headerTodoList__title}>{title}</h1>
      <Button
        className={classes.headerTodoList__button}
        onClick={handleOpenModal}
      >
        Create list
      </Button>
    </div>
  );
};
