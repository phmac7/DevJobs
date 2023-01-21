'use client';
import { SearchInput } from '@/components/molecules';
import { CardJob } from '@/components/molecules';
import { Companies, Jobs } from '@/models/types';
import Link from 'next/link';
import React, { useState } from 'react';

interface jobListProps {
  jobs: any;
  companies: any;
}

const JobList: React.FC<jobListProps> = ({ jobs, companies }) => {
  const [filteredJobs, setFilteredJobs] = useState<any>(jobs);

  return (
    <div>
      <SearchInput jobs={jobs} setFilteredJobs={setFilteredJobs} />
      <div className="grid grid-cols-1 gap-x-3 gap-y-12 justify-items-center tablet:grid-cols-2 tablet-xl:grid-cols-3">
        {filteredJobs?.map((job: any) => (
          <Link key={job.sys.id} href={`/${job.fields.slug}`}>
            <CardJob
              companyName={job.fields.company.fields.name}
              contract={job.fields.contractType.fields.name}
              location={job.fields.location.fields.name}
              position={job.fields.title}
              companies={companies}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobList;
