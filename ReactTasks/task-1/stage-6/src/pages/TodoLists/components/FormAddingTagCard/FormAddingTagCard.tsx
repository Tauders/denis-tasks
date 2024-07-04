import { Form } from '../../../../components/Form/Form';
import { useEffect, useState } from 'react';
import { Task } from '../../../../ts/types';
import classes from './FormAddingTagCard.module.scss';

type FormAddingTagCardProps = {
  card: Task;
  onAddTag: (task: Task) => void;
  onCloseModal: () => void;
  isOpen: boolean;
};

export const FormAddingTagCard = (props: FormAddingTagCardProps) => {
  const { card, onAddTag, onCloseModal, isOpen } = props;
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (card.tags && card.tags.length !== 0) {
      for (const tag of card.tags) {
        setTitle(e.currentTarget.value);
        if (e.currentTarget.value === tag) {
          setError('Such a tag already exists!');
          setIsDisabled(true);
          return;
        }
      }
    } else {
      setTitle(e.currentTarget.value);
    }
    setError('');
    setIsDisabled(false);
  };

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedCard: Task = {
      ...card,
      tags: card.tags ? [...card.tags, title] : [title],
    };
    onAddTag(updatedCard);
    onCloseModal();
  };

  return (
    <>
      {error && (
        <span className={classes.FormAddingTagCard__error}>{error}</span>
      )}
      <Form
        onSubmit={handleSubmit}
        submitButtonText="Add tag"
        disabled={isDisabled}
      >
        <input
          value={title}
          onChange={handleChangeTitle}
          type="text"
          placeholder="tag name"
          required
        />
      </Form>
    </>
  );
};
