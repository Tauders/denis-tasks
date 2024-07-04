import { useEffect, useState } from 'react';
import { Form } from '../../../../components/Form/Form';
import { v4 as uuidv4 } from 'uuid';
import { ListOfTasks } from '../../../../ts/types';

type FormAddingListProps = {
  onAddList: (list: ListOfTasks) => void;
  onCloseModal: () => void;
  isOpen: boolean;
};

export const FormAddingList = (props: FormAddingListProps) => {
  const { onAddList, onCloseModal, isOpen } = props;

  const [title, setTitle] = useState('');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newList: ListOfTasks = {
      id: uuidv4(),
      title,
      tasks: [],
    };

    onAddList(newList);
    onCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit} submitButtonText="Add list">
      <input
        value={title}
        onChange={handleChangeTitle}
        type="text"
        placeholder="Title"
        required
      />
    </Form>
  );
};
