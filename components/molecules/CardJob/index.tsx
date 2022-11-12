'use client';

import { CardJobProps } from '@/models/types';
import Image from 'next/image';
import React from 'react';

const CardJob: React.FC<CardJobProps> = ({
  companies,
  contract,
  position,
  companyName,
  location,
}) => {
  const filterCompany = companies?.filter(
    (company) => company.attributes.companyName === companyName
  );
  const backgroundColor = filterCompany[0].attributes.logoBackgroundColor;
  const logoUrl = filterCompany[0].attributes.logo.data.attributes.url;

  return (
    <div className="w-full h-60 bg-white dark:bg-very-dark-blue rounded">
      <div className="px-8 pt-2 pb-8">
        <div
          style={{ backgroundColor: backgroundColor }}
          className="w-14 h-14 rounded-xl flex items-center p-2.5 -translate-y-8"
        >
          <Image
            className="text-center m-auto"
            src={`http://localhost:1337${logoUrl}`}
            alt={'logo'}
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-dark-gray flex gap-2 items-center">
            <span>5h ago</span>
            <div className="w-1 h-1 bg-dark-gray rounded-full"></div>
            <span>{contract}</span>
          </span>
          <p className="first-letter:uppercase font-bold text-2xl">
            {position}
          </p>
          <span className="text-dark-gray block mb-6">{companyName}</span>

          <span className="text-primary font-medium block justify-end">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardJob;
