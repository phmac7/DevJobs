import { JobList } from '@/components/organisms';
import { createClient } from 'contentful';
import { Companies, Jobs } from '@/models/types';

const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE!,
  accessToken: process.env.NEXT_CONTENTFUL_DELIVERY!,
});

const getJobs = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'jobDescription',
    });
    return response.items;
  } catch (err) {
    console.log(err);
  }
};

const getCompanies = async () => {
  try {
    const response = await client.getEntries({ content_type: 'company' });
    return response.items;
  } catch (err) {
    console.log(err);
  }
};

export default async function Page() {
  const jobs = await getJobs();
  const companies = await getCompanies();

  if (!jobs || !companies) {
    return <p>Loading...</p>;
  }

  return <JobList jobs={jobs} companies={companies} />;
}
