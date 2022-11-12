import { Jobs } from '@/models/types';
import React from 'react';

interface jobDetailsProps {
  jobInfo: Jobs;
}

const JobDetails: React.FC<jobDetailsProps> = ({ jobInfo }) => {
  return (
    <div className="flex flex-col gap-10">
      <p className="">{jobInfo.attributes.description}</p>
      <h2 className="">Requirements</h2>
      <p>{jobInfo.attributes.requirements}</p>
      <h2>What will you do</h2>
      <p>{jobInfo.attributes.role}</p>
    </div>
  );
};

export default JobDetails;
