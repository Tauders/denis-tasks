import { Task } from '../../../../data/dataTasks';
import { v4 as uuidv4 } from 'uuid';
import { Form } from '../../../../components/Form/Form';
import { useForm } from '../../../../hooks/useForm';

type FormAddingCardProps = {
  onAddCard: (task: Task) => void;
  onCloseModal: () => void;
};

export const FormAddingCard = (props: FormAddingCardProps) => {
  const { onAddCard, onCloseModal } = props;

  const {
    title,
    description,
    handleChangeTitle,
    handleChangeDescription,
    clearTitle,
    clearDescription,
  } = useForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCard: Task = {
      id: uuidv4(),
      title,
      description,
    };

    onAddCard(newCard);

    clearTitle();
    clearDescription();
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
