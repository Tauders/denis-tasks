import { Card } from '../Card/Card';
import { dataTasks, Task } from '../../data/dataTasks';
import { sortByCardOrder } from '../../ts/utils';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import classes from './TodoList.module.scss';
import { Icon } from '../Icon/Icon';
import { Modal } from '../Modal/Modal';
import { FormAddingCard } from '../FormAddingCard/FormAddingCard';

type TodoListProps = {
  title: string;
};

export const TodoList = ({ title }: TodoListProps) => {
  const [cards, setCards] = useState<Task[]>(dataTasks);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCards(
      cards.map((task, index) => {
        task.id = uuidv4();
        task.order = index + 1;
        return task;
      })
    );
  }, []);

  const handleDeleteCard = (item: Task) => {
    setCards(prevCards => prevCards.filter(elem => elem.id !== item.id));
  };
  const handleAddCard = (cards: Array<Task>) => {
    setCards(cards);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className={classes.todoListSection}>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add task">
        <FormAddingCard
          cards={cards}
          onAddCard={handleAddCard}
          closeModal={closeModal}
        />
      </Modal>
      <h2 className={classes.todoListSection__title}>{title}</h2>
      <ul className={classes.todoListList}>
        {cards.sort(sortByCardOrder).map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              onDelete={handleDeleteCard}
              card={item}
            />
          );
        })}
      </ul>
      <Button
        className={classes.todoListSection__button_light}
        onClick={openModal}
      >
        <Icon
          width={16}
          height={16}
          color="#7c4886"
          viewBox="0 0 32 32"
          children={
            <path d="M15,15 L0.992786407,15 C0.444485615,15 0,15.4438648 0,16 C0,16.5522847 0.452362061,17 0.992786407,17 L15,17 L15,31.0072136 C15,31.5555144 15.4438648,32 16,32 C16.5522847,32 17,31.5476379 17,31.0072136 L17,17 L31.0072136,17 C31.5555144,17 32,16.5561352 32,16 C32,15.4477153 31.5476379,15 31.0072136,15 L17,15 L17,0.992786407 C17,0.444485615 16.5561352,-8.15366451e-17 16,-1.8369702e-16 C15.4477153,-2.85150083e-16 15,0.452362061 15,0.992786407 L15,15 Z" />
          }
        />
      </Button>
    </section>
  );
};
