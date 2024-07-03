import classNames from 'classnames';
import { Button } from '../../../../components/Button/Button';
import classes from './ConfirmDeleteTag.module.scss';

type ConfirmDeleteTagProps = {
  onCloseModal: () => void;
  onDeleteTag: () => void;
};

export const ConfirmDeleteTag = (props: ConfirmDeleteTagProps) => {
  const { onCloseModal, onDeleteTag } = props;

  return (
    <>
      <p>Are you sure you want to remove the tag?</p>
      <div className={classes.ConfirmDeleteTag__control}>
        <Button
          onClick={onDeleteTag}
          className={classNames(
            classes.ConfirmDeleteTag__button,
            classes.ConfirmDeleteTag__button_ok
          )}
        >
          Delete
        </Button>
        <Button
          onClick={onCloseModal}
          className={classes.ConfirmDeleteTag__button}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};
