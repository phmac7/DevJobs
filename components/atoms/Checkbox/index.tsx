'use client';

import React from 'react';

interface CheckBoxProps {
  label: string;
  fullTime: boolean;
  setFullTime: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox: React.FC<CheckBoxProps> = ({
  label,
  fullTime,
  setFullTime,
}) => {
  return (
    <div className="flex items-center mb-4 tablet:h-full tablet:mb-0">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={fullTime}
        onChange={(e) => setFullTime(e.target.checked)}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
