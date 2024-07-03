import { Modal } from '../../../../components/Modal/Modal';
import { useModal } from '../../../../hooks/useModal';
import { Task } from '../../../../ts/types';
import classes from './Tags.module.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ConfirmDeleteTag } from '../ConfirmDeleteTag/ConfirmDeleteTag';

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
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onCloseModal={handleCloseModal}
        title="Delete tag?"
      >
        <ConfirmDeleteTag
          onCloseModal={handleCloseModal}
          onDeleteTag={handleDeleteTag}
        />
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
