'use client';
import React from 'react';
import ReactDOM from 'react-dom';

interface FiltersModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FiltersModal: React.FC<FiltersModalProps> = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const modal = (
    <div role="dialog">
      <div
        className="w-screen h-screen bg-midnight bg-opacity-25 fixed top-0 left-0"
        onClick={closeModal}
      ></div>
      <div className="w-3/4 h-56 bg-white dark:bg-very-dark-blue absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        testando 123
      </div>
    </div>
  );

  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};

export default FiltersModal;
