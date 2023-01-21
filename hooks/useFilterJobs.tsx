import { Job } from '@/models/contetful';

interface filters {
  jobs: Job[];
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
    if (location !== '' && position !== '' && isFullTime) {
      filteredJobs = jobs.filter(
        (job) =>
          job.fields.title.toLowerCase().includes(position.toLowerCase()) &&
          job.fields.location.fields.country
            .toLowerCase()
            .includes(location.toLowerCase()) &&
          job.fields.contractType.fields.name === 'Full Time'
      );
      return filteredJobs;
    }

    if (position !== '' && isFullTime) {
      filteredJobs = jobs.filter(
        (job) =>
          job.fields.contractType.fields.name === 'Full Time' &&
          job.fields.title.toLowerCase().includes(position.toLowerCase())
      );
      return filteredJobs;
    }

    if (location !== '' && isFullTime) {
      filteredJobs = jobs.filter(
        (job) =>
          job.fields.contractType.fields.name === 'Full Time' &&
          job.fields.location.fields.country
            .toLowerCase()
            .includes(location.toLowerCase())
      );
      return filteredJobs;
    }

    if (location !== '' && position !== '') {
      filteredJobs = jobs.filter(
        (job) =>
          job.fields.title.toLowerCase().includes(position.toLowerCase()) &&
          job.fields.location.fields.country
            .toLowerCase()
            .includes(location.toLowerCase())
      );
      return filteredJobs;
    }
    if (position !== '' && location === '' && isFullTime === false) {
      filteredJobs = jobs.filter((job) =>
        job.fields.title.toLowerCase().includes(position.toLowerCase())
      );
      return filteredJobs;
    }
    if (location !== '') {
      filteredJobs = jobs.filter((job) =>
        job.fields.location.fields.country
          .toLowerCase()
          .includes(location.toLowerCase())
      );
      return filteredJobs;
    }
    if (isFullTime && location === '' && position === '') {
      filteredJobs = jobs.filter(
        (job) => job.fields.contractType.fields.name === 'Full Time'
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
