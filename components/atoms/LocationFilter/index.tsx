import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';

const LocationFilter = () => {
  return (
    <div className="flex gap-2 items-center pb-2 mb-4 after:absolute after:top-16 after:left-0 after:bg-gray after:w-full after:h-0.5">
      <BiLocationPlus color={'#5964E0'} />
      <input
        className="bg-primary bg-opacity-0 w-3/4 py-2"
        type={'text'}
        placeholder={'Filter by location...'}
      />
    </div>
  );
};

export default LocationFilter;
