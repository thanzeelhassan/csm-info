import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discussions from "./Pages/Discussions/Discussions";
import ColouredMangaPage from "./Pages/ColouredMangaPage/ColouredMangaPage";
import AllTogether from "./Pages/AllTogether/AllTogether";

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
    path: "/csm-info/discussions/",
    element: <Discussions />,
  },
  {
    path: "/csm-info/colouredmanga/",
    element: <ColouredMangaPage />,
  },
  {
    path: "/csm-info/discussions/AllTogether",
    element: <AllTogether />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
