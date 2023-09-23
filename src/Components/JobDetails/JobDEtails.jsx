import { useLoaderData, useParams } from 'react-router-dom';

const JobDEtails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  console.log(job, id);
  return (
    <div>
      <h2>Job Details</h2>
    </div>
  );
};

export default JobDEtails;
