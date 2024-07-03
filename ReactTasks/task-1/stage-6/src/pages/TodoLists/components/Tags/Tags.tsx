import { Button } from '../../../../components/Button/Button';
import { Modal } from '../../../../components/Modal/Modal';
import { useModal } from '../../../../hooks/useModal';
import { Task } from '../../../../ts/types';
import classes from './Tags.module.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type TagsProps = {
  card: Task;
  onDeleteTagFromCard: (card: Task) => void;
};

export const Tags = (props: TagsProps) => {
  const { card, onDeleteTagFromCard } = props;
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentTag, setCurrentTag] = useState('');

  const handleClickTag = (tag: string) => {
    handleOpenModal();
    setCurrentTag(tag);
  };

  const handleDeleteTag = () => {
    const updatedCard = {
      ...card,
      tags: card.tags && card.tags.filter(tag => tag !== currentTag),
    };
    onDeleteTagFromCard(updatedCard);
    handleCloseModal();
    console.log(isOpen);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onCloseModal={handleCloseModal}
        title="Delete tag?"
      >
        <p>Are you sure you want to remove the tag?</p>
        <Button onClick={handleDeleteTag} className={classes.tags__modalButton}>
          Yes
        </Button>
      </Modal>
      <ul className={classes.tags}>
        {card.tags &&
          card.tags.map(tag => {
            return (
              <li
                className={classes.tags__tag}
                onClick={() => handleClickTag(tag)}
                key={uuidv4()}
              >
                {tag}
              </li>
            );
          })}
      </ul>
    </>
  );
};
