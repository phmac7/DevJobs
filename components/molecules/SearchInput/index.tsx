'use client';
import React, { useState, useEffect } from 'react';
import { Button, Checkbox, LocationFilter } from '@/components/atoms';
import { FiltersModal } from '@/components/molecules';
import { BiSearch } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import useWindowSize, { Size } from '@/hooks/useWindowSize';
import useFilterJobs from '@/hooks/useFilterJobs';
import { Job } from '@/models/contetful';

interface SearchInputProps {
  jobs: Job[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<Job[]>>;
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
    const filteredJobs = useFilterJobs({
      isFullTime: fullTime,
      jobs: jobs,
      location: location,
      position: position,
    });
    if (filteredJobs) {
      setFilteredJobs(filteredJobs);
    }
  };

  useEffect(() => {
    if (windowSize.width && windowSize.width > 768) {
      setIsModalOpen(false);
    }
  }, [windowSize]);

  return (
    <form
      id="searchForm"
      className="relative -translate-y-1/2"
      onSubmit={onSubmitHandler}
    >
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
          <Checkbox
            label={'Full time'}
            fullTime={fullTime}
            setFullTime={setFullTime}
          />
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
      <FiltersModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        location={location}
        setLocation={setLocation}
        fullTime={fullTime}
        setFullTime={setFullTime}
      />
    </form>
  );
};

export default SearchInput;
