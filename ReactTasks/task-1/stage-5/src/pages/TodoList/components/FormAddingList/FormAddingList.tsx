import { useEffect } from 'react';
import { Form } from '../../../../components/Form/Form';
import { useForm } from '../../../../hooks/useForm';
import { List } from '../List/List';
import { v4 as uuidv4 } from 'uuid';

type FormAddingListProps = {
  onAddList: (list: List) => void;
  onCloseModal: () => void;
  isOpen: boolean;
};

export const FormAddingList = (props: FormAddingListProps) => {
  const { onAddList, onCloseModal, isOpen } = props;

  const { state, onChangeTitle, onClearTitle } = useForm({ title: '' });

  const { title } = state;

  useEffect(() => {
    if (!isOpen) {
      onClearTitle();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newList: List = {
      id: uuidv4(),
      title,
      tasks: [],
    };

    onAddList(newList);
    onCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit} textButton="Add list">
      <input
        value={title}
        onChange={onChangeTitle}
        type="text"
        placeholder="Title"
        required
      />
    </Form>
  );
};
