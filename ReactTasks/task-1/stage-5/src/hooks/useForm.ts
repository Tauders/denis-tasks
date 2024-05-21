import { useCallback, useState } from 'react';

export const useForm = (
  initialTitle: string = '',
  initialDescription: string = ''
) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value);
    },
    [title]
  );

  const handleChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.currentTarget.value);
    },
    [description]
  );

  const clearTitle = () => {
    setTitle('');
  };
  const clearDescription = () => {
    setDescription('');
  };

  return {
    title,
    description,
    handleChangeTitle,
    handleChangeDescription,
    clearTitle,
    clearDescription,
  };
};
