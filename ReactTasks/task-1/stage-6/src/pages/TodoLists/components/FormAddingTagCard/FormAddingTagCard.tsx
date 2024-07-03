import { Form } from '../../../../components/Form/Form';
import { useForm } from '../../../../hooks/useForm';
import { useEffect } from 'react';
import { Task } from '../../../../ts/types';

type FormAddingTagCardProps = {
  card: Task;
  onAddTag: (task: Task) => void;
  onCloseModal: () => void;
  isOpen: boolean;
};

export const FormAddingTagCard = (props: FormAddingTagCardProps) => {
  const { card, onAddTag, onCloseModal, isOpen } = props;

  const { title, handleChangeTitle, clearForm } = useForm();

  useEffect(() => {
    if (!isOpen) {
      clearForm();
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
    <Form onSubmit={handleSubmit} submitButtonText="Add tag">
      <input
        value={title}
        onChange={handleChangeTitle}
        type="text"
        placeholder="tag name"
        required
      />
    </Form>
  );
};
