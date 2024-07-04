import classes from './HeaderTodoLists.module.scss';
import { Modal } from '../../../../components/Modal/Modal';
import { FormAddingList } from '../FormAddingList/FormAddingList';
import { Button } from '../../../../components/Button/Button';
import { useModal } from '../../../../hooks/useModal';
import { ListOfTasks } from '../../../../ts/types';

type HeaderTodoListsProps = {
  onAddList: (list: ListOfTasks) => void;
  title: string;
};

export const HeaderTodoLists = (props: HeaderTodoListsProps) => {
  const { onAddList, title } = props;

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div className={classes.headerTodoLists}>
      <Modal isOpen={isOpen} onCloseModal={handleCloseModal} title="Add list">
        <FormAddingList
          onAddList={onAddList}
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
        />
      </Modal>
      <h1 className={classes.headerTodoLists__title}>{title}</h1>
      <Button
        className={classes.headerTodoLists__button}
        onClick={handleOpenModal}
        type="button"
      >
        Create list
      </Button>
    </div>
  );
};
