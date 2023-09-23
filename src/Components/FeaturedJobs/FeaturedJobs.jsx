import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = ({ fJobs }) => {
  //   const fJobs = useLoaderData();
  console.log(fJobs);
  return (
    <div>
      <h2 className="text-4xl text-center mt-20 mb-5">Featured Jobs</h2>
      <p className="text-center w-1/2 mx-auto mb-16">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
    </div>
  );
};

export default FeaturedJobs;
