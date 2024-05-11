import { Task } from '../../data/dataTasks';
import { Button } from '../Button/Button';
import DeleteIcon from '../../assets/icons/DeleteIcon.svg?react';
import classes from './Card.module.scss';

type CardProps = {
  title: string;
  description: string;
  card: Task;
  onDelete: (card: Task) => void;
};

export const Card = ({ title, description, card, onDelete }: CardProps) => {
  const handleDeleteCard: React.MouseEventHandler = () => {
    onDelete(card);
  };

  return (
    <li className={classes.card}>
      <h3 className={classes.card__title}>{title}</h3>
      <p className={classes.card__description}>{description}</p>
      <Button className={classes.card__button_light} onClick={handleDeleteCard}>
        <DeleteIcon
          width={16}
          height={16}
          className={classes.card__icon}
          preserveAspectRatio="xMidYMid meet"
          color="#7c4886"
        />
      </Button>
    </li>
  );
};
