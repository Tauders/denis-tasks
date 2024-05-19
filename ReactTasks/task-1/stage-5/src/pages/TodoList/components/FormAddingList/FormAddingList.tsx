import { Form } from '../../../../components/Form/Form';
import { List } from '../List/List';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type FormAddingListProps = {
  onAddList: (list: List) => void;
  onCloseModal: () => void;
};

export const FormAddingList = (props: FormAddingListProps) => {
  const { onAddList, onCloseModal } = props;

  const [title, setTitle] = useState('');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newList: List = {
      id: uuidv4(),
      title,
      tasks: [],
    };

    onAddList(newList);
    setTitle('');
    onCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit} textBtn="Add list">
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
