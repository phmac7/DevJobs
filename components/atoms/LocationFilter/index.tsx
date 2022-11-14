'use client';

import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';

interface LocationFilterProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  location: string;
}

const LocationFilter: React.FC<LocationFilterProps> = ({
  setLocation,
  location,
}) => {
  const locationChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  return (
    <div className="flex gap-2 items-center pb-2 mb-4 after:absolute after:top-16 after:left-0 after:bg-gray after:w-full after:h-0.5 tablet:after:hidden tablet:mb-0 tablet:pb-0 tablet:h-full">
      <BiLocationPlus color={'#5964E0'} />
      <input
        className="bg-primary bg-opacity-0 w-3/4 py-2 tablet:h-full"
        type={'text'}
        placeholder={'Filter by location...'}
        value={location}
        onChange={locationChangeHandler}
      />
    </div>
  );
};

export default LocationFilter;
