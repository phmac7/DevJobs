import { Button } from '@/components/atoms';
import { Jobs } from '@/models/types';
import React from 'react';

interface JobHeaderProps {
  jobInfo: any;
}

const JobHeader: React.FC<JobHeaderProps> = ({ jobInfo }) => {
  console.log(jobInfo.fields.company);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-2 mb-12">
        <div className="text-dark-gray flex gap-2 items-center">
          <span>5h ago</span>
          <div className="w-1 h-1 bg-dark-gray rounded-full"></div>
          <span>{jobInfo.fields.contractType.fields.name}</span>
        </div>
        <h2>{jobInfo.fields.title}</h2>
        <span className="font-medium text-primary">
          {jobInfo.fields.location.fields.name}
        </span>
      </div>
      <Button label={'Apply Now!'} />
    </div>
  );
};

export default JobHeader;
