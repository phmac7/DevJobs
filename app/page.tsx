import { SearchInput } from '@/components/molecules';
import { Jobs } from '@/models/types';

const getJobs = async () => {
  const res = await (
    await fetch('http://localhost:1337/api/jobs?populate=*', {
      headers: {
        Authorization: 'Bearer ' + process.env.STRAPI_KEY,
        'Content-Type': 'application/json',
      },
    })
  ).json();
  const data: Jobs[] = res.data;
  return data;
};

export default async function Page() {
  const jobs = await getJobs();
  console.log(jobs);
  return (
    <div>
      <SearchInput />
      <div>
        {jobs.map((job) => (
          <p key={job.id}>{job.attributes.position}</p>
        ))}
      </div>
    </div>
  );
}
