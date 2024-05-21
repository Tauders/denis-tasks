import { Task } from '../../../../data/dataTasks';
import { v4 as uuidv4 } from 'uuid';
import { Form } from '../../../../components/Form/Form';
import { useForm } from '../../../../hooks/useForm';
import { isString } from '../../../../ts/isType';
import { useEffect } from 'react';

type FormAddingCardProps = {
  onAddCard: (task: Task) => void;
  onCloseModal: () => void;
  isOpen: boolean;
};

export const FormAddingCard = (props: FormAddingCardProps) => {
  const { onAddCard, onCloseModal, isOpen } = props;

  const {
    state,
    onChangeTitle,
    onChangeDescription,
    onClearTitle,
    onClearDescription,
  } = useForm({
    title: '',
    description: '',
  });

  const { title, description } = state;

  useEffect(() => {
    if (!isOpen) {
      onClearTitle();
      onClearDescription();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isString(description)) {
      return;
    }

    const newCard: Task = {
      id: uuidv4(),
      title,
      description,
    };

    onAddCard(newCard);
    onCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit} textBtn="Add card">
      <input
        value={title}
        onChange={onChangeTitle}
        type="text"
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={onChangeDescription}
        placeholder="Description"
        required
      />
    </Form>
  );
};
