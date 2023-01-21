import { Job } from '@/models/contetful';
import React from 'react';

interface jobDetailsProps {
  jobInfo: Job;
}

const JobDetails: React.FC<jobDetailsProps> = ({ jobInfo }) => {
  return (
    <div className="flex flex-col gap-10">
      <p className="">{jobInfo.fields.description}</p>
      <h2 className="">Requirements</h2>
      <p>{jobInfo.fields.requirements}</p>
      <h2>What will you do</h2>
      <p>{jobInfo.fields.tasks}</p>
    </div>
  );
};

export default JobDetails;
