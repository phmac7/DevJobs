'use client';
import { Button, Checkbox } from '@/components/atoms';
import LocationFilter from '@/components/atoms/LocationFilter';
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import FiltersModal from '../FiltersModal';
import useWindowSize, { Size } from '@/hooks/useWindowSize';
import { Jobs } from '@/models/types';

interface SearchInputProps {
  jobs: Jobs[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<Jobs[]>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ jobs, setFilteredJobs }) => {
  const [position, setPosition] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [fullTime, setFullTime] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const windowSize: Size = useWindowSize();

  const positionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(position, location);
    let filteredJobs = jobs;
    if (location !== '' && position !== '') {
      filteredJobs = jobs.filter(
        (job) =>
          job.attributes.position
            .toLowerCase()
            .includes(position.toLowerCase()) &&
          job.attributes.location.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredJobs(filteredJobs);
      return;
    }
    if (position !== '') {
      filteredJobs = jobs.filter((job) =>
        job.attributes.position.toLowerCase().includes(position.toLowerCase())
      );
      setFilteredJobs(filteredJobs);
      return;
    }
    if (location !== '') {
      filteredJobs = jobs.filter((job) =>
        job.attributes.location.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredJobs(filteredJobs);
      return;
    }

    if (position === '' && location === '') {
      filteredJobs = jobs;
      setFilteredJobs(filteredJobs);
    }
  };

  useEffect(() => {
    if (windowSize.width && windowSize.width > 768) {
      setIsModalOpen(false);
    }
  }, [windowSize]);

  return (
    <form className="relative -translate-y-1/2" onSubmit={onSubmitHandler}>
      <div className="w-full rounded bg-white dark:bg-very-dark-blue h-20 flex items-center px-6 gap-4">
        <div className="hidden tablet:block">
          <BiSearch style={{ color: '#5964E0', fontSize: '20px' }} />
        </div>
        <input
          className="flex-1 w-full h-full rounded text-very-dark-blue dark:text-white dark:bg-very-dark-blue placeholder:text-gray"
          placeholder="Enter desired job..."
          value={position}
          onChange={positionChangeHandler}
        />
        <div className="hidden tablet:block flex-1 h-full">
          <LocationFilter setLocation={setLocation} location={location} />
        </div>
        <div className="hidden tablet:block flex-1 h-full">
          <Checkbox label={'Full time'} />
        </div>
        <button
          type="button"
          className="p-2 block tablet:hidden"
          aria-label="Open modal to define extra filters"
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          <FaFilter style={{ pointerEvents: 'none' }} />
        </button>
        <div className="tablet:hidden">
          <Button label={<BiSearch />} padding={'14px'} />
        </div>
        <div className="hidden tablet:block">
          <Button label={'Search'} padding={'14px'} />
        </div>
      </div>
      <FiltersModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </form>
  );
};

export default SearchInput;
