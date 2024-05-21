import { useCallback, useState } from 'react';

export const useModal = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);
  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return { isOpen, handleOpenModal, handleCloseModal };
};
