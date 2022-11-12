import { Button } from '@/components/atoms';
import { Companies, Jobs } from '@/models/types';
import Image from 'next/image';
import Link from 'next/link';

interface jobPageProps {
  params: {
    jobId: string;
  };
}

const getJobInfo = async (jobId: string) => {
  const res = await (
    await fetch(`http://localhost:1337/api/jobs/${jobId}?populate=*`, {
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
      `http://localhost:1337/api/companies/${companyId}?populate=logo`,
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
  console.log(company.id);

  return (
    <>
      <Link href={'/'}>
        <Button label={'Back'} />
      </Link>
      <div>{jobInfo.attributes.description}</div>
      <div>{company.attributes.logo.data?.attributes.url}</div>
    </>
  );
}
