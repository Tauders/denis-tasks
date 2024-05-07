import { Task } from '../../data/dataTasks';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import classes from './Card.module.scss';

type CardProps = {
  title: string;
  description: string;
  card: Task;
  onDelete: Function;
};

export const Card = ({ title, description, card, onDelete }: CardProps) => {
  const deleteCard: React.MouseEventHandler = () => {
    onDelete(card);
  };
  return (
    <li className={classes.card}>
      <h3 className={classes.card__title}>{title}</h3>
      <p className={classes.card__description}>{description}</p>
      <Button className={classes.card__button_light} onClick={deleteCard}>
        <Icon
          width={16}
          height={16}
          color="#7c4886"
          viewBox="0 0 20.606 20.606"
          children={
            <path d="M17.8,2.5h-2.62A2.813,2.813,0,0,0,12.385,0H8.222A2.814,2.814,0,0,0,5.43,2.5H2.81A2.814,2.814,0,0,0,0,5.308H0A9.38,9.38,0,0,1,1.249,9.816v8.4a2.4,2.4,0,0,0,2.394,2.393H16.964a2.4,2.4,0,0,0,2.393-2.393v-8.4a9.383,9.383,0,0,1,1.248-4.508h0A2.813,2.813,0,0,0,17.8,2.5ZM8.222.625h4.163A2.188,2.188,0,0,1,14.548,2.5H6.058A2.19,2.19,0,0,1,8.222.625ZM18.733,9.816v8.4a1.771,1.771,0,0,1-1.769,1.769H3.643a1.771,1.771,0,0,1-1.769-1.769v-8.4A9.081,9.081,0,0,0,.845,5.62H19.762A9.069,9.069,0,0,0,18.733,9.816ZM.647,5A2.189,2.189,0,0,1,2.81,3.122H17.8A2.189,2.189,0,0,1,19.959,5ZM9.991,17.8V7.805a.312.312,0,0,1,.624,0V17.8a.312.312,0,0,1-.624,0Zm-4.163,0V7.805a.312.312,0,1,1,.624,0V17.8a.312.312,0,1,1-.624,0Zm8.326,0V7.805a.313.313,0,0,1,.625,0V17.8a.313.313,0,0,1-.625,0Z" />
          }
        />
      </Button>
    </li>
  );
};
