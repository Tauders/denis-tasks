import { Form } from '../../../../components/Form/Form';
import { useForm } from '../../../../hooks/useForm';
import { Task } from '../../../../ts/types';
import classes from './FormEditingCard.module.scss';

type FormEditingCardProps = {
  card: Task;
  handleClickSaveCard: () => void;
  onEditCard: (card: Task) => void;
};

export const FormEditingCard = (props: FormEditingCardProps) => {
  const { card, handleClickSaveCard, onEditCard } = props;

  const { title, description, handleChangeTitle, handleChangeDescription } =
    useForm(card.title, card.description);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedCard: Task = {
      ...card,
      title,
      description,
    };

    onEditCard(updatedCard);
    handleClickSaveCard();
  };

  return (
    <Form
      className={classes.formEditingCardForm}
      onSubmit={handleSubmit}
      textButton="Save card"
    >
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
