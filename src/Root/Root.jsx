import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className=" mx-auto max-w-screen-xl">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
