import { Button } from '../../../../components/Button/Button';
import { Modal } from '../../../../components/Modal/Modal';
import { Card } from '../Card/Card';
import { FormAddingCard } from '../FormAddingCard/FormAddingCard';
import classes from './List.module.scss';
import AddIcon from '../../../../assets/icons/AddIcon.svg?react';
import { sortByCardOrder } from '../../../../ts/utils';
import { useEffect, useState } from 'react';
import DeleteIcon from '../../../../assets/icons/DeleteIcon.svg?react';
import classNames from 'classnames';
import { useModal } from '../../../../hooks/useModal';
import { ListOfTasks, Task } from '../../../../ts/types';

type ListProps = {
  list: ListOfTasks;
  onChangeList: (id: string, title: string, cards: Task[]) => void;
  onDeleteList: (list: ListOfTasks) => void;
};

export const List = (props: ListProps) => {
  const { list, onChangeList, onDeleteList } = props;

  const [cards, setCards] = useState(list.tasks);
  const [currentCard, setCurrentCard] = useState<undefined | Task>(undefined);

  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);

  useEffect(() => {
    onChangeList(list.id, list.title, cards);
  }, [cards]);

  const handleDeleteList = () => {
    onDeleteList(list);
  };

  const handleDeleteCard = (item: Task) => {
    setCards(prevCards =>
      prevCards.filter(elem => elem.id !== item.id).sort(sortByCardOrder)
    );
  };

  const handleAddCard = (newCard: Task) => {
    const prevCard: Task = cards[cards.length - 1];
    setCards(
      [
        ...cards,
        {
          ...newCard,
          order:
            cards.length > 0 && prevCard.order !== undefined
              ? prevCard.order + 1
              : 1,
        },
      ].sort(sortByCardOrder)
    );
  };

  const handleUpdateCard = (updatedCard: Task) => {
    setCards(
      cards.map(card => {
        if (card.id === updatedCard.id) {
          return updatedCard;
        }
        return card;
      })
    );
  };

  const handleDragCard = (task: Task) => {
    setCurrentCard(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, task: Task) => {
    e.preventDefault();
    currentCard !== undefined &&
      setCards(
        [...cards]
          .map(card => {
            if (card.id === task.id) {
              return { ...card, order: currentCard.order };
            }
            if (card.id === currentCard.id) {
              return { ...card, order: task.order };
            }
            return card;
          })
          .sort(sortByCardOrder)
      );
  };

  return (
    <div className={classes.list} id={list.id}>
      <Modal isOpen={isOpen} onCloseModal={handleCloseModal} title="Add task">
        <FormAddingCard
          onAddCard={handleAddCard}
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
        />
      </Modal>
      <div className={classes.list__header}>
        <h2 className={classes.list__title}>{list.title}</h2>
        <Button
          className={classNames(
            classes.list__button_light,
            classes.list__button_delete
          )}
          onClick={handleDeleteList}
          type="button"
        >
          <DeleteIcon className={classes.list__icon} color="#000000" />
        </Button>
      </div>
      <ul className={classes.list__list}>
        {cards.map((card: Task) => {
          return (
            <Card
              key={card.id}
              onEditCard={handleUpdateCard}
              onDelete={handleDeleteCard}
              onDrag={() => handleDragCard(card)}
              onDrop={e => handleDrop(e, card)}
              onDragOver={e => handleDragOver(e)}
              card={card}
            />
          );
        })}
      </ul>
      <Button
        className={classes.list__button_light}
        onClick={handleOpenModal}
        type="button"
      >
        <AddIcon className={classes.list__icon} color="#7c4886" />
      </Button>
    </div>
  );
};
