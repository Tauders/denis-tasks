import { Task } from '../../../../data/dataTasks';
import { Button } from '../../../../components/Button/Button';
import DeleteIcon from '../../../../assets/icons/DeleteIcon.svg?react';
import classes from './Card.module.scss';

type CardProps = {
  card: Task;
  onDelete: (card: Task) => void;
  onDrop: React.DragEventHandler;
  onDrag: React.DragEventHandler;
  onDragOver: React.DragEventHandler;
};

export const Card = (props: CardProps) => {
  const { card, onDelete, onDrop, onDrag, onDragOver } = props;

  const handleDeleteCard = () => {
    onDelete(card);
  };

  return (
    <li
      className={classes.card}
      draggable={true}
      onDrag={onDrag}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h3 className={classes.card__title}>{card.title}</h3>
      <p className={classes.card__description}>{card.description}</p>
      <Button className={classes.card__button_light} onClick={handleDeleteCard}>
        <DeleteIcon className={classes.card__icon} color="#7c4886" />
      </Button>
    </li>
  );
};
