import { Button } from '@/components/atoms';
import { CompanyHeader, JobDetails, JobHeader } from '@/components/molecules';
import { Companies, Jobs } from '@/models/types';

interface jobPageProps {
  params: {
    jobId: string;
  };
}

const getJobInfo = async (jobId: string) => {
  const res = await (
    await fetch(`${process.env.NEXT_STRAPI_URL}/jobs/${jobId}?populate=*`, {
      headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_KEY,
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    })
  ).json();
  const data: Jobs = res.data;
  return { jobInfo: data, companyId: data.attributes.company.data?.id };
};

const getCompanyInfo = async (companyId: number | undefined) => {
  const res = await (
    await fetch(
      `${process.env.NEXT_STRAPI_URL}/companies/${companyId}?populate=logo`,
      {
        headers: {
          Authorization: 'Bearer ' + process.env.STRAPI_KEY,
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      }
    )
  ).json();
  const data: Companies = res.data;
  return data;
};

export default async function jobPage({ params: { jobId } }: jobPageProps) {
  const { jobInfo, companyId } = await getJobInfo(jobId);
  const company = await getCompanyInfo(companyId);

  return (
    <>
      <CompanyHeader company={company} jobInfo={jobInfo} />
      <div className="flex flex-col gap-8 w-full max-w-2xl bg-white dark:bg-very-dark-blue rounded px-6 py-10 m-auto">
        <JobHeader jobInfo={jobInfo} />
        <JobDetails jobInfo={jobInfo} />

        <Button label={'Apply Now!'} />
      </div>
    </>
  );
}
