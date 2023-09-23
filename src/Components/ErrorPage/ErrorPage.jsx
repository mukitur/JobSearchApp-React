import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-center  align-center justify-center my-20">
      <h2>Opps!! No Page Found</h2>
      <Link to={'/'}>
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
