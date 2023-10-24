import { useState } from 'react';

export function useModal() {
  const [modalToShow, setModalToShow] = useState(null);

  const openModal = (modal) => {
    setModalToShow(modal);
  };

  const closeModal = () => {
    setModalToShow(null);
  };

  return {
    modalToShow,
    openModal,
    closeModal,
  };
}
