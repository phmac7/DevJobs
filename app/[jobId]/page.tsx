import { Button } from '@/components/atoms';
import { CompanyHeader, JobDetails, JobHeader } from '@/components/molecules';
import { Companies, Jobs } from '@/models/types';
import { createClient } from 'contentful';

interface jobPageProps {
  params: {
    jobId: string;
  };
}

const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE!,
  accessToken: process.env.NEXT_CONTENTFUL_DELIVERY!,
});

const getJobInfo = async (jobId: string) => {
  const response = await client.getEntries({
    content_type: 'jobDescription',
    'fields.slug': jobId,
  });
  return response.items[0];
};

export default async function jobPage({ params: { jobId } }: jobPageProps) {
  const jobInfo = await getJobInfo(jobId);

  return (
    <>
      <CompanyHeader jobInfo={jobInfo} />
      <div className="flex flex-col mb-24 gap-8 w-full max-w-2xl bg-white dark:bg-very-dark-blue rounded px-6 py-10 m-auto">
        <JobHeader jobInfo={jobInfo} />
        <JobDetails jobInfo={jobInfo} />

        <Button label={'Apply Now!'} />
      </div>
    </>
  );
}
