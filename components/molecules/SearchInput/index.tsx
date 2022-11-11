'use client';
import { Button } from '@/components/atoms';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import FiltersModal from '../FiltersModal';

const SearchInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="relative -translate-y-1/2" onSubmit={onSubmitHandler}>
      <input
        className="w-full rounded h-20 pl-6 pr-32 text-very-dark-blue dark:text-white placeholder:text-gray"
        placeholder="Enter desired job..."
      />
      <button
        className="absolute right-20 top-6 cursor-pointer p-2"
        aria-label="Open modal to define extra filters"
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <FaFilter style={{ pointerEvents: 'none' }} />
      </button>
      <div className="absolute right-4 top-4">
        <Button label={<BiSearch />} padding={'14px'} />
      </div>
      <FiltersModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </form>
  );
};

export default SearchInput;
