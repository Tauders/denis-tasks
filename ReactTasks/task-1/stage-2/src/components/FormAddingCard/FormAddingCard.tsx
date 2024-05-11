import classes from './FormAddingCard.module.scss';
import { useEffect, useState } from 'react';
import SimpleCard from '../../ts/classes/simpleCard/simpleCard';
import { Button } from '../Button/Button';
import { Task } from '../../data/dataTasks';
import { v4 as uuidv4 } from 'uuid';

type FormAddingCardProps = {
  cards: Array<Task>;
  onAddCard: (cards: Task) => void;
  onCloseModal: () => void;
};

export const FormAddingCard = ({
  cards,
  onAddCard,
  onCloseModal,
}: FormAddingCardProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitle(e.currentTarget.value);
  };

  const handleChangeDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    if (title === '' || description === '') {
      setIsDisabled(true);
    }
    if (title !== '' && description !== '') {
      setIsDisabled(false);
    }
  }, [title, description]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const prevCard: Task = cards[cards.length - 1];
    const newCard = new SimpleCard({
      id: uuidv4(),
      order: cards.length > 0 && prevCard.order ? prevCard.order + 1 : 1,
      title,
      description,
    });

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
      />
      <textarea
        className={classes.form__textarea}
        value={description}
        onChange={handleChangeDescription}
        placeholder="Description"
      />
      <Button isDisabled={isDisabled}>Add card</Button>
    </form>
  );
};
