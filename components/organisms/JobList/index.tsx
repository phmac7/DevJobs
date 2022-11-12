import { SearchInput } from '@/components/molecules';
import { CardJob } from '@/components/molecules';
import { Companies, Jobs } from '@/models/types';
import React, { Suspense } from 'react';

interface jobListProps {
  jobs: Jobs[];
  companies: Companies[];
}

const JobList: React.FC<jobListProps> = ({ jobs, companies }) => {
  return (
    <div>
      <SearchInput />
      <div className="flex flex-col gap-10">
        {jobs?.map((job) => (
          <CardJob
            key={job.id}
            companyName={job.attributes.company.data?.attributes.companyName}
            contract={job.attributes.contract}
            location={job.attributes.location}
            position={job.attributes.position}
            companies={companies}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
