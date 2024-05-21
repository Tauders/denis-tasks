import { Form } from '../../../../components/Form/Form';
import { useForm } from '../../../../hooks/useForm';
import { List } from '../List/List';
import { v4 as uuidv4 } from 'uuid';

type FormAddingListProps = {
  onAddList: (list: List) => void;
  onCloseModal: () => void;
};

export const FormAddingList = (props: FormAddingListProps) => {
  const { onAddList, onCloseModal } = props;

  const { title, handleChangeTitle, clearTitle } = useForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newList: List = {
      id: uuidv4(),
      title,
      tasks: [],
    };

    onAddList(newList);

    clearTitle();
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
