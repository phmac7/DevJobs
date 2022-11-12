import { SearchInput } from '@/components/molecules';
import { CardJob } from '@/components/molecules';
import { Companies, Jobs } from '@/models/types';
import Link from 'next/link';
import React, { Suspense } from 'react';

interface jobListProps {
  jobs: Jobs[];
  companies: Companies[];
}

const JobList: React.FC<jobListProps> = ({ jobs, companies }) => {
  return (
    <div>
      <SearchInput />
      <div className="grid grid-cols-1 gap-x-3 gap-y-12 justify-items-center">
        {jobs?.map((job) => (
          <Link key={job.id} href={`/${job.id}`}>
            <CardJob
              companyName={job.attributes.company.data?.attributes.companyName}
              contract={job.attributes.contract}
              location={job.attributes.location}
              position={job.attributes.position}
              companies={companies}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobList;
