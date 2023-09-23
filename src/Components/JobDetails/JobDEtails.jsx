import { Link, useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
const JobDEtails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  console.log(job, id);
  const {
    job_description,
    job_title,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    contact_information,
  } = job;

  const handleSweetAlert = () => {
    swal('Great!', 'Jobs added successfully!', 'success');
  };
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="md:col-span-3">
          <h2 className="my-3">Job Description: {job_description}</h2>
          <h2>Job Responsibility: {job_responsibility}</h2>
          <h3 className="my-3">
            Educational Requirements: {educational_requirements}
          </h3>
          <h3>Experiences: {experiences}</h3>
        </div>
        <div>
          <h2 className="text-2xl mb-4 font-bold">Job Details</h2>
          <p>Salary: {salary}</p>
          <p>JOB Title: {job_title}</p>
          <h2 className="text-2xl my-4 font-bold">Contact Information</h2>
          <p>Phone: {contact_information.phone}</p>
          <p>Email: {contact_information.email}</p>
          <p>Address: {contact_information.address}</p>
          <div className="flex justify-between">
            <button
              onClick={handleSweetAlert}
              className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded-md text-white my-5"
            >
              Apply Now
            </button>

            <Link to={'/applied'}>
              <button className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded-md text-white my-5">
                View Applied Job
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDEtails;
