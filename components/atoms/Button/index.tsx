'use client';

import React from 'react';
import { ButtonProps } from '@/models/types';

const Button: React.FC<ButtonProps> = ({
  label,
  secondary = false,
  padding,
  onClick,
  id,
}) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
      return;
    }
    return null;
  };

  if (!secondary) {
    return (
      <button
        id={id}
        onClick={onClickHandler}
        style={{ padding: padding }}
        className="px-9 py-4 bg-primary text-white rounded font-bold hover:bg-primary-light text-lg"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      id={id}
      onClick={onClickHandler}
      style={{ padding: padding }}
      className="px-9 py-4 text-primary bg-light-gray font-bold text-lg rounded hover:bg-primary-light dark:text-white dark:bg-dark-blue dark:hover:bg-dark-gray"
    >
      {label}
    </button>
  );
};

export default Button;
