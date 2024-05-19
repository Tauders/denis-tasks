import { useState } from 'react';
import { Task } from '../../../../data/dataTasks';
import { v4 as uuidv4 } from 'uuid';
import { Form } from '../../../../components/Form/Form';

type FormAddingCardProps = {
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
    const newCard: Task = {
      id: uuidv4(),
      title,
      description,
    };

    onAddCard(newCard);

    clearForm();
    onCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit} textBtn="Add card">
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
