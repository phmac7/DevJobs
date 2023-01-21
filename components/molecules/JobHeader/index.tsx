import { Button } from '@/components/atoms';
import { Job } from '@/models/contetful';
import { getDateInDaysAgo } from '@/utils/getDateInDaysAgo';
import React from 'react';

interface JobHeaderProps {
  jobInfo: Job;
}

const JobHeader: React.FC<JobHeaderProps> = ({ jobInfo }) => {
  const [date, letter] = getDateInDaysAgo(jobInfo.sys.createdAt);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-2 mb-12">
        <div className="text-dark-gray flex gap-2 items-center">
          <span>
            {date}
            {letter} ago
          </span>
          <div className="w-1 h-1 bg-dark-gray rounded-full"></div>
          <span>{jobInfo.fields.contractType.fields.name}</span>
        </div>
        <h2>{jobInfo.fields.title}</h2>
        <span className="font-medium text-primary">
          {jobInfo.fields.location.fields.country}
        </span>
      </div>
      <Button label={'Apply Now!'} />
    </div>
  );
};

export default JobHeader;
