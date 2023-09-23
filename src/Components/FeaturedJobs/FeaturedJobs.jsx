import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
  const fJobs = useLoaderData();
  // console.log(fJobs);
  return (
    <div>
      <h2 className="text-4xl text-center mt-20 mb-5">
        Featured Jobs ({fJobs.length})
      </h2>
      <p className="text-center w-1/2 mx-auto mb-16">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-16 p-6 ">
        {fJobs.map((job) => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
