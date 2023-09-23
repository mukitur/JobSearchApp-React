const JobCategory = ({ catList }) => {
  // console.log(catList);
  const { availability, category_name, logo } = catList;
  return (
    <div className="bg-gray-100 rounded-md p-4 shadow-md">
      <img src={logo} alt="" />
      <h2 className="text-2xl mt-4 mb-3">{category_name}</h2>
      <p className="text-[#A3A3A3]">{availability}</p>
    </div>
  );
};

export default JobCategory;
