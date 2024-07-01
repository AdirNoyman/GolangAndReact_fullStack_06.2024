import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Home,
  Movies,
  Error,
  Genres,
  EditMovie,
  ManageCatalogue,
  GraphQL,
  Login,
  Movie,
} from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/movies/:id', element: <Movie /> },
      { path: '/genres', element: <Genres /> },
      { path: '/admin/movie/0', element: <EditMovie /> },
      { path: '/manage-catalogue', element: <ManageCatalogue /> },
      { path: '/graphql', element: <GraphQL /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
