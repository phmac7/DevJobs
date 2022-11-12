import { JobList } from '@/components/organisms';
import { Companies, Jobs } from '@/models/types';
import { Suspense } from 'react';

const getJobs = async () => {
  try {
    const res = await (
      await fetch('http://localhost:1337/api/jobs?populate=*', {
        headers: {
          Authorization: 'Bearer ' + process.env.STRAPI_KEY,
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      })
    ).json();
    const data: Jobs[] = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getCompanies = async () => {
  try {
    const res = await (
      await fetch('http://localhost:1337/api/companies?populate=logo', {
        headers: {
          Authorization: 'Bearer ' + process.env.STRAPI_KEY,
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      })
    ).json();
    const data: Companies[] = await res.data;
    return data;
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
