import { v4 as uuidv4 } from 'uuid';
import { Form } from '../../../../components/Form/Form';
import { useForm } from '../../../../hooks/useForm';
import { useEffect } from 'react';
import { Task } from '../../../../ts/types';

type FormAddingCardProps = {
  onAddCard: (task: Task) => void;
  onCloseModal: () => void;
  isOpen: boolean;
};

export const FormAddingCard = (props: FormAddingCardProps) => {
  const { onAddCard, onCloseModal, isOpen } = props;

  const {
    title,
    description,
    handleChangeTitle,
    handleChangeDescription,
    clearForm,
  } = useForm();

  useEffect(() => {
    if (!isOpen) {
      clearForm();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: Task = {
      id: uuidv4(),
      title,
      description,
      tags: []
    };

    onAddCard(newCard);
    onCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit} textButton="Add card">
      <input
        value={title}
        onChange={handleChangeTitle}
        type="text"
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={handleChangeDescription}
        placeholder="Description"
        required
      />
    </Form>
  );
};
