import { Button } from '../../../../components/Button/Button';
import DeleteIcon from '../../../../assets/icons/DeleteIcon.svg?react';
import EditIcon from '../../../../assets/icons/EditIcon.svg?react';
import LabelAddIcon from '../../../../assets/icons/LabelAddIcon.svg?react';
import { Task } from '../../../../ts/types';
import { useState } from 'react';
import classes from './Card.module.scss';
import { FormEditingCard } from '../FormEditingCard/FormEditingCard';
import { Modal } from '../../../../components/Modal/Modal';
import { FormAddingTagCard } from '../FormAddingTagCard/FormAddingTagCard';
import { useModal } from '../../../../hooks/useModal';
import { Tags } from '../Tags/Tags';

type CardProps = {
  card: Task;
  onEditCard: (card: Task) => void;
  onAddTagToCard: (card: Task) => void;
  onDeleteTagToCard: (card: Task) => void;
  onDelete: (card: Task) => void;
  onDrop: React.DragEventHandler;
  onDrag: React.DragEventHandler;
  onDragOver: React.DragEventHandler;
};

export const Card = (props: CardProps) => {
  const {
    card,
    onEditCard,
    onAddTagToCard,
    onDeleteTagToCard,
    onDelete,
    onDrop,
    onDrag,
    onDragOver,
  } = props;

  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);

  const [isEdit, setIsEdit] = useState(false);

  const handleDeleteCard = () => {
    onDelete(card);
  };

  const handleClickButtonEdit = () => {
    setIsEdit(true);
  };

  const handleClickSaveCard = () => {
    setIsEdit(false);
  };

  return (
    <li
      className={classes.card}
      draggable
      onDrag={onDrag}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <Modal isOpen={isOpen} onCloseModal={handleCloseModal} title="Add tag">
        <FormAddingTagCard
          card={card}
          onAddLabel={onAddTagToCard}
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
        />
      </Modal>
      <div className={classes.card__header}>
        <Tags card={card} onDeleteTagToCard={onDeleteTagToCard}/>
        <div className={classes.card__control}>
          <Button
            className={classes.card__button_light}
            onClick={handleOpenModal}
            type="button"
          >
            <LabelAddIcon className={classes.card__icon} color="#7c4886" />
          </Button>
          <Button
            className={classes.card__button_light}
            onClick={handleClickButtonEdit}
            type="button"
          >
            <EditIcon className={classes.card__icon} color="#7c4886" />
          </Button>
          <Button
            className={classes.card__button_light}
            onClick={handleDeleteCard}
            type="button"
          >
            <DeleteIcon className={classes.card__icon} color="#7c4886" />
          </Button>
        </div>
      </div>
      {isEdit ? (
        <FormEditingCard
          card={card}
          handleClickSaveCard={handleClickSaveCard}
          onEditCard={onEditCard}
        />
      ) : (
        <>
          <h3 className={classes.card__title}>{card.title}</h3>
          <p className={classes.card__description}>{card.description}</p>
        </>
      )}
    </li>
  );
};
