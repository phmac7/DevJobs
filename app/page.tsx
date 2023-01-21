import { JobList } from '@/components/organisms';
import { createClient } from 'contentful';
import { Company, Job } from '@/models/contetful';

export const revalidate = 60;

const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE!,
  accessToken: process.env.NEXT_CONTENTFUL_DELIVERY!,
});

const getJobs = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'jobDescription',
    });
    const data = response.items;
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getCompanies = async () => {
  try {
    const response = await client.getEntries({ content_type: 'company' });
    const data = response.items;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Page() {
  const jobsResponse: unknown = await getJobs();
  const companiesResponse: unknown = await getCompanies();

  const getJobType = (jobs: Job[]) => {
    return jobs;
  };

  const getCompanyType = (company: Company[]) => {
    return company;
  };

  const jobs = getJobType(jobsResponse as Job[]);
  const companies = getCompanyType(companiesResponse as Company[]);

  if (!jobs || !companies) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <JobList jobs={jobs} companies={companies} />;
    </>
  );
}
