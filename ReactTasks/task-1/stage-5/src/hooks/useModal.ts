import { useCallback, useState } from 'react';

export const useModal = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, handleOpenModal, handleCloseModal };
};
