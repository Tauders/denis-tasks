import { Card } from './components/Card/Card';
import { dataTasks, Task } from '../../data/dataTasks';
import { sortByCardOrder } from '../../ts/utils';
import { prepareDataTasks } from '../../data/dataTasks';
import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import classes from './TodoList.module.scss';
import { Modal } from '../../components/Modal/Modal';
import { FormAddingCard } from './components/FormAddingCard/FormAddingCard';
import AddIcon from '../../assets/icons/AddIcon.svg?react';

type TodoListProps = {
  title: string;
};

export const TodoList = (props: TodoListProps) => {
  const { title } = props;

  const [cards, setCards] = useState(prepareDataTasks(dataTasks));
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(Object);

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

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleDragCard = (task: Task) => {
    setCurrentCard(task);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const dropHandler = (e: React.DragEvent, task: Task) => {
    e.preventDefault();
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
    <section className={classes.todoListSection}>
      <Modal isOpen={isOpen} onCloseModal={handleCloseModal} title="Add task">
        <FormAddingCard
          cards={cards}
          onAddCard={handleAddCard}
          onCloseModal={handleCloseModal}
        />
      </Modal>
      <h2 className={classes.todoListSection__title}>{title}</h2>
      <ul className={classes.todoListList}>
        {cards.map((card: Task) => {
          return (
            <Card
              key={card.id}
              onDelete={handleDeleteCard}
              handleDrag={() => handleDragCard(card)}
              handleDrop={e => dropHandler(e, card)}
              handleDragLeave={e => handleDragLeave(e)}
              handleDragOver={e => handleDragOver(e)}
              card={card}
            />
          );
        })}
      </ul>
      <Button
        className={classes.todoListSection__button_light}
        onClick={handleOpenModal}
      >
        <AddIcon className={classes.todoListSection__icon} color="#7c4886" />
      </Button>
    </section>
  );
};
