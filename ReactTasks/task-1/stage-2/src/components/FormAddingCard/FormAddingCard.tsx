import classes from './FormAddingCard.module.scss';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Task } from '../../data/dataTasks';
import { v4 as uuidv4 } from 'uuid';

type FormAddingCardProps = {
  cards: Array<Task>;
  onAddCard: (task: Task) => void;
  onCloseModal: () => void;
};

export const FormAddingCard = (props: FormAddingCardProps) => {
  const { onAddCard, onCloseModal } = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.currentTarget.value);
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCard = {
      id: uuidv4(),
      title,
      description,
    };

    onAddCard(newCard);

    clearForm();
    onCloseModal();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.form__input}
        value={title}
        onChange={handleChangeTitle}
        type="text"
        placeholder="Title"
        required
      />
      <textarea
        className={classes.form__textarea}
        value={description}
        onChange={handleChangeDescription}
        placeholder="Description"
        required
      />
      <Button className={classes.form__button}>Add card</Button>
    </form>
  );
};
