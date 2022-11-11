import React from 'react';
import { ButtonProps } from '@/models/types';

const Button: React.FC<ButtonProps> = ({
  label,
  secondary = false,
  padding,
}) => {
  if (!secondary) {
    return (
      <button
        style={{ padding: padding }}
        className="px-9 py-4 bg-primary text-white rounded font-bold hover:bg-primary-light text-lg"
      >
        {label}
      </button>
    );
  }

  return (
    <button className="px-9 py-4 text-primary bg-gray font-bold text-lg rounded hover:bg-primary-light dark:text-white dark:bg-dark-blue dark:hover:bg-dark-gray">
      {label}
    </button>
  );
};

export default Button;
