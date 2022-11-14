import { Jobs } from '@/models/types';

interface filters {
  jobs: Jobs[];
  position: string;
  location: string;
  isFullTime: boolean;
}

export default function useFilterJobs({
  position,
  location,
  isFullTime,
  jobs,
}: filters) {
  let filteredJobs = jobs;

  const getFilteredJobs = () => {
    if (location !== '' && position !== '') {
      filteredJobs = jobs.filter(
        (job) =>
          job.attributes.position
            .toLowerCase()
            .includes(position.toLowerCase()) &&
          job.attributes.location.toLowerCase().includes(location.toLowerCase())
      );
      return filteredJobs;
    }
    if (position !== '') {
      filteredJobs = jobs.filter((job) =>
        job.attributes.position.toLowerCase().includes(position.toLowerCase())
      );
      return filteredJobs;
    }
    if (location !== '') {
      filteredJobs = jobs.filter((job) =>
        job.attributes.location.toLowerCase().includes(location.toLowerCase())
      );
      return filteredJobs;
    }
    if (isFullTime) {
      filteredJobs = jobs.filter(
        (job) => job.attributes.contract === 'Full Time'
      );
      return filteredJobs;
    }

    if (position === '' && location === '' && isFullTime === false) {
      filteredJobs = jobs;
      return filteredJobs;
    }
  };
  return getFilteredJobs();
}
