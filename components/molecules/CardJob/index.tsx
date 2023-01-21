'use client';

import { CardJobProps } from '@/models/types';
import { Company } from '@/models/contetful';
import { getDateInDaysAgo } from '@/utils/getDateInDaysAgo';
import Image from 'next/image';
import React from 'react';

const CardJob: React.FC<CardJobProps> = ({
  companies,
  contract,
  position,
  companyName,
  location,
  createdAt,
}) => {
  const filterCompany = companies?.filter(
    (company: Company) => company.fields.name === companyName
  );
  const backgroundColor = filterCompany[0].fields.logoBackground;
  const logoUrl = filterCompany[0].fields.logo.fields.file.url;

  const [date, letter] = getDateInDaysAgo(createdAt);

  return (
    <div className="w-85 max-w-sm h-60 bg-white dark:bg-very-dark-blue rounded">
      <div className="px-8 pt-2 pb-8">
        <div
          style={{ backgroundColor: backgroundColor }}
          className="w-14 h-14 rounded-xl flex items-center p-2.5 -translate-y-8"
        >
          <Image
            className="text-center m-auto"
            src={`https:${logoUrl}`}
            alt={'logo'}
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-dark-gray flex gap-2 items-center">
            <span>
              {date}
              {letter} ago
            </span>
            <div className="w-1 h-1 bg-dark-gray rounded-full"></div>
            <span>{contract}</span>
          </div>
          <p className="first-letter:uppercase font-bold text-xl dark:text-white">
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
