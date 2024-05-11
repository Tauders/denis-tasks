import { Card } from '../Card/Card';
import { dataTasks, Task } from '../../data/dataTasks';
import { sortByCardOrder } from '../../ts/utils';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import classes from './TodoList.module.scss';
import { Modal } from '../Modal/Modal';
import { FormAddingCard } from '../FormAddingCard/FormAddingCard';
import AddIcon from '../../assets/icons/AddIcon.svg?react';

type TodoListProps = {
  title: string;
};

export const TodoList = ({ title }: TodoListProps) => {
  const [cards, setCards] = useState<Task[]>(dataTasks);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCards(
      cards
        .map((task, index) => {
          task.id = uuidv4();
          task.order = index + 1;
          return task;
        })
        .sort(sortByCardOrder)
    );
  }, []);

  const handleDeleteCard = (item: Task) => {
    setCards(prevCards =>
      prevCards.filter(elem => elem.id !== item.id).sort(sortByCardOrder)
    );
  };
  const handleAddCard = (newCard: Task) => {
    setCards([...cards, newCard].sort(sortByCardOrder));
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
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
              key={card.id && card.id.replace(/[^\d]/g, '')}
              title={card.title}
              description={card.description}
              onDelete={handleDeleteCard}
              card={card}
            />
          );
        })}
      </ul>
      <Button
        className={classes.todoListSection__button_light}
        onClick={handleOpenModal}
      >
        <AddIcon
          className={classes.todoListSection__icon}
          width={16}
          height={16}
          color="#7c4886"
          preserveAspectRatio="xMidYMid meet"
        />
      </Button>
    </section>
  );
};
