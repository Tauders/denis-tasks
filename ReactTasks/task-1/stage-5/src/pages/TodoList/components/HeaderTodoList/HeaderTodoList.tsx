import classes from './HeaderTodoList.module.scss';
import { Modal } from '../../../../components/Modal/Modal';
import { FormAddingList } from '../FormAddingList/FormAddingList';
import { Button } from '../../../../components/Button/Button';
import { ListType } from '../../TodoList';
import { useModal } from '../../../../hooks/useModal';

type HeaderTodoListProps = {
  onAddList: (list: ListType) => void;
  title: string;
};

export const HeaderTodoList = (props: HeaderTodoListProps) => {
  const { onAddList, title } = props;

  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);

  return (
    <div className={classes.headerTodoList}>
      <Modal isOpen={isOpen} onCloseModal={handleCloseModal} title="Add list">
        <FormAddingList
          onAddList={onAddList}
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
        />
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
