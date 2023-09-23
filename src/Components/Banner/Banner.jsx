const Banner = () => {
  return (
    <div className="hero  min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            One Step <br />
            Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job!</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
