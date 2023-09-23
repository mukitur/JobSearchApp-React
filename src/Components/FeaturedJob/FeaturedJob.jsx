import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FeaturedJob = ({ job }) => {
  const {
    id,
    company_name,
    logo,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_title,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="mt-4" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-xl text-[#757575]">{company_name}</p>
        <div className="my-3">
          <button className="font-bold border border-purple-500 px-4 py-2 rounded-md text-purple-500 mr-3">
            {remote_or_onsite}
          </button>
          <button className="font-bold border border-purple-500 px-4 py-2 rounded-md text-purple-500 ">
            {job_type}
          </button>
        </div>
        <div className="flex gap-3 items-center align-center text-xl text-[#757575]">
          <h3 className="flex gap-2 items-center">
            {' '}
            <MdLocationOn /> {location}
          </h3>
          <h3>{salary}</h3>
        </div>
        <div className="card-actions my-4 ">
          <Link to={`/job/${id}`}>
            <button className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded-md text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
