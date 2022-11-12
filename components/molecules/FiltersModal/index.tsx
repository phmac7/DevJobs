'use client';
import { Button, Checkbox } from '@/components/atoms';
import LocationFilter from '@/components/atoms/LocationFilter';
import React, { useId, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import trapFocus from '@/utils/trapFocus';

interface FiltersModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FiltersModal: React.FC<FiltersModalProps> = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  const modalID = useId();
  const closeModalbtnID = useId();
  const closeModalIconID = useId();

  useEffect(() => {
    const modal = document.getElementById(modalID);
    const closeButton = document.getElementById(closeModalbtnID);
    const closeIcon = document.getElementById(closeModalIconID);
    if (modal && closeButton && closeIcon) {
      trapFocus(modal, closeIcon, closeButton);
    }
    closeButton?.focus();
  }, [isOpen, modalID, closeModalbtnID, closeModalIconID]);

  useEffect(() => {
    const closeOnKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeOnKeyboard);
    return () => window.removeEventListener('keydown', closeOnKeyboard);
  }, [closeModal]);

  const modal = (
    <div>
      <div
        className="w-screen h-screen bg-midnight bg-opacity-25 fixed top-0 left-0"
        onClick={closeModal}
      ></div>
      <div
        id={modalID}
        role="dialog"
        className="w-3/4 h-56 bg-white dark:bg-very-dark-blue fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 px-6 pt-4 pb-6 flex flex-col justify-between"
      >
        <div
          id={closeModalIconID}
          className="absolute right-0 top-0"
          title="close modal"
        >
          <Button
            label={<AiOutlineClose />}
            padding={'14px'}
            onClick={closeModal}
          />
        </div>
        <LocationFilter />
        <Checkbox label="Full Time Only" />
        <Button label={'Search'} id={closeModalbtnID} />
      </div>
    </div>
  );

  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};

export default FiltersModal;
