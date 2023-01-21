import { Button } from '@/components/atoms';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface CompanyHeaderProps {
  jobInfo: any;
}

const CompanyHeader: React.FC<CompanyHeaderProps> = ({ jobInfo }) => {
  return (
    <>
      <Link href={'/'} className="absolute top-16">
        <Button label={<FaArrowLeft />} padding="14px" secondary />
      </Link>
      <div className="w-full max-w-2xl bg-white dark:bg-very-dark-blue h-52 -translate-y-4 rounded m-auto flex flex-col items-center">
        <div
          style={{
            backgroundColor: jobInfo.fields.company.fields.logoBackground,
          }}
          className="w-14 h-14 rounded-xl flex items-center p-2.5 -translate-y-4"
        >
          <Image
            src={`https:` + jobInfo.fields.company.fields.logo.fields.file.url}
            alt={`logo from` + jobInfo.fields.company.fields.name}
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="">{jobInfo.fields.company.fields.name}</h1>
          <span className="mb-2">{jobInfo.fields.website}</span>
          <Button label={'Company Site'} secondary />
        </div>
      </div>
    </>
  );
};

export default CompanyHeader;
