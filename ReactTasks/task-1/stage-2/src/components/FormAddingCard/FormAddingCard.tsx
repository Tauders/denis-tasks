import classes from './FormAddingCard.module.scss';
import { useEffect, useState } from 'react';
import SimpleCard from '../../ts/classes/simpleCard/simpleCard';
import { Button } from '../Button/Button';
import { Task } from '../../data/dataTasks';
import { v4 as uuidv4 } from 'uuid';

type FormAddingCardProps = {
  className?: string;
  cards: Array<Task>;
  onAddCard: Function;
  closeModal: Function;
};

export const FormAddingCard = ({
  className,
  cards,
  onAddCard,
  closeModal,
}: FormAddingCardProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeTitle: React.FormEventHandler<Element> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitle(e.currentTarget.value);
    if (title !== '') setIsDisabled(false);
  };

  const handleChangeDescription: React.FormEventHandler<Element> = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.currentTarget.value);
    if (description !== '') setIsDisabled(false);
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    if (title === '' || description === '') {
      setIsDisabled(true);
    }
  }, [title, description]);

  const onSubmit: React.FormEventHandler<Element> = (e: React.FormEvent) => {
    e.preventDefault();
    const prevCard: Task = cards[cards.length - 1];
    const newCard = new SimpleCard({
      id: uuidv4(),
      order: cards.length > 0 && prevCard.order ? prevCard.order + 1 : 1,
      title,
      description,
    });

    const newCards = [...cards, newCard];

    onAddCard(newCards);

    clearForm();
    closeModal();
  };

  const classesNames = className
    ? classes.form + ' ' + className
    : classes.form;

  return (
    <form className={classesNames}>
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
      <Button disabled={isDisabled} children={'Add card'} onClick={onSubmit} />
    </form>
  );
};
