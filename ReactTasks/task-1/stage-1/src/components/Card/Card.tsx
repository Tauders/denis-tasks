import classes from './Card.module.scss';

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <li className={classes.card}>
      <h3 className={classes.card__title}>{title}</h3>
      <p className={classes.card__description}>{description}</p>
    </li>
  );
};

export default Card;
