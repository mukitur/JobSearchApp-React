import JobCategory from '../JobCategory/JobCategory';

const JobCategories = ({ catLists }) => {
  //   console.log(catLists);
  return (
    <div>
      <h2 className="text-4xl text-center mt-14 mb-5">
        Job Category List ({catLists.length})
      </h2>
      <p className="text-center w-1/2 mx-auto mb-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {catLists.map((catList) => (
          <JobCategory key={catList.id} catList={catList} />
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
