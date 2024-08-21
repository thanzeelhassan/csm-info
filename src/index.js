import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './Pages/AboutPage/AboutPage';
import Discussions from './Pages/Discussions/Discussions';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import ColouredMangaPage from './Pages/ColouredMangaPage/ColouredMangaPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/csm-info/",
    element: <App />,
  },
  {
    path: "/about/",
    element: <AboutPage />,
  },
  {
    path: "/discussions/",
    element: <Discussions />,
  },
  {
    path: "/explore/",
    element: <ExplorePage />,
  },
  {
    path: "/colouredmanga/",
    element: <ColouredMangaPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
