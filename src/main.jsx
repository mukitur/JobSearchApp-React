import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('./categories.json'),
        loader: () => fetch('./jobs.json'),
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/',
        element: <FeaturedJobs />,
        loader: () => fetch('./jobs.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
