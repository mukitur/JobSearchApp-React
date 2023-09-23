import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
  const catLists = useLoaderData();
  const fJobs = useLoaderData();
  return (
    <div>
      <Banner />
      <JobCategories catLists={catLists} />
      <FeaturedJobs fJobs={fJobs} />
    </div>
  );
};

export default Home;
